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
import MemeCard from "../cardComponents/MemeCard";
import ButtonOrange from "../buttons/ButtonOrange";
import ButtonGray from "../buttons/ButtonGray";
import TabBar from "../tabBar/TabBar";

const memeBackGround = require("../../assets/MemeBackGround.png");
const group175618 = require("../../assets/Group175618.png");

const Meme1 = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={memeBackGround} style={styles.backgroundImage}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hi John,</Text>
          <Text style={styles.underHeaderText}>rate the following visual</Text>
        </View>
        <Image source={group175618} style={{ width: "95%" }} />
        <Text style={styles.levelText}>Moderate</Text>
        <MemeCard />
        <View style={styles.buttonContainer}>
          <ButtonGray text="Skip" />
          <ButtonOrange text="Next Meme" width={140} />
        </View>
        <TabBar navigation={navigation}/>
      </ImageBackground>
    );
  }
};

export default Meme1;

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
  levelText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: colors.orange,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "70%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
