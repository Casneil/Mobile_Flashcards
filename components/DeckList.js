import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getData } from "../utils/api";
import ScreenName from "../components/ScreenName.js";

const Deck = props => {
  const decks = getData();
  return (
    <View style={styles.container}>
      {Object.keys(decks).map(deck => {
        const { title, questions } = decks[deck];
        return (
          <View key={deck}>
            <ScreenName name={"Screen Two"} />
            <Text>{title}</Text>
            <Text>{questions.length}</Text>
            <Button
              onPress={() =>
                props.navigation.navigate("DeckView", { entryId: deck })
              }
              title="view deck"
            ></Button>
          </View>
        );
      })}
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

export default Deck;

/*
 Old Method
 /////////////
 
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getData } from "../utils/api";

const Deck = () => {
  const decks = getData();
  return (
    <View>
      {Object.keys(decks).map(deck => {
        const { title, questions } = decks[deck];
        return (
          <View key={deck}>
            <Text>{title}</Text>
            <Text>{questions.length}</Text>
          </View>
        );
      })}
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

export default Deck;


*/
