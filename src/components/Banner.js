import React from 'react';
import Button from '@material-ui/core/Button';
import banner from './assets/mulher-banner.png'; // Tell webpack this JS file uses this image


import './style.css';

function Banner() {
    return (
        <div className="hero">
            <div className="description">
                <h1>Comece agora a <span className="text-transfor">transformação digital</span> da sua empresa!</h1>
                <p>A Consultoria "Pensando Digital" acelera performance e resultados, trazendo clientes e consequentemente, sucesso dentro do mercado digital para pequenas e médias empresas de todos os segmentos. Confira!
            </p>
                <div className="btn-banner">
                    <Button onClick={() => window.open('https://www.sympla.com.br/consultoria-pensando-digital__826707', '_blank')} variant="contained">CONTRATE AGORA</Button>
                </div>
            </div>
            <div className="banner">
                <img src={banner} className="banner-img" alt="Logo" />
            </div>
        </div>
    )
}

export default Banner;