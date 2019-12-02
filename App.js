import React from "react";
//Pull in AppNavigator from the navigation folder
import AppNavigator from "./components/AppNavigator";
// import { StyleSheet, Text, View } from "react-native";
// // import DeckList from "./components/DeckList";
// // import AddDeck from "./components/AddDeck";
// // import { TabNavigator } from "react-native-navigation";
// // import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { purple, white } from "./utils/colors";

export default function App() {
  return <AppNavigator />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "pink",
//     marginBottom: 5
//   }
// });
