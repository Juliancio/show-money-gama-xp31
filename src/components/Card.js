import React from 'react';

import './style.css';


function Card() {
    return (
        <div className="container">
            <div className="message">
                <h3>Como ajudaremos o seu negócio?</h3>
                <p>Faremos uma <span>ANÁLISE PERSONALIZADA</span> do seu negócio e te auxiliaremos com:</p>
            </div>
            <div className="cards">
                <div className="card1 card">
                    <h3>Marketing digital</h3>
                    <p>
                        Entenda quais são as melhores estratégias para o seu
                        negócio para atrair clientes em canais digitais.
                    </p>
                </div>
                <div className="card2 card">
                    <h3>Vendas automatizadas</h3>
                    <p>
                        Sabia que 80% das vendas são fechadas após o quarto
                        contato? Crie estratégias automatizadas e fique em contato com seus potenciais clientes!
                    </p>
                </div>
                <div className="card3 card">
                    <h3>O melhor site para o seu negócio</h3>
                    <p>
                        O site é a sua vitrine virtual para o mundo! Crie
                        experiências positivas, cause uma boa primeira impressão e aumente a conversão da sua página!
                    </p>
                </div>
                <div className="card4 card">
                    <h3>Marketing de relacionamento</h3>
                    <p>
                        Atualmente, os consumidores buscam mais do que um
                        produto ou serviço, eles desejam um relacionamento com a sua marca!
                    </p>
                </div>
            </div>
        </div >

    )
}

export default Card;