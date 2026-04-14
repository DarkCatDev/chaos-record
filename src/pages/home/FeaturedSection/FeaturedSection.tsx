import styles from "./FeaturedSection.module.css";

interface FeaturedEntry {
  category: string;
  title: string;
  excerpt: string;
  tag: string;
  href: string;
}

// TODO: Replace with real data
const featured: FeaturedEntry = {
  category: "Vessels · Faces",
  title: "Medeana Asperse",
  excerpt:
    "A demigod not born of passion but tragedy, and past forced to be become a mystery. Until the day she had no choice but to seek it through a journey, uncovering the truth of her own destiny",
  tag: "Demigod",
  href: "/vessels/faces",
};

export default function FeaturedSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>✦ Featured Entry</h2>
      <div className={styles.featuredCard}>
        <span className={styles.featuredCategory}>{featured.category}</span>
        <span className={styles.featuredTag}>{featured.tag}</span>
        <h3 className={styles.featuredTitle}>{featured.title}</h3>
        <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
        <a href={featured.href} className={styles.featuredLink}>
          Read full entry →
        </a>
      </div>
    </section>
  );
}
