import React from 'react';
import Hairstyles from "../assets/Hairstyles.png"
import {Col, Container, Row} from 'react-bootstrap';

const HairStyleSection = () => {
    return (
        <section>
            <Container fluid className='hairstyle-section'>
                <Row>
                    <Col lg={4} md={12}>
                        <div className='hairstyle-block'>
                            <div className='hairstyle-title'>
                                <h2><span className='colored-word'>Hairstyle</span> Reflects</h2>
                                <h2>The Personality</h2>
                                <h2>Inside You</h2>
                            </div>
                            <div className='hairstyle-text'>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a
                                page when looking at.
                            </div>
                            <button className='button'>Get Started</button>
                        </div>
                    </Col>
                    <Col lg={8} md={12}>
                        <img className='hairstyle-image' src={Hairstyles} alt="hairstyles-image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HairStyleSection;