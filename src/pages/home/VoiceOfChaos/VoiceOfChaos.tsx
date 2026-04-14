import styles from "./VoiceOfChaos.module.css";

export default function VoiceOfChaos() {
  return (
    <section className={styles.voice}>
      <div className={styles.voiceInner}>
        <span className={styles.voiceLabel}>✦ The Voice of Chaos ✦</span>
        <blockquote className={styles.voiceQuote}>
          "
          <br />
           You dare seek the truth of all things yet do you have the courage to keep reading?
          What lies beyond are not mere folktales and legends. But histories that was altered 
           and secrets that the universe itself tried to hide to protect the minds of the mortals.
          <br />
          <br />
          So be warned, Mortal: The truth may not be the one you expect.
          <br /> "
        </blockquote>
        <span className={styles.voiceAttrib}>— Khaos, Keeper of the Record</span>
      </div>
    </section>
  );
}
