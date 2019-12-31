import React, { useState } from "react";
import { NavigationActions } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import ScreenName from "./ScreenName";
import { connect } from "react-redux";

import { orange, white } from "../utils/colors";
import { addCardToDeck } from "../utils/api";

import { addCard } from "../actions";

class AddCard extends React.Component {
  state = {
    question: "",
    answer: "",
    correctAnswer: ""
  };

  submitCard = deck => {
    const { question, answer, correctAnswer } = this.state;
    this.props.dispatch(addCard({ question, answer, correctAnswer, deck }));
    addCardToDeck(deck, { question, answer, correctAnswer });
    this.setState({ question: "", answer: "", correctAnswer: "" });
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));
  };

  render() {
    // console.log(this.props);
    const deckName = this.props.navigation.state.params.entryId;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <ScreenName name="Add A Card" /> */}
        <View style={styles.container}>
          <Text style={styles.title}>Enter Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={question => this.setState({ question: question })}
            // onChangeText={question => this.setState({ question: question })}
            value={this.state.question}
          ></TextInput>

          <Text style={styles.title}>Enter Answer</Text>
          <TextInput
            style={styles.input}
            onChangeText={answer => this.setState({ answer: answer })}
            // onChangeText={answer => this.setState({ answer: answer })}
            value={this.state.answer}
          ></TextInput>

          <Text style={styles.title}>True or False?</Text>
          <TextInput
            style={styles.input}
            onChangeText={correctAnswer =>
              this.setState({ correctAnswer: correctAnswer })
            }
            // onChangeText={correctAnswer =>
            //   this.setState({ correctAnswer: correctAnswer })
            // }
            value={this.state.correctAnswer}
          ></TextInput>

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => this.submitCard(deckName)}
          >
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    color: "#333"
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: "hidden"
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 20,
    borderRadius: 7
  }
});

export default connect()(AddCard);

/*
const AddCard = ({ navigation, dispatch }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const deckName = navigation.state.params.entryId;

  const submitCard = deck => {
    dispatch(addCard({ question, answer, correctAnswer, deck }));
    addCardToDeck(deck, { question, answer, correctAnswer });
    setQuestion("");
    setAnswer("");
    setCorrectAnswer("");
    navigation.dispatch(NavigationActions.back({ key: null }));
  };

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <ScreenName name="Add A Card" />
      <View style={styles.container}>
        <Text style={styles.title}>Enter Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={question => setQuestion(question)}
          value={question}
        ></TextInput>

        <Text style={styles.title}>Enter Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={answer => setAnswer(answer)}
          value={answer}
        ></TextInput>

        <Text style={styles.title}>True or False?</Text>
        <TextInput
          style={styles.input}
          onChangeText={correctAnswer => setCorrectAnswer(correctAnswer)}
          value={correctAnswer}
        ></TextInput>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => submitCard(deckName)}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    color: "#333"
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: "hidden"
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 20,
    borderRadius: 7
  }
});
*/
