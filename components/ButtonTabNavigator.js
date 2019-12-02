import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AddDeck from "./AddDeck";
import Deck from "./DeckList";

const BottomTabNavigator = createBottomTabNavigator({
  One: AddDeck,
  Two: Deck
});

export default BottomTabNavigator;
