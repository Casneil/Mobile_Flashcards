import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import SubmitButton from "./SubmitButton";
import { orange } from "../utils/colors";

// pull in the ScreenName component from ScreenName.js
import ScreenName from "../components/ScreenName.js";
import { connect } from "react-redux";

class ScreenOne extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};
  state = {
    text: ""
  };

  submitName = () => {
    const { text } = this.state;

    if (this.state.text) {
      saveDeckTitle(text);
      this.props.dispatch(addDeck(text));
      this.props.navigation.navigate("DeckView", { entryId: text });
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={"Add Deck" /* pass the name prop to ScreenName */} />
        <Text style={styles.title}>What's the name of the new deck?</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={text => this.setState({ text: text })}
        ></TextInput>
        <SubmitButton style={styles.submitBtn} onPress={this.submitName} />
        {/* <Button
          style={styles.submitBtn}
          title="submit"
          onPress={this.submitName}
        ></Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50,
    borderRadius: 8
  },
  title: {
    fontSize: 30,
    color: "#333",
    textAlign: "center"
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: "hidden"
  }
});

export default connect()(ScreenOne);
/*
/////// Old Method
import React, { useState, Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";

class AddDeck extends Component {
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AddDeck;

 */
