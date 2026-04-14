import HeroSection from "./HeroSection/HeroSection";
import VoiceOfChaos from "./VoiceOfChaos/VoiceOfChaos";
import GroupCards from "./GroupCards/GroupCards";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import QuickFacts from "./QuickFacts/QuickFacts";
import RecentUpdates from "./RecentUpdates/RecentUpdates";
import styles from "./Home.module.css";



export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <VoiceOfChaos />

      <div className={styles.container}>
        <GroupCards />

        <div className={styles.twoCol}>
          <FeaturedSection />
          <div className={styles.twoColRight}>
            <QuickFacts />
            <RecentUpdates />
          </div>
        </div>
      </div>


    </main>
  );
}