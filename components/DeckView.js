import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { getData } from "../utils/api";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { purple, white, red, offWhite, orange } from "../utils/colors";

const DeckView = ({ navigation, decks }) => {
  const deck = navigation.state.params.entryId;
  console.log(deck);
  // const decks = getData();

  return (
    <View style={styles.container}>
      {Platform.OS === "android" ? (
        <View style={styles.cardAndroid}>
          <Text style={styles.mainText}>{decks[deck].title}</Text>
          <Text style={styles.subText}>{decks[deck].questions.length}</Text>
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
      ) : (
        <View style={styles.cardIos}>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    padding: 10
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
  },
  cardAndroid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: offWhite,
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  cardIos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: orange,
    alignSelf: "stretch",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  mainText: {
    fontSize: 40,
    color: white
  },
  subText: {
    fontSize: 30,
    color: white,
    marginBottom: 160
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(DeckView);
