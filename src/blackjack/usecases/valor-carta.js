
/**
 * Nos da el valor en puntos de la carta.
 * @param {String} carta El valor de nuestra carta. Ejemplo: 2D, AH, 6C, etc.
 * @returns {Number} Retorno los puntos que valen la carta pedida.
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    let puntos = (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : parseInt(valor);
    return puntos;
}