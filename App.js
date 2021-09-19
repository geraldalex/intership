import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Meme1 from "./src/screens/Meme1";
import Mood from "./src/screens/Mood";
import Onboarding2 from "./src/screens/Onboarding2";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import Intervention from "./src/screens/Intervention";
import EducationAndExercise from "./src/screens/EducationAndExercise";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Onboarding2"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Onboarding" component={Onboarding2} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Meme" component={Meme1} />
        <Drawer.Screen name="Intervention" component={Intervention} />
        <Drawer.Screen name="Mood" component={Mood} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen
          name="EducationAndExercise"
          component={EducationAndExercise}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
