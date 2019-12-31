import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  ScrollView
} from "react-native";
import { getData } from "../utils/api";
import { getCardsLength } from "../utils/helpers";
import { offWhite, white } from "../utils/colors";
import { getDecks } from "../utils/api";
import { recieveDecks } from "../actions";
import ScreenName from "../components/ScreenName.js";
import { connect } from "react-redux";

const Deck = ({ decks, recieveAllDecks, navigation }) => {
  useEffect(() => {
    getDecks().then(decks => recieveAllDecks(decks));
  }, []);

  return (
    <View style={styles.container}>
      {Object.keys(decks).map(deck => {
        const { title, questions } = decks[deck];
        return Platform.OS === "android" ? (
          <View key={deck} style={styles.cardAndroid}>
            {/* <ScreenName name={"Screen Two"} /> */}
            <Text style={styles.cardText}>{title}</Text>
            <Text style={styles.cardText}>
              {questions ? getCardsLength(questions) : null}
            </Text>
            <Button
              style={styles.cardBtn}
              onPress={() => navigation.navigate("DeckView", { entryId: deck })}
              title="view deck"
            ></Button>
          </View>
        ) : (
          <View key={deck} style={styles.cardIos}>
            {/* <ScreenName name={"Screen Two"} /> */}
            <Text style={styles.cardText}>{title}</Text>
            <Text style={styles.cardText}>
              {questions ? getCardsLength(questions) : null}
            </Text>
            <Button
              style={styles.cardBtn}
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
    // justifyContent: "center",
    alignSelf: "stretch",
    padding: 5
  },
  cardAndroid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: offWhite,
    height: 200,
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginBottom: 2,
    marginTop: 2
  },
  cardIos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: offWhite,
    height: 200,
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  cardText: {
    fontSize: 30,
    color: white
  },
  cardBtn: {
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
