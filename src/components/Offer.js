import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function Offer() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2020-03-27") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor(((difference / 1000 / 60) * 60) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="main-offer">
            <div className="price">
                <h3>Tudo isso por apenas:</h3>
                <div className="value">
                    R$ 39,90
                </div>
                <p>Fique atento! Esse valor é por <span>tempo limitado!</span></p>
                <div className="offer-time">
                    {/* {timerComponents.length ? timerComponents : <span>Produto lançado!</span>} */}
                    <div className="time">
                        <span>{timeLeft.days}</span>
                        dias
                    </div>
                    <div className="time">
                        <span>{timeLeft.hours}</span>
                        horas
                    </div>
                    <div className="time">
                        <span>{timeLeft.minutes}</span>
                        minutos
                    </div>
                    <div className="time">
                        <span>{timeLeft.seconds}</span>
                        segundos
                    </div>
                </div>

                <div className='btn-contrate'>
                    <Button onClick={() => window.open('https://pag.ae/7VSnZiaup', '_blank')}
                        variant="contained">
                        CONTRATE AGORA
                    </Button>
                </div>
            </div>
            <div className="quiz">
                <p>Ahh, mas eu sei tudo sobre mercado digital Não preciso disso!</p>
                <p>Será que sabe mesmo? Faça o nosso quiz e teste seus conhecimentos!</p>
                <form>
                    <TextField style={{ margin: 15, width: '100%' }} id="name"
                        label="Name" variant="outlined" />
                    <TextField style={{ width: '100%' }} id="email"
                        label="E-mail" variant="outlined" />
                </form>
                <div className='btn-quiz'>
                    <Button onClick={() => window.open('https://docs.google.com/forms/d/1K7QqKlBp-mNwKU00_wnoTnEq_3KhV9bFjAtjKplHb-w/edit')}
                        style={{ marginTop: 15, height: 50, width: '100%', color: 'white', backgroundColor: '#101D62', textTransform: 'initial' }} variant="contained">
                        Quero fazer o quiz!
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Offer;