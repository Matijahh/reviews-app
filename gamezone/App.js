import React, { useState } from "react";
import { Image, ImageBackground } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./routes/HomeStack";
import Drawer from "./routes/Drawer";

// Custom Components Imports
import AboutStack from "./routes/AboutStack";
import Header from "./shared/Header";

// Function for Getting Fonts
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerTitle: () => <Header title="GameZone" />,
            }}
          />
          <Drawer.Screen
            name="About"
            component={AboutStack}
            options={{ headerTitle: () => <Header title="About" /> }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
