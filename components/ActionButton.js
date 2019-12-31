import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ActionButton = ({ onPress, style, text, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.androidBtn, { backgroundColor: color }]}
    >
      <Text style={style.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
