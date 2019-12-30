import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getData } from "../utils/api";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { purple, white, red } from "../utils/colors";

const DeckView = ({ navigation, decks }) => {
  const deck = navigation.state.params.entryId;
  console.log(deck);
  // const decks = getData();

  return (
    <View style={styles.container}>
      <Text>{decks[deck].title}</Text>
      <Text>{decks[deck].questions.length}</Text>
      <ActionButton
        styles={styles}
        text={"Add a Card"}
        onPress={() => navigation.navigate("AddCard", { entryId: deck })}
        color={purple}
      />

      <ActionButton
        styles={styles}
        text={"Start Quiz"}
        onPress={() => navigation.navigate("Quiz", { entryId: deck })}
        color={red}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  androidBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 170
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(DeckView);
