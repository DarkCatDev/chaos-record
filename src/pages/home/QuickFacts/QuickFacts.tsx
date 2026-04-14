import { useEffect, useState } from "react";
import styles from "./QuickFacts.module.css";

interface QuickFact {
  fact: string;
}

// TODO: Replace with real facts about your world
const quickFacts: QuickFact[] = [
  { fact: "The gods are now the rulers of the world. Each owning their own country/ies." },
  { fact: "True humans are now endangered species." },
  { fact: "Chaos existed before the first word was spoken — or written." },
  { fact: "Mount Olympus still stands. But now only the gods' meeting place." },
  { fact: "70% of the human race are now descendants of demigods. Only 15% of those are pure-blooded descendants." },
  { fact: "Gods no longer create demigods. They choose champions, granting tiny fragments of their power to worthy mortals." },
  { fact: "mythical creatures now live among the new humans."},
];


export default function QuickFacts() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quickFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>✦ Quick Facts</h2>
      <div className={styles.factsBox}>
        <p className={styles.factText}>"{quickFacts[current].fact}"</p>
        <div className={styles.factDots}>
          {quickFacts.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to fact ${i + 1}`}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
