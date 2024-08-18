/**
 * 
 * @param {String} carta Crata obtenida del deck
 * @param {Number} turno Turno del jugador
 * @param {HTMLElement} divCartas Query selector de html de los divs de las cartas
 */

export const crearCarta = (carta, turno, divCartas) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartas[turno].append(imgCarta);
}