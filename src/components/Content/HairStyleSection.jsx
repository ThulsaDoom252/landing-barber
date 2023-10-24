import React from 'react';
import Hairstyles from "../../assets/Hairstyles.png"
import {Col, Container, Row} from 'react-bootstrap';

const HairStyleSection = () => {
    return (
        <section>
            <Container fluid className='hairstyle-section'>
                <Row>
                    <Col lg={4} md={12}>
                        <div className='hairstyle-block'>
                            <h2 className='hairstyle-title'><span className='colored-word'>Hairstyle</span> Reflects The
                                Personality
                                Inside You</h2>
                            <div className='hairstyle-text'>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a
                                page when looking at.
                            </div>
                            <button className='hairstyle-button'>Get Started</button>
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