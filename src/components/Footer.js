import React from 'react';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Facebook } from './assets/facebook.svg';

import './style.css';


function Footer() {
    return (

        <div className="footer">
<small> Todos os direitos reservados - Coroners 2020 </small>

<a href="#"> <Facebook /> </a>
<a href="#"> <Instagram /> </a>

        </div>

     

    )
}

export default Footer;