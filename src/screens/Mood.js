import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import colors from "../../assets/colors/colors";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import ButtonOrange from "../buttons/ButtonOrange";
import TabBar from "../tabBar/TabBar";

const moodBackGround = require("../../assets/Mood.png");
const moodImage1 = require("../../assets/Group175660.png");
const moodImage2 = require("../../assets/Group175661.png");
const moodImage3 = require("../../assets/Group175662.png");

const Mood = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={moodBackGround} style={styles.backgroundImage}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hi John,</Text>
          <Text style={styles.underHeaderText}>
            Which of these images describe best right now?
          </Text>
        </View>
        <View style={styles.imgRowContainer}>
          <Image source={moodImage1} style={{ height: 155 }} />
          <Image source={moodImage2} style={{ height: 155 }} />
        </View>

        <Image source={moodImage3} style={styles.imgMain} />
        <ButtonOrange text="Continue wish selected" width={210} onPress={() => navigation.navigate('Meme') }/>

        <TabBar navigation={navigation} />
      </ImageBackground>
    );
  }
};

export default Mood;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },
  headerTextContainer: {
    paddingLeft: 20,
    paddingTop: 45,
    alignSelf: "flex-start",
  },
  headerText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    color: colors.orange,
  },
  underHeaderText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: colors.gray,
  },
  imgRowContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  imgMain: {
    height: 232,
    width: 250,
    resizeMode: "contain",
  },
});
