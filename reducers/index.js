import { ADD_DECK, ADD_CARD_TO_DECK, RECIEVE_DECKS } from "../actions/index";

function deck(state = {}, action) {
  switch (action.type) {
    case RECIEVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const newDeck = {
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      };
      return {
        ...state,
        ...newDeck
      };
    case ADD_CARD_TO_DECK:
      const { question, answer, deck, correctAnswer } = action.card;
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [
            ...state[deck].questions,
            { question, answer, correctAnswer }
          ]
        }
      };
    default:
      return state;
  }
}

export default deck;
