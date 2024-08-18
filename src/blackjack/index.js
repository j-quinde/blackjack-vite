import _ from 'underscore';

//import crearNuevoDeck  from './usecases/crear-deck.js';

import { acumularPuntos, crearDeck, crearCarta, pedirCarta, turnoComputadora } from './usecases/index.js';
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

//funcion anonima autoinvocada

(() => {
    'use strict' //>> con esto le decimos a JS q sea estricto, recomendado usar en la funcion anonnima
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];
    let deck = []/*, puntosJugador = 0, puntosPC = 0*/;

    let puntosJugadores = [];

    //referencia del html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartas = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');    

    //INICIALIZA EL JUEGO
    const inizializarJuego = (numJugadores = 2) => {
        puntosJugadores = [];
        deck = crearDeck(tipos, especiales);
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        btnPedir.disabled = false;
        btnDetener.disabled = false;

        divCartas.forEach(div => { div.innerText = '' });
        puntosHTML.forEach(small => { small.innerText = 0 });
    }

    deck = crearDeck(tipos, especiales);

    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);

        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

        crearCarta(carta, 0, divCartas);

        if (puntosJugador > 21) {
            //console.warn('te pasaste de 21');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartas);
        } else if (puntosJugador === 21) {
            //console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartas);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(deck, puntosJugadores, puntosJugadores, puntosHTML, divCartas);
    });

    btnNuevo.addEventListener('click', () => {
        inizializarJuego();
    });

    return { nuevoJuevo: inizializarJuego() };
})();
