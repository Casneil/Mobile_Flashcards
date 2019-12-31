import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export const MaterialIcon = props => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size}
      color={props.color}
    />
  );
};

export const FontAwesomeIcon = props => {
  return (
    <FontAwesome name={props.name} size={props.size} color={props.color} />
  );
};
