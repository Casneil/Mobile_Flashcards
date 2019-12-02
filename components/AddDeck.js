import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

// pull in the ScreenName component from ScreenName.js
import ScreenName from "../components/ScreenName.js";

export default class ScreenOne extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};
  state = {
    text: ""
  };

  submitName = () => {
    const { text } = this.state;

    saveDeckTitle(text);
    this.props.dispatch(addDeck(text));
    this.props.navigation.navigate("DeckView", { ob });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName
          name={"Screen One" /* pass the name prop to ScreenName */}
        />
        <Text>What's the name of the new deck?</Text>
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState(text)}
        ></TextInput>
        <Button title="submit" onPress={this.submitName}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// Old Method
// import React, { useState, Component } from "react";
// import { StyleSheet, View, Text, Button, TextInput } from "react-native";
// import { saveDeckTitle } from "../utils/api";
// import { addDeck } from "../actions";

// class AddDeck extends Component {
//   state = {
//     text: ""
//   };

//   submitName = () => {
//     const { text } = this.state;

//     saveDeckTitle(text);
//     this.props.dispatch(addDeck(text));
//     this.props.navigation.navigate("DeckView", { ob });
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>What's the name of the new deck?</Text>
//         <TextInput
//           value={this.state.text}
//           onChangeText={text => this.setState(text)}
//         ></TextInput>
//         <Button title="submit" onPress={this.submitName}></Button>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });

// export default AddDeck;
