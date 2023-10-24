import './App.css';
import 'reset-css';
import Header from './components/Header';
import HairStyleSection from './components/HairStyleSection';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className={'wrapper'}>
            <Header/>
            <main>
                <HairStyleSection/>
            </main>
        </div>
    );
}

export default App;
