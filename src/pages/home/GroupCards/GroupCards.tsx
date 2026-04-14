import styles from "./GroupCards.module.css";

import Unfoldings from "../../../assets/img/Unfoldings.png";
import Vessels from "../../../assets/img/Vessels.png";
import Existence from "../../../assets/img/Existence.png";
import Codex from "../../../assets/img/Codex.png";

interface GroupCard {
  label: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const groupCards: GroupCard[] = [
  {
    label: "Unfoldings",
    description: "The saga of events and the ages that shaped the world.",
    imageSrc: Unfoldings, // TODO: e.g. "/images/unfoldings-emblem.png"
    imageAlt: "Unfoldings emblem",
    href: "/unfoldings",
  },
  {
    label: "Vessels",
    description: "Faces, sworn orders, and the kin that carry the myth.",
    imageSrc: Vessels, // TODO: e.g. "/images/vessels-emblem.png"
    imageAlt: "Vessels emblem",
    href: "/vessels",
  },
  {
    label: "Existence",
    description: "Realms, origins, gifts, relics, and the beasts within.",
    imageSrc: Existence, // TODO: e.g. "/images/existence-emblem.png"
    imageAlt: "Existence emblem",
    href: "/existence",
  },
  {
    label: "Codex",
    description: "The tongue of Chaos — every term, word, and name defined.",
    imageSrc: Codex, // TODO: e.g. "/images/codex-emblem.png"
    imageAlt: "Codex emblem",
    href: "/codex",
  },
];

function CardEmblem({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return (
      <div className={styles.cardImagePlaceholder}>
        <span className={styles.cardImagePlaceholderText}>emblem</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={styles.cardImage} />;
}

export default function GroupCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Navigate the Record</h2>
      <div className={styles.cardsGrid}>
        {groupCards.map((card) => (
          <a key={card.label} href={card.href} className={styles.card}>
            <CardEmblem src={card.imageSrc} alt={card.imageAlt} />
            <h3 className={styles.cardLabel}>{card.label}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
            <span className={styles.cardArrow}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
