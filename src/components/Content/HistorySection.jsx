import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import HistoryImg from "../../assets/History.png"
import historyLeftVector from "../../assets/vectors/history-v-left.png"
import historyRightVector from "../../assets/vectors/history-v-right.png"

const HistorySection = ({isMd}) => {

    return (
        <section>
            <Container fluid className='history-section'>
                <img className='history-left-vector' src={historyLeftVector} alt="vector"/>
                <img className='history-right-vector' src={historyRightVector} alt="vector"/>
                <Row>
                    <Col lg={7} md={12}>
                        <img className='history-image' src={HistoryImg} alt='history-image'/>
                    </Col>
                    <Col lg={4} md={12} className={isMd && 'order-first'}>
                        <div className='history-block'>
                            <h1 className='history-title'>Our <span className='colored-word'>History</span></h1>
                            <div className='history-text-1'>Step into Our Hair Journey. A Tale of Beauty and Expertise.

                                Our hair salon is more than just a place for a haircut – it's a story of passion and
                                skill.
                            </div>
                            <div className='history-text-2'>
                                With a legacy of crafting stunning looks for our clients, we've honed our art
                                over the years. Click below to delve into the rich history of our salon and uncover the
                                secrets behind our artistry. Discover the magic of our journey. Find out more
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