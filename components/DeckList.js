import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getData } from "../utils/api";
import { getDecks } from "../utils/api";
import { recieveDecks } from "../actions";
import ScreenName from "../components/ScreenName.js";
import { connect } from "react-redux";
//import DeckView from "./DeckView";

const Deck = ({ decks, recieveAllDecks, navigation }) => {
  // const { decks } = props;
  //const decks = getData();
  // console.log(props);

  useEffect(() => {
    getDecks().then(decks => recieveAllDecks(decks));
  }, []);

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
              onPress={() => navigation.navigate("DeckView", { entryId: deck })}
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

function mapStateToProps(decks) {
  return {
    decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    recieveAllDecks: decks => dispatch(recieveDecks(decks))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck);

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
