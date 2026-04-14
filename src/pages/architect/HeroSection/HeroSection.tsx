import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";


import devPic from '../../../assets/img/BaganiTheme.png'


export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>

      <div className={`${styles.heroInner} ${visible ? styles.visible : ""}`}>
        <p className={styles.heroEyebrow}> — Web. and Game Developer | Author — </p>
        <h1 className={styles.heroTitle}>Arjay Pielago</h1>
        <p className={styles.heroSub}>
          Creating Something From Ones and Zeroes. <br /> From Chaos to Code.
        </p>

      </div>
      
      <div className={styles.profilePic}>
        <img src={devPic} alt="Developer" />
      </div>

    </section>
  );
}
