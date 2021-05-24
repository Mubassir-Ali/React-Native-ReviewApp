import React, { useState } from "react";
import Home from "./screen/Home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ReviewDetail from "./screen/ReviewDetail";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const homeStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/font/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/font/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <homeStack.Navigator>
          <homeStack.Screen name="home" component={Home} options={{title:"My Home"}} />
          <homeStack.Screen name="details" component={ReviewDetail} options={({ route }) => ({ title: route.params.name })} />
        </homeStack.Navigator>
      </NavigationContainer>
    );
  }
}
