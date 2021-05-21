import React, { useState } from "react";
import Home from "./screen/Home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/font/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/font/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Home />;
  }
}
