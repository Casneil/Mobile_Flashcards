import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SubmitButton = ({ onPress, style, name }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
