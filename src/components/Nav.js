import React from 'react';

import Logo from './assets/logo.png';
import Button from '@material-ui/core/Button';
import './style.css';



function Nav() {

    return (
        <div className="nav">
            <div className="logo">
                <img src={Logo} alt="Fidelize" />
            </div>

            <div className='btn-contrate'>
                <Button onClick={() => window.open('https://pag.ae/7VSnZiaup', '_blank')} variant="contained">CONTRATE AGORA</Button>
            </div>
        </div>
    )
}

export default Nav;