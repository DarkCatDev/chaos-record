import { useState } from "react";
import styles from "./RecordViewer.module.css";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TraitEntry {
  value: string;   // short label shown on the chip
  detail: string;  // long description shown on hover
}


export interface bookDetails {
  publicationDate?:                TraitEntry;
  Publisher?:     TraitEntry;
  pageCount?:           TraitEntry;
  isbn?:           TraitEntry;
  series?:          TraitEntry;
  edition?: TraitEntry;
}

export interface themeAndTone {
  genreSubType?:    TraitEntry;
  themes?:  TraitEntry;
  coreMessage?: TraitEntry;
  storyFocus?:     TraitEntry;
  tone?:  TraitEntry;
  narrativeType?: TraitEntry;
}

export interface RecordEntry {
  id: string;
  name: string;
  subtitle?: string;
  language?: string;
  genres?: string[];
  author?: string;
  format?: string;
  bookDetails?: bookDetails;
  themeAndTone?: themeAndTone;
  synopsis?: string;
  authorsInsight?: string;
  notes?: string;
  imageSrc?: string;
  thumbnailSrc?: string;
}

interface RecordViewerProps {
  entries: RecordEntry[];
  title?: string;
}

// ─── Trait Chip ───────────────────────────────────────────────────────────────

function TraitChip({ label, trait }: { label: string; trait: TraitEntry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.chipRow}>
      <span className={styles.chipLabel}>{label}</span>
      <div
        className={styles.chipWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className={styles.chip}>{trait.value}</span>
        {hovered && (
          <div className={styles.tooltip}>
            <span className={styles.tooltipText}>{trait.detail}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Trait Grid ───────────────────────────────────────────────────────────────

const PHYSICAL_LABELS: Record<keyof bookDetails, string> = {
  publicationDate:                 "Publication Date",
  Publisher:      "Publisher",
  pageCount:            "Page Count",
  isbn:            "ISBN",
  series:           "Series",
  edition:           "Edition"
};

const THEME_AND_TONE_LABELS: Record<keyof themeAndTone, string> = {
  genreSubType:    "Genre Subtype",
  themes:  "Themes",
  coreMessage: "Core Message",
  storyFocus:     "Story Focus",
  tone:  "Tone",
  narrativeType: "Narrative Type",
};

function TraitGrid<T extends Record<string, TraitEntry | undefined>>({
  data,
  labels,
}: {
  data: T;
  labels: Record<keyof T, string>;
}) {
  const entries = Object.entries(data).filter(([, v]) => v !== undefined) as [
    keyof T,
    TraitEntry
  ][];

  return (
    <div className={styles.traitGrid}>
      {entries.map(([key, trait]) => (
        <TraitChip key={String(key)} label={labels[key]} trait={trait} />
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function RecordViewer({ entries, title }: RecordViewerProps) {
  const [selected, setSelected] = useState<RecordEntry>(entries[0]);

  return (
    <section className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.layout}>

        {/* ── LEFT: Detail Panel ── */}
        <div className={styles.detail}>

          {/* LEFT COLUMN: Image + Basic Info */}
          <div className={styles.detailLeft}>

            {/* Image */}
            <div className={styles.imageBox}>
              {selected.imageSrc ? (
                <img
                  src={selected.imageSrc}
                  alt={selected.name}
                  className={styles.image}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imagePlaceholderText}>image</span>
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className={styles.basicInfo}>
              <h3 className={styles.entryName}>{selected.name}</h3>

              {selected.subtitle && (
                <p className={styles.subtitle}>{selected.subtitle}</p>
              )}

              {selected.genres && selected.genres.length > 0 && (
                <div className={styles.genres}>
                  {selected.genres.map((genre) => (
                    <span key={genre} className={styles.genre}>{genre}</span>
                  ))}
                </div>
              )}

              {selected.language && (
                <p className={styles.metaItem}>
                  <span className={styles.metaLabel}>Language</span>
                  <span className={styles.metaValue}>{selected.language}</span>
                </p>
              )}

              {selected.author && (
                <p className={styles.metaItem}>
                  <span className={styles.metaLabel}>Author</span>
                  <span className={styles.metaValue}>{selected.author}</span>
                </p>
              )}

              {selected.format && (
                <p className={styles.metaItem}>
                  <span className={styles.metaLabel}>Format</span>
                  <span className={styles.metaValue}>{selected.format}</span>
                </p>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Content Sections */}
          <div className={styles.detailRight}>

            {/* Row 1: Book Details + Theme and Tone */}
            <div className={styles.sectionRow}>
              {selected.bookDetails && (
                <div className={styles.sectionBox}>
                  <h4 className={styles.sectionLabel}>Book Details</h4>
                  <TraitGrid
                    data={selected.bookDetails as Record<keyof bookDetails, TraitEntry | undefined>}
                    labels={PHYSICAL_LABELS}
                  />
                </div>
              )}
              {selected.themeAndTone && (
                <div className={styles.sectionBox}>
                  <h4 className={styles.sectionLabel}>Theme and Tone</h4>
                  <TraitGrid
                    data={selected.themeAndTone as Record<keyof themeAndTone, TraitEntry | undefined>}
                    labels={THEME_AND_TONE_LABELS}
                  />
                </div>
              )}
            </div>

            {/* Background Story */}
            {selected.synopsis && (
              <div className={styles.sectionBoxFull}>
                <h4 className={styles.sectionLabel}>Synopsis</h4>
                <p className={styles.sectionText}>{selected.synopsis}</p>
              </div>
            )}

            {/* Author's Insight */}
            {selected.authorsInsight && (
              <div className={styles.sectionBoxFull}>
                <h4 className={styles.sectionLabel}>Author's Insight</h4>
                <p className={styles.sectionText}>{selected.authorsInsight}</p>
              </div>
            )}

            {/* Notes */}
            {selected.notes && (
              <div className={styles.sectionBoxFull}>
                <h4 className={styles.sectionLabel}>Notes</h4>
                <p className={styles.sectionText}>{selected.notes}</p>
              </div>
            )}

          </div>
        </div>

        {/* ── RIGHT: Gallery ── */}
        <div className={styles.gallery}>
          {entries.map((entry) => (
            <button
              key={entry.id}
              className={`${styles.card} ${selected.id === entry.id ? styles.cardActive : ""}`}
              onClick={() => setSelected(entry)}
            >
              {entry.thumbnailSrc ? (
                <img
                  src={entry.thumbnailSrc}
                  alt={entry.name}
                  className={styles.cardImage}
                />
              ) : (
                <div className={styles.cardImagePlaceholder}>
                  <span className={styles.cardImagePlaceholderText}>img</span>
                </div>
              )}
              <span className={styles.cardName}>{entry.name}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}