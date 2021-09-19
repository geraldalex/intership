import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import colors from "./assets/colors/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Meme1 from "./src/screens/Meme1";
import Meme2 from "./src/screens/Meme2";
import Mood from "./src/screens/Mood";
import Onboarding2 from "./src/screens/Onboarding2";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import Intervention from "./src/screens/Intervention";
import EducationAndExercise from "./src/screens/EducationAndExercise";

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Onboarding2"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <View style={styles.container}>
      <Text style={{ fontFamily: 'Poppins_400Regular', color: colors.orange}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Meme1" component={Meme1} />
          <Drawer.Screen name="Meme2" component={Meme2} />
          <Drawer.Screen name="Mood" component={Mood} />
          <Drawer.Screen name="Onboarding2" component={Onboarding2} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="Intervention" component={Intervention} />
          <Drawer.Screen
            name="EducationAndExercise"
            component={EducationAndExercise}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
