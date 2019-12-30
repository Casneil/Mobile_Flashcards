// Storage
import { AsyncStorage } from "react-native";

// Key
const FLASHCARDS_STORAGE_KEY = "flashcards: decks";

const initialData = {
  Development: {
    title: "Development",
    questions: [
      {
        question: "Whats the difference between React and React Native",
        answer: "React doesnt uses View and Text Components",
        correctAnswer: "false"
      },

      {
        question: "What makes React Native good for native development",
        answer: "Because it uses native code",
        correctAnswer: "false"
      }
    ]
  },

  History: {
    title: "History",
    questions: [
      {
        question: "When was the second world war",
        answer: "1939",
        correctAnswer: "true"
      },
      {
        question: "Who was the first person to translate the Bible",
        answer: "William Tyndale",
        correctAnswer: "true"
      }
    ]
  }
};

export const getData = () => {
  return initialData;
};

export const getDecks = deck => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    if (results === null) {
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    } else {
      return JSON.parse(results);
    }
  });
};

export const saveDeckTitle = title => {
  return AsyncStorage.getItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
};
