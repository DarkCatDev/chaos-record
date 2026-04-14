import styles from "./RecentUpdates.module.css";

interface RecentUpdate {
  page: string;
  section: string;
  timeAgo: string;
}

// TODO: Replace with real update data
const recentUpdates: RecentUpdate[] = [
  //{ page: "Saga", section: "Book 1 - Pseudo Athena", timeAgo: "Apr.13, 2026" },
  { page: "Faces", section: "Added: Medeana Asperse", timeAgo: "Apr.13, 2026" },
  //{ page: "Origins", section: "The First Pantheon", timeAgo: "Apr.13, 2026" },
  //{ page: "Realm", section: "Updated: Modern Athens", timeAgo: "Apr.13, 2026" },
];

export default function RecentUpdates() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>✦ Recent Updates</h2>
      <ul className={styles.updatesList}>
        {recentUpdates.map((u, i) => (
          <li key={i} className={styles.updateItem}>
            <div>
              <span className={styles.updatePage}>{u.page}</span>
              <span className={styles.updateSection}> · {u.section}</span>
            </div>
            <span className={styles.updateTime}>{u.timeAgo}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
