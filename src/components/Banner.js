import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';

import './video-react.css';

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
                <p>A <span className="brand">Pensando Digital</span> veio para ajudar você a conseguir mais clientes e mais
                sucesso dentro do mercado digital.
                Confira o que podemos te oferecer.
            </p>
                <div className={classes.root}>
                    <Button variant="contained">CONTRATE AGORA</Button>
                </div>
            </div>
            <div className="video">
            <Player>
      <source src="https://automaho.000webhostapp.com/cardb.mp4" />
    </Player>

            </div>
        </div>
    )
}

export default Banner;