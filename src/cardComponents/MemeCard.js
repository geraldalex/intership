import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, TextInput } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const imageMeme = require("../../assets/imageMeme.png");

const MemeCard = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 15 }}>
            Anxiety: “What if this happens?”
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 15 }}>
            Me: “But it won’t.”
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 15 }}>
            Me: “But what if it does?”
          </Text>

          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 15 }}>
            Me:
          </Text>
       
       
        </View>

        <Image style={styles.imageStyle} source={imageMeme} />
      </View>
    );
  }
};

export default MemeCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 315,
    height: 285,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  imageStyle: {
    width: 287,
    height: 159,
    alignSelf: "center",
  },
  textContainer: {
    paddingLeft: 14,
    paddingVertical: 6,
  },
});
