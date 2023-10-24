import "./styles.scss"
import 'reset-css';
import Header from './components/Header';
import HairStyleSection from './components/Content/HairStyleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistorySection from './components/Content/HistorySection';
import {Container} from 'react-bootstrap';
import Services from './components/Content/Services';
import Gallery from './components/Content/Gallery';


function App() {
    return (
        <Container fluid className='wrapper'>
            <Header/>
            <main>
                <HairStyleSection/>
                <HistorySection/>
                <Services/>
                <Gallery/>
            </main>
        </Container>

    );
}

export default App;
