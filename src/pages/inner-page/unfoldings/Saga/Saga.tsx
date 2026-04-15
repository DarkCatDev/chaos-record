import SagaList from '../../../../components/book-list/RecordViewer'
import SagaData from '../data/SagaData.json';

function Saga() {
    return (
        <SagaList 
            entries={SagaData}
            title = "Sagas and Stories"
        />

    )
}

export default Saga