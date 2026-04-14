import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={`${styles.heroInner} ${visible ? styles.visible : ""}`}>
        <p className={styles.heroEyebrow}>— All things & all times —</p>
        <h1 className={styles.heroTitle}>Khaos Record</h1>
        <p className={styles.heroSub}>
          Every myth, every name, every
          age — recorded through space and time, keeping the truth of the universe.
        </p>
        <a href="/unfoldings" className={styles.heroCta}>
          Enter the Record
        </a>
      </div>
    </section>
  );
}
