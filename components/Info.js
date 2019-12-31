import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Info = ({ style, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Info;
