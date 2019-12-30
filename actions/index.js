export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const RECIEVE_DECK = "RECIEVE_DECKS";
export const ADD_DECK = "ADD_DECK;";

export function addDeck(decks) {
  return {
    type: ADD_DECK,
    decks
  };
}

export function recieveDecks(decks) {
  return {
    type: RECIEVE_DECK,
    decks
  };
}

export function addCard(decks) {
  return {
    type: ADD_CARD_TO_DECK,
    decks
  };
}
