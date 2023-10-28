import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import HistoryImg from "../../assets/History.png"

const HistorySection = ({isMd}) => {

    return (
        <section>
            <Container fluid className='history-section'>
                <Row>
                    <Col lg={7} md={12}>
                        <img className='history-image' src={HistoryImg} alt='history-image'/>
                    </Col>
                    <Col lg={4} md={12} className={isMd && 'order-first'}>
                        <div className='history-block'>
                            <h1 className='history-title'>Our <span className='colored-word'>History</span></h1>
                            <div className='history-text-1'>It is a long established fact that a reader will be
                                distracted by the readable content
                                of a page when looking at.
                            </div>
                            <div className='history-text-2'>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at.
                            </div>
                            <button className='history-button'>Learn more</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HistorySection;