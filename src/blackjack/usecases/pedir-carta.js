/**
 * Esta funcion permite tomar una carta al azar de nuestro deck.
 * @param {Array<string>} deck Nuestro deck (un arreglo de string).
 * @returns {String} Retorna una carta al azar del deck.
 */

export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }
    const index = Math.floor(Math.random() * deck.length);
    const carta = deck[index];
    deck.splice(index, 1);
    return carta;
}