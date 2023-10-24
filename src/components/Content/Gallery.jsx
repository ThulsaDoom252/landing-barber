import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import hm1 from "../../assets/Gallery/hm1.png"
import hm2 from "../../assets/Gallery/hm2.png"
import hm3 from "../../assets/Gallery/hm3.png"
import hm4 from "../../assets/Gallery/hm4.png"
import hm5 from "../../assets/Gallery/hm5.png"
import hm6 from "../../assets/Gallery/hm6.png"

const Gallery = () => {
    return (
        <section>
            <Container fluid className='gallery-section'>
                <h1 className='gallery-title'>Our <span className='colored-word'>Gallery</span></h1>
                <div className='gallery-block'>
                    <Row className='py-1'>
                        <Col className='px-1'><img src={hm1} alt="picture-1"/></Col>
                        <Col className='px-1'><img src={hm4} alt="picture-2"/></Col>
                        <Col className='px-1'><img src={hm5} alt="picture-3"/></Col>
                    </Row>
                    <Row className='py-1'>
                        <Col className='px-1'><img src={hm2} alt='picture-4'/></Col>
                        <Col className='px-1'><img src={hm3} alt='picture-5'/></Col>
                        <Col className='px-1'><img src={hm6} alt='picture-6'/></Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Gallery;