import React from 'react';
import {Container} from 'react-bootstrap';
import bottomLeftVector from "../assets/vectors/bottom-v-left.png"
import bottomRightVector from "../assets/vectors/bottom-v-right.png"

const Wrapper = ({children}) => {
    return (
        <Container fluid className='wrapper '>
            {children}
            <img className='bottom-vector-left' src={bottomLeftVector} alt='vector'/>
            <img className='bottom-vector-right' src={bottomRightVector} alt='vector'/>
        </Container>
    );
};

export default Wrapper;