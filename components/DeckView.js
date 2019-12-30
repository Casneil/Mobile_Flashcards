import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getData } from "../utils/api";

const DeckView = ({ navigation }) => {
  const deck = navigation.state.params.entryId;
  console.log(deck);
  const decks = getData();

  return (
    <View style={styles.container}>
      <Text>{decks[deck].title}</Text>
      <Text>{decks[deck].questions.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DeckView;
