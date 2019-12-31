import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SubmitButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
