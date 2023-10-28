import "./styles.scss"
import 'reset-css';
import Header from './components/Header';
import HairStyleSection from './components/Content/HairStyleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistorySection from './components/Content/HistorySection';
import {Container} from 'react-bootstrap';
import Services from './components/Content/Services';
import Gallery from './components/Content/Gallery';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';
import Wrapper from './components/Wrapper';


function App() {

    const [isMd, setIsMd] = useState(false)
    const mediumScreenWidth = 987


    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < mediumScreenWidth ? setIsMd(true) : setIsMd(false)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('orientationchange', handleResize)
        }

    }, []);

    useEffect(() => {
        if (window.innerWidth <= mediumScreenWidth) {
            setIsMd(true)
        }
    }, [])

    return (
        <Wrapper>
            <Header/>
            <main>
                <HairStyleSection/>
                <HistorySection isMd={isMd}/>
                <Services isMd={isMd}/>
                <Gallery isMd={isMd}/>
            </main>
            <Footer/>
        </Wrapper>


    );
}

export default App;
