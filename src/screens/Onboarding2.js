import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ActivityIndicator,
  Button,
  Dimensions,
} from "react-native";
import colors from "../../assets/colors/colors";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import ButtonOrange from "../buttons/ButtonOrange";

const imageBackground = require("../../assets/Onboarding2.png");
const saly = require("../../assets/Saly-7.png");
const group175623 = require("../../assets/Group175623.png");

const Onboarding2 = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={imageBackground} style={s.backgroundImage}>
        <Image source={saly}  />
        <Text style={s.headerText}>Leave the Stress</Text>
        <Text style={s.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est ut
          leo ut libero accumsan lacus, quisque.
        </Text>
        <Image source={group175623} style={{marginBottom:25, width:52, height:4}} />
        <ButtonOrange text='Next' />
      </ImageBackground>
    );
  }
};

// const deviceWidth = Math.round(Dimensions.get('window').width)
// const deviceHeight = Math.round(Dimensions.get('window').height)

const s = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    color: colors.orange,
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: colors.gray,
    textAlign: "center",
    marginTop: 10,
    marginBottom:25
  },

});

export default Onboarding2;