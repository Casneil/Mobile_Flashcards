import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ActionButton = ({ onPress, styles, text, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.androidBtn, { backgroundColor: color }]}
    >
      <Text style={styles.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
