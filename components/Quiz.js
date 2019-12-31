import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { NavigationActions } from "react-navigation";
import { orange, white, offWhite, red, green, blue } from "../utils/colors";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import Info from "./Info";

class Quiz extends React.Component {
  state = {
    questionNumber: 0,
    showQuestion: false,
    correct: 0,
    incorrect: 0
  };

  showAnswer = () =>
    !this.state.showQuestion
      ? this.setState({ showQuestion: true })
      : this.setState({ showQuestion: false });

  submitAnswer = answer => {
    const { questionNumber } = this.state;
    const deck = this.props.navigation.state.params.entryId;
    const decks = this.props.decks;
    const correct = decks[deck].questions[
      questionNumber
    ].correctAnswer.toLowerCase();

    if (answer.trim() === correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.inCorrect + 1 });
    }

    this.setState({
      questionNumber: this.state.questionNumber + 1,
      showQuestion: false
    });
  };

  replayQuiz = () => {
    this.setState({
      questionNumber: 0,
      showQuestion: false,
      correct: 0,
      incorrect: 0
    });
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));
  };

  render() {
    const decks = this.props.decks;
    const questionNumber = this.state.questionNumber;
    const deck = this.props.navigation.state.params.entryId;
    const number = this.state.questionNumber + 1;

    if (questionNumber === decks[deck].questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.mainText}>
              You got {this.state.correct} out of {decks[deck].questions.length}
              {""} correct!
            </Text>
            {this.state.correct > this.state.incorrect ? (
              <Text style={{ fontSize: 88 }}>🎇🎆</Text>
            ) : (
              <Text style={{ fontSize: 88 }}>😱😰</Text>
            )}
            <View>
              <ActionButton
                onPress={this.replayQuiz}
                style={styles}
                text={"Start over"}
                color={red}
              />
              <ActionButton
                onPress={this.goBack}
                style={styles}
                text={"Go Back"}
                color={green}
              />
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>
            {number} / {decks[deck].questions.length}
          </Text>
          {!this.state.showQuestion ? (
            <Text style={styles.mainText}>
              {decks[deck].questions[questionNumber].question}
            </Text>
          ) : (
            <Text style={styles.mainText}>
              {decks[deck].questions[questionNumber].answer}
            </Text>
          )}
          {!this.state.showQuestion ? (
            <Info
              style={styles.answer}
              text={"Show Question"}
              onPress={this.showAnswer}
            ></Info>
          ) : (
            <Info
              style={styles.answer}
              text={"Show Answer"}
              onPress={this.showAnswer}
            ></Info>
          )}
          <View>
            <ActionButton
              onPress={() => this.submitAnswer("true")}
              color={green}
              style={styles}
              text={"Correct"}
            />
            <ActionButton
              onPress={() => this.submitAnswer("false")}
              color={green}
              style={styles}
              text={"Incorrect"}
            />
          </View>
        </View>
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
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 165
  },
  androidBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 160
  },
  submitBtnText: {
    color: white,
    fontSize: 26,
    textAlign: "center"
  },
  questions: {
    top: 0,
    alignSelf: "flex-start",
    left: 0,
    color: white,
    fontSize: 20,
    margin: 5,
    position: "absolute"
  },
  answer: {
    color: white,
    fontSize: 20,
    margin: 20
  },
  card: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    backgroundColor: offWhite,
    alignSelf: "stretch",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.34)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 40,
    color: white,
    marginTop: 40,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return { decks };
}
export default connect(mapStateToProps)(Quiz);
