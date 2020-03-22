import React from 'react';

function Benefits() {
    return (
        <div className="main">
            <h3>Contrate a Pensando Digital e adquira:</h3>
            <div className="benefits">
                <div className="benefit">
                    <div className="item">
                    </div>
                    <div className="description-item">
                        <p>Material de apoio para a sua transformação digital</p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="item">
                    </div>
                    <div className="description-item">
                        <p>Um relatório completo sobre seu posicionamento digital</p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="item">
                    </div>
                    <div className="description-item">
                        <p>Diversas dicas para ajudar na sua jornada no mercado digital</p>
                    </div>
                </div>
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div >
    )
}

export default Benefits;