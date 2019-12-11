import React from "react";
import { Platform } from "react-native";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
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
