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

const Mood = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={moodBackGround} style={styles.backgroundImage}>
        <View
          style={{ paddingLeft: 20, paddingTop: 45, alignSelf: "flex-start" }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 30,
              color: colors.orange,
            }}
          >
            Hi John,
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
              color: colors.gray,
            }}
          >
            Which of these images describe best right now?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Image source={moodImage1} style={{ height: 155 }} />
          <Image source={moodImage2} style={{ height: 155 }} />
        </View>

        <Image
          source={moodImage3}
          style={{ height: 232, width: 250, resizeMode: "contain" }}
        />
        <ButtonOrange text="Continue wish selected" width={210} />

        <TabBar />
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
});
