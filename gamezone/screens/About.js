import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

// Global Styles Import
import { globalStyles } from "../styles/Global";

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={globalStyles.container}
    >
      <Text>About Screen</Text>
    </ImageBackground>
  );
}
