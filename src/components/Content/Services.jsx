import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import hairCut from "../../assets/Services/hairCut.png"
import beardCut from "../../assets/Services/bearCut.png"
import facialPack from "../../assets/Services/facialPack.png"

const Services = ({isMd}) => {
    const serviceItems = [
        {
            src: hairCut,
            alt: 'hair-cut-icon',
            title: 'Hair Cut',
            text: `Elevate your style with our precision hair cutting service. 
                  Our skilled stylists will help you achieve the perfect haircut 
                  tailored to your unique personality and preferences.`
        },
        {
            src: beardCut,
            alt: 'beard-cut-icon',
            title: 'Beard Cut',
            text: `Define your look with our expert beard grooming service. 
            Whether you prefer a clean shave or a meticulously sculpted beard, 
            our professional barbers will make sure your facial hair looks its best.`
        },
        {
            src: facialPack,
            alt: 'facial-pack-icon',
            title: 'Facial Pack',
            text: `Rejuvenate your skin with our rejuvenating facial packs. Experience relaxation and transformation as our 
            estheticians pamper your skin with a range of rejuvenating treatments, leaving you feeling refreshed and revitalized..`
        },
    ]

    return (
        <section>
            <Container fluid>
                <div className='services-title'>
                    <h1>Services We</h1>
                    <h1 className='colored-word'>Provide</h1>
                </div>
                <div className='services-block'>
                    <Row>
                        {serviceItems.map((item, index) => (
                            <Col className={`services-col ${!isMd && 'services-gap'}`} xs={isMd && 12}>
                                <div key={index} className='services-img-item'>
                                    <img src={item.src} alt={item.alt}/>
                                </div>
                                <h3 className='services-col-title'>{item.title}</h3>
                                <div className='services-col-text'>{item.text}</div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Services;