import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Card from "../shared/Card";

// Global Styles Import
import { globalStyles, images } from "../styles/Global";

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={globalStyles.container}
    >
      <Card>
        <Text style={globalStyles.paragraph}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.paragraph}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
