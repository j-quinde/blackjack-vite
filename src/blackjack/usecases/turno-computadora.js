
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";


/**
 * 
 * @param {Array<String>} deck Nuestro deck (un arreglo de string).
 * @param {Number} puntosMinimo Puntos del jugador (humano)
 * @param {Array<Number>} puntosJugadores Array con los puntos de los jugadores en juego
 * @param {HTMLElement} puntosHTML Query selector de html de los puntos de los jugadores
 * @param {HTMLElement} divCartas Query selector de html de los divs de las cartas
 */


const determinarGanador = (puntosJugadores) => {
    const [puntosMinimo, puntosPC] = puntosJugadores;
    setTimeout(() => {
        if (puntosPC === puntosMinimo) {
            alert('Nadie gana.');
        } else if (puntosMinimo > 21) {
            alert('Gana PC 1');
        } else if (puntosPC > 21) {
            alert('Gana Jugador')
        } else {
            alert('Gana PC 2');
        }
    }, 100);
}

export const turnoComputadora = (deck = [], puntosMinimo, puntosJugadores, puntosHTML, divCartas) => {
    let puntosPC = 0;

    do {
        const carta = pedirCarta(deck);

        puntosPC = acumularPuntos(carta, puntosJugadores.length - 1,puntosJugadores, puntosHTML );

        crearCarta(carta, puntosJugadores.length - 1, divCartas);

        if (puntosMinimo > 21) {
            break;
        }

    } while ((puntosPC < puntosMinimo) && (puntosMinimo <= 21));

    determinarGanador(puntosJugadores);

}