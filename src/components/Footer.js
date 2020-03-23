import React from 'react';
import Insta from './assets/instagram.svg'; // Tell webpack this JS file uses this image
import Face from './assets/facebook.svg'; // Tell webpack this JS file uses this image
import Linked from './assets/linkedin.svg'; // Tell webpack this JS file uses this image



import './style.css';

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/company/consultoria-pensando-digital">            <img src={Linked} alt="Linkedin" /> </a>
            <a href="https://www.facebook.com/consultoriapensandodigital">              <img src={Face} alt="Facebook" /></a>
            <a href="https://www.instagram.com/pensando_digital/">                <img src={Insta} alt="Instagram" /></a>
        </div>
    )
}

export default Footer;