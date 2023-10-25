import React from 'react';
import logo from "../assets/Logo.png"
import facebookIcon from "../assets/Contacts/facebook.png"
import twitterIcon from "../assets/Contacts/twittor.png"
import googleIcon from "../assets/Contacts/google.png"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-logo-block'>
                <img className='footer-logo' src={logo} alt='footer-logo'/>
                <span className='footer-logo-text'>arber</span>
            </div>
            <div className='footer-text'>
                It is a long established fact that a reader will be distracted by the readable
            </div>
            <div className='footer-contacts'>
                <div className='contact-item'><img src={facebookIcon} alt="facebook-contact"/></div>
                <div className='contact-item'><img src={twitterIcon} alt="twitter-contact"/></div>
                <div className='contact-item'><img src={googleIcon} alt="google-contact"/></div>
            </div>
        </footer>
    );
};

export default Footer;