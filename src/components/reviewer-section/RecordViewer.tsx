import { useState } from "react";
import styles from "./RecordViewer.module.css";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TraitEntry {
  value: string;   // short label shown on the chip
  detail: string;  // long description shown on hover
}

export interface PhysicalAppearance {
  age?:                TraitEntry;
  heightAndBuild?:     TraitEntry;
  skinTone?:           TraitEntry;
  eyeColor?:           TraitEntry;
  hairColor?:          TraitEntry;
  distinctiveFeatures?: TraitEntry;
  healthCondition?:    TraitEntry;
}

export interface Personality {
  coreType?:    TraitEntry;
  coreTraits?:  TraitEntry;
  moralValues?: TraitEntry;
  desires?:     TraitEntry;
  weaknesses?:  TraitEntry;
  temperament?: TraitEntry;
  socialStyle?: TraitEntry;
}

export interface RecordEntry {
  id: string;
  name: string;
  subtitle?: string;
  gender?: string;
  tags?: string[];
  origin?: string;
  weapon?: string;
  physicalAppearance?: PhysicalAppearance;
  personality?: Personality;
  backgroundStory?: string;
  characterPsychology?: string;
  additionalInfo?: string;
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

const PHYSICAL_LABELS: Record<keyof PhysicalAppearance, string> = {
  age:                 "Age",
  heightAndBuild:      "Height / Build",
  skinTone:            "Skin Tone",
  eyeColor:            "Eye Color",
  hairColor:           "Hair",
  distinctiveFeatures: "Distinctive",
  healthCondition:     "Health",
};

const PERSONALITY_LABELS: Record<keyof Personality, string> = {
  coreType:    "Type",
  coreTraits:  "Traits",
  moralValues: "Values",
  desires:     "Desires",
  weaknesses:  "Flaws",
  temperament: "Temperament",
  socialStyle: "Social Style",
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

              {selected.tags && selected.tags.length > 0 && (
                <div className={styles.tags}>
                  {selected.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}

              {selected.gender && (
                <p className={styles.metaItem}>
                  <span className={styles.metaLabel}>Gender</span>
                  <span className={styles.metaValue}>{selected.gender}</span>
                </p>
              )}

              {selected.origin && (
                <p className={styles.metaItem}>
                  <span className={styles.metaLabel}>Origin</span>
                  <span className={styles.metaValue}>{selected.origin}</span>
                </p>
              )}

              {selected.weapon && (
                <p className={styles.metaItem}>
                  <span className={styles.metaLabel}>Weapon</span>
                  <span className={styles.metaValue}>{selected.weapon}</span>
                </p>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Content Sections */}
          <div className={styles.detailRight}>

            {/* Row 1: Physical Appearance + Personality */}
            <div className={styles.sectionRow}>
              {selected.physicalAppearance && (
                <div className={styles.sectionBox}>
                  <h4 className={styles.sectionLabel}>Physical Appearance</h4>
                  <TraitGrid
                    data={selected.physicalAppearance as Record<keyof PhysicalAppearance, TraitEntry | undefined>}
                    labels={PHYSICAL_LABELS}
                  />
                </div>
              )}
              {selected.personality && (
                <div className={styles.sectionBox}>
                  <h4 className={styles.sectionLabel}>Personality</h4>
                  <TraitGrid
                    data={selected.personality as Record<keyof Personality, TraitEntry | undefined>}
                    labels={PERSONALITY_LABELS}
                  />
                </div>
              )}
            </div>

            {/* Background Story */}
            {selected.backgroundStory && (
              <div className={styles.sectionBoxFull}>
                <h4 className={styles.sectionLabel}>Background Story</h4>
                <p className={styles.sectionText}>{selected.backgroundStory}</p>
              </div>
            )}

            {/* Character Psychology */}
            {selected.characterPsychology && (
              <div className={styles.sectionBoxFull}>
                <h4 className={styles.sectionLabel}>Character Psychology</h4>
                <p className={styles.sectionText}>{selected.characterPsychology}</p>
              </div>
            )}

            {/* Additional Information */}
            {selected.additionalInfo && (
              <div className={styles.sectionBoxFull}>
                <h4 className={styles.sectionLabel}>Additional Information</h4>
                <p className={styles.sectionText}>{selected.additionalInfo}</p>
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