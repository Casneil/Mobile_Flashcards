import React, { useEffect } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

//Pull in AppNavigator from the navigation folder
import AppNavigator from "./components/AppNavigator";
import { purple, white } from "./utils/colors";
import DeckView from "./components/DeckView";
import { setLocalNotification } from "./utils/helpers";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const App = () => {
  const store = createStore(reducer);
  useEffect(() => {
    setLocalNotification();
  }, []);

  // return <AppNavigator />;
  // return <MainNavigator />;
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar
          hidden={false}
          backgroundColor="#50FF04"
          translucent={true}
          barStyle="dark-content"
        />
        <AppNavigator />
      </View>
    </Provider>
  );
};

// const MainNavigator = createStackNavigator({
//   AppNavigator: {
//     screen: AppNavigator,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name}'s Deck`
//     })
//   },
//   DeckView: {
//     screen: DeckView
//     // navigationOptions: {
//     //   title: "Deck View",
//     //   headerTintColor: white,
//     //   headerStyle: {
//     //     backgroundColor: purple
//     //   }
//     // }
//   }
// });

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

export default App;
