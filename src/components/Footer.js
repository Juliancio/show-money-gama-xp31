import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';





import './style.css';

function Footer() {
    return (
        <div className="footer">
            <InstagramIcon style={{ marginRight: 15 }} />
            <FacebookIcon />
        </div>
    )
}

export default Footer;