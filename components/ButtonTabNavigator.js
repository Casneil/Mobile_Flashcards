import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";

const BottomTabNavigator = createBottomTabNavigator({
  One: ScreenOne,
  Two: ScreenTwo
});

export default BottomTabNavigator;
