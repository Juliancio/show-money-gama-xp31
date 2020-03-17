import React from 'react';
import Fidelize from './assets/fidelize.png'; // Tell webpack this JS file uses this image
import Aumente from './assets/aumente.png'; // Tell webpack this JS file uses this image
import Adquira from './assets/adquira.png'; // Tell webpack this JS file uses this image


function Card() {   
    return (

        <div>
            <h1>Vantagens Pensando Digital</h1>
            <h2>Aprenda mais sobre o mercado digital rapidamente!</h2>

            <img src={Fidelize} alt="Fidelize" />
            <img src={Aumente} alt="Aumente" />
            <img src={Adquira} alt="Logo" />


        </div>

     

    )
}

export default Card;