import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  ActivityIndicator,
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


const Onboarding2 = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={imageBackground} style={styles.backgroundImage}>
        <Image source={saly} />
        <Text style={styles.headerText}>Leave the Stress</Text>
        <Text style={styles.text}>
          tyles Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          est ut leo ut libero accumsan lacus, quisque.
        </Text>

        <View style={{ flexDirection: "row", marginBottom: "8%" }}>
          <View
            style={styles.orangeLine}
          />
          <View
            style={styles.opacityOrangeLine}
          />
        </View>
        <ButtonOrange text="Next" width={134} onPress={() => navigation.navigate('Login')}/>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 25,
  },
  orangeLine: {
    borderBottomColor: colors.orange,
              borderBottomWidth: 4,
              width: "10%",
              borderRadius: 2,
              marginRight: "1%",
  },
  opacityOrangeLine: {
    borderBottomColor: "rgba(255, 137, 72, 0.2)",
    borderBottomWidth: 4,
    width: "4%",
    borderRadius: 2,
  }
});

export default Onboarding2;
