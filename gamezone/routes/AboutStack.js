import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="AboutStack"
        component={About}
        options={{ title: "About GameZone" }}
      />
    </Stack.Navigator>
  );
}
