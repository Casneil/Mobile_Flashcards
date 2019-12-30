import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeckView = props => {
  return (
    <View style={styles.container}>
      <Text>Hello from Deck View</Text>
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
