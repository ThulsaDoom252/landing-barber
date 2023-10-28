import React from 'react';
import logo from "../assets/Logo.png"
import facebookIcon from "../assets/Contacts/facebook.png"
import twitterIcon from "../assets/Contacts/twittor.png"
import googleIcon from "../assets/Contacts/google.png"
import {Container} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='footer-logo-block'>
                <img className='footer-logo' src={logo} alt='footer-logo'/>
                <span className='footer-logo-text'>arber</span>
            </Container>
            <p className='footer-text'>
                Stay in touch with us
            </p>
            <p className='footer-text'>
                Our team is always here to assist you. Whether you need a new hairstyle or have questions, feel free to
                contact us. We look forward to hearing from you
            </p>
            <Container className='footer-contacts'>
                <div className='contact-item'><img src={facebookIcon} alt="facebook-contact"/></div>
                <div className='contact-item'><img src={twitterIcon} alt="twitter-contact"/></div>
                <div className='contact-item'><img src={googleIcon} alt="google-contact"/></div>
            </Container>
            <Container>
                <hr className='footer-line my-4 bg-primary '/>
            </Container>
        </footer>
    );
};

export default Footer;