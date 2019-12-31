import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { NavigationActions } from "react-native";
import { orange, white, offWhite, red, green, blue } from "../utils/colors";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";

class Quiz extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello From Quiz View</Text>
      </View>
    );
  }
}

export default Quiz;
