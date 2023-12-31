import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import hm1 from "./hm1.png"
import hm2 from "./hm2.png"
import hm3 from "./hm3.png"
import hm4 from "./hm4.png"
import hm5 from "./hm5.png"
import hm6 from "./hm6.png"
import middleRightTopVector from "../../../assets/vectors/middle-v-right-top.png"
import middleRightBottomVector from "../../../assets/vectors/middle-v-right-bottom.png"
import middleLeftTopVector from "../../../assets/vectors/middle-v-left-top.png"
import middleLeftBottomVector from "../../../assets/vectors/middle-v-left-bottom.png"

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
                <img className='middle-right-top-vector' src={middleRightTopVector} alt='vector'/>
                <img className='middle-right-bottom-vector' src={middleRightBottomVector} alt='vector'/>
                <img className='middle-left-top-vector' src={middleLeftTopVector} alt='vector'/>
                <img className='middle-left-bottom-vector' src={middleLeftBottomVector} alt='vector'/>
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