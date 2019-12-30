import React from "react";
import { NavigationActions } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { orange, white } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import { Connect } from "react-redux";
import { addCard } from "../actions/index";

const AddCard = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AddCard;
