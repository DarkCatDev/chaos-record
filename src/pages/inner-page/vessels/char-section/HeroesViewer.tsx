import RecordViewer from "../../../../components/reviewer-section/RecordViewer";
import heroesData from '../data/heroes.json';

function HeroesViewer() {
  return (
    <RecordViewer
      entries={heroesData}
      title="Heroes"
    />
  );
}


export default HeroesViewer;