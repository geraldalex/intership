import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/colors/colors";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const loginBackground = require("../../assets/LogInscreen.png");
import { Octicons } from '@expo/vector-icons'; 

const Login = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={loginBackground} style={styles.backgroundImage}>
        <View
          style={{
            paddingLeft: "5%",
            paddingTop: "15%",
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 30,
              color: colors.orange,
            }}
          >
            Welcome Back,
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
              color: colors.gray,
            }}
          >
            Log in to continue
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: "10%",
              paddingTop: "10%",
            }}
          >
            <Text
              style={{
                marginRight: 20,
                fontFamily: "Poppins_500Medium",
                color: colors.orange,
              }}
            >
              LOG IN
            </Text>
            <Text
              style={{
                marginRight: 20,
                fontFamily: "Poppins_400Regular",
                color: "#C5C5C5",
              }}
            >
              SIGN UP
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: colors.orange,
              borderBottomWidth: 3,
              width: "14%",
              marginLeft: "10%",
            }}
          />
          <View
            style={{
              borderBottomColor: "#C5C5C5",
              borderBottomWidth: 1,
              width: "80%",
              alignSelf: "center",
            }}
          />

          <View style={styles.borderContainer}>
          <MaterialCommunityIcons name="email-outline" size={24} color={colors.orange} style={{paddingLeft:'5%'}} />
          </View>
          <View style={styles.borderContainer}>
          <Octicons name="lock" size={24} color={colors.orange} style={{paddingLeft:'5%'}} />
          </View>

      
        
        </View>
      </ImageBackground>
    );
  }
};

export default Login;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  borderContainer: {

    marginTop: '5%',
    left: "10%",
    flexDirection: "row",
    width: "80%",
    height: '15%',
    borderColor:'#C5C5C5',
    borderRadius: 14,
    justifyContent: 'flex-start',
    alignItems: "center",
    borderWidth: 1,
   
   
  }
});
