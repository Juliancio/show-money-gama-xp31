import React from 'react';
import Fidelize from './assets/fidelize.png'; // Tell webpack this JS file uses this image
import Aumente from './assets/aumente.png'; // Tell webpack this JS file uses this image
import Adquira from './assets/adquira.png'; // Tell webpack this JS file uses this image

import './style.css';


function Card() {   
    return (

        <div>
            <h1 className="h1">Vantagens Pensando Digital</h1>
            <h2 className="h2">Aprenda mais sobre o mercado digital rapidamente!</h2>    

<div className="row">
    <div className="container">
            <div className="col-md-4">            
              <img src={Fidelize} className="card-img" alt="Fidelize" />
              <p className="card-p"> Fidelize seus cliente </p>
            </div>

            <div className="col-md-4">      
                <img src={Aumente} className="card-img" alt="Aumente" />
                <p className="card-p"> Aumente sua renda </p>
            </div>

             <div className="col-md-4">      
                 <img src={Adquira} className="card-img" alt="Logo" />
                <p className="card-p">Adquira conhecimento </p>
            </div>
        </div>
</div>

        </div>

    )
}

export default Card;