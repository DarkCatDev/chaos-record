import styles from './Tribute.module.css'


function Tribute() {
  return (
    <section className={styles.tributeSection}>
        <div className={styles.tributeContainer}>
            <p>
                For those who stayed.
                Thank you
            </p>
        </div>
    </section>
  );
}

export default Tribute;