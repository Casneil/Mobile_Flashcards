import React from "react";
import { createStackNavigator } from "react-navigation-stack";
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
import DeckView from "./components/DeckView";

export default function App() {
  // return <AppNavigator />;
  return <MainNavigator />;
}

const MainNavigator = createStackNavigator({
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Deck`
    })
  },
  DeckView: {
    screen: DeckView
    // navigationOptions: {
    //   title: "Deck View",
    //   headerTintColor: white,
    //   headerStyle: {
    //     backgroundColor: purple
    //   }
    // }
  }
});

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
