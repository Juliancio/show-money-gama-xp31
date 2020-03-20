import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Mulher from './assets/mulher-banner.png'; // Tell webpack this JS file uses this image


import './style.css';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: '#FFDD36',
            color: 'fff',
            width: 300,
            marginTop: 20
        },
    },
}));


function Banner() {
    const classes = useStyles();
    return (
        <div className="hero">
            <div className="description">
                <h1>Comece agora a <span className="text-transfor">transformação digital</span> da sua empresa</h1>
                <p>A Consultoria "Pensando Digital" acelera performance e resultados, trazendo clientes e consequentemente, sucesso dentro do mercado digital para pequenas e médias empresas de todos os segmentos. Confira!
            </p>
                <div className={classes.root}>
                    <Button variant="contained">CONTRATE AGORA</Button>
                </div>
            </div>
            <div className="mulher-sorrindo">
                <img src={Mulher} className="mulher-img" alt="Logo" />


            </div>
        </div>
    )
}

export default Banner;