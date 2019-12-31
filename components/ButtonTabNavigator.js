import React from "react";
import { Platform } from "react-native";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialIcon, FontAwesomeIcon } from "./Icons";
import AddDeck from "./AddDeck";
import Deck from "./DeckList";
import DeckView from "./DeckView";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const AddDecks = createStackNavigator(
  {
    Home: AddDeck
  }
  // config
);

AddDeck.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesomeIcon name="plus-square" color={tintColor} size={30} />
  )
};

const Decks = createStackNavigator(
  {
    Decks: Deck,
    DeckView: DeckView,
    AddCard: AddCard,
    Quiz: Quiz
  }
  // config
);

Deck.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcon name="cards-outlined" color={tintColor} size={30} />
  )
};

const BottomTabNavigator = createBottomTabNavigator({
  Decks,
  AddDecks
  // DeckView
});

export default BottomTabNavigator;

// Old
/* const BottomTabNavigator = createBottomTabNavigator({
  AddDeck: AddDeck,
  DeckList: Deck
});

export default BottomTabNavigator;
*/
