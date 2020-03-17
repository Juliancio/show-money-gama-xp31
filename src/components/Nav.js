import React from 'react';
import Logo from './assets/logo.png'; // Tell webpack this JS file uses this image


import './style.css';


function Nav() {   
    return (

<div>

        <div className="logo">
            <img src={Logo}  alt="Fidelize" />
        </div>

        <div> 

        </div>

        </div>

     

    )
}

export default Nav;