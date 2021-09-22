import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import TabBar from "../tabBar/TabBar";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";

const educationBackGround = require("../../assets/EducationAndExerciseTab.png");
const educationImage1 = require("../../assets/Group175655.png");
const educationImage2 = require("../../assets/Group175656.png");
const educationImage3 = require("../../assets/Group175657.png");
const educationImage4 = require("../../assets/Group175658.png");
const educationImage5 = require("../../assets/Group175623.png");

const EducationAndExercise = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground
        source={educationBackGround}
        style={styles.backgroundImage}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hi John,</Text>
          <Text style={styles.underHeaderText}>
            Today is Monday, November 12
          </Text>
        </View>
        <ScrollView width="100%">
          <Image source={educationImage1} style={{ width: "100%" }} />
          <View style={styles.twoImgContainer}>
            <Image source={educationImage2} style={{ width: "50%" }} />
            <Image source={educationImage3} style={{ width: "50%" }} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textRow1}>Relaxation</Text>
            <Text style={styles.textRow2}>Therapy</Text>
            <Text style={styles.textRow3}>Lifestyle</Text>
          </View>

          <View style={styles.orangeLine} />
          <Image
            source={educationImage4}
            style={{ width: "100%", marginBottom: 80 }}
          />
          <TabBar />
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default EducationAndExercise;

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
  twoImgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  textRow1: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: colors.orange,
    paddingLeft: "5%",
    marginRight: 12,
  },
  textRow2: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: colors.gray,
    marginRight: 12,
  },
  textRow3: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: colors.gray,
  },
  orangeLine: {
    borderBottomColor: colors.orange,
    borderBottomWidth: 3,
    width: "4%",
    marginLeft: "5%",
  },
});
