import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from "react-native";
import colors from "../../assets/colors/colors";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import ButtonOrange from "../buttons/ButtonOrange";
import TabBar from "../tabBar/TabBar";

const inverventionBackGround = require("../../assets/Intervention.png");
const photo = require("../../assets/Group175663.png");
const medal = require("../../assets/Group175664.png");

const Intervention = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground
        source={inverventionBackGround}
        style={styles.backgroundImage}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Therapy</Text>
          <Text style={styles.headerText}>Intervention</Text>
        </View>

        <Image source={photo} style={{ height: 300, resizeMode: "cover" }} />

        <Image
          source={medal}
          style={styles.achiveStylyImg}
        />
        <ButtonOrange text="Continue" width={134} />
        <TabBar navigation={navigation} />
      </ImageBackground>
    );
  }
};

export default Intervention;

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
  achiveStylyImg:{
    height: 85,
    width: 312,
    resizeMode: "cover",
    marginBottom: 10,
    marginTop: 10,
  }
});
