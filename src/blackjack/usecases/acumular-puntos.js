import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {String} carta Carta obtenida del deck
 * @param {Number} turno Turno de pc o jugador
 * @param {Array<number>} puntosJugadores Array con los puntos de los jugadores en juego
 * @param {HTMLElement} puntosHTML  Query selector de html de los puntos de los jugadores
 * @returns {Array<number>} Retorna el array de los puntos de los jugadores
 */


export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}