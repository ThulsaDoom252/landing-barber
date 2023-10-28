import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import hm1 from "../../assets/Gallery/hm1.png"
import hm2 from "../../assets/Gallery/hm2.png"
import hm3 from "../../assets/Gallery/hm3.png"
import hm4 from "../../assets/Gallery/hm4.png"
import hm5 from "../../assets/Gallery/hm5.png"
import hm6 from "../../assets/Gallery/hm6.png"

const Gallery = ({isMd}) => {

    const pics1 = [
        {src: hm1, alt: 'picture-1'},
        {src: hm4, alt: 'picture-2'},
        {src: hm5, alt: 'picture-3'},
    ]

    const pics2 = [
        {src: hm2, alt: 'picture-4'},
        {src: hm3, alt: 'picture-5'},
        {src: hm6, alt: 'picture-6'},
    ]

    return (
        <section>
            <Container fluid className='gallery-section'>
                <h1 className='gallery-title'>Our <span className='colored-word'>Gallery</span></h1>
                <div className='gallery-block'>
                    <Row className='py-1'>
                        {pics1.map((img, index) =>
                            <Col xs={isMd && 12} className={`px-1 ${isMd && 'py-1'}`}>
                                <img key={index} src={img.src} alt={img.alt}/>
                            </Col>)}

                    </Row>
                    <Row className='py-1'>
                        {pics2.map((img, index) =>
                            <Col xs={isMd && 12} className={`px-1 ${isMd && 'py-1'}`}>
                                <img key={index} src={img.src} alt={img.alt}/>
                            </Col>)}
                    </Row>
                </div>
                <button className='gallery-button'>View all</button>
            </Container>
        </section>
    );
};

export default Gallery;