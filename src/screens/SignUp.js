import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  TextInput,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import LogSignLogo from "../logSignLogo/LogSignLogo";
const loginBackground = require("../../assets/LogInscreen.png");
const logWith = require("../../assets/Group687.png");

const SignUp = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground source={loginBackground} style={styles.backgroundImage}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Create Your Account</Text>
          <Text style={styles.underHeaderText}>Sign up and get started</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.logSignUpTextContainer}>
            <Text style={styles.logText}>LOG IN</Text>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </View>

          <View style={styles.orangeLine} />
          <View style={styles.grayLine} />

          <View style={styles.borderContainer}>
            <Ionicons
              name="md-person-outline"
              size={26}
              color={colors.orange}
              style={{ paddingLeft: "5%" }}
            />

            <TextInput
              width="80%"
              placeholder="Full name"
              style={{ marginLeft: "5%" }}
            />
          </View>
          <View style={styles.borderContainer}>
            <MaterialCommunityIcons
              name="email-outline"
              size={26}
              color={colors.orange}
              style={{ paddingLeft: "5%" }}
            />
            <TextInput
              width="80%"
              placeholder="Email Address"
              style={{ marginLeft: "5%" }}
            />
          </View>
          <View style={styles.borderContainer}>
            <SimpleLineIcons
              name="phone"
              size={26}
              color={colors.orange}
              style={{ paddingLeft: "5%" }}
            />
            <TextInput
              width="80%"
              placeholder="Phone number"
              secureTextEntry={true}
              marginLeft="5%"
            />
          </View>
          <Text style={styles.verifyText}>
            We will send an OTP to verify it is you
          </Text>

          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpWithText}>Sign up with</Text>

        <LogSignLogo />
      </ImageBackground>
    );
  }
};

export default SignUp;

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
    marginTop: "5%",
    left: "10%",
    flexDirection: "row",
    width: "80%",
    height: "10%",
    borderColor: "#C5C5C5",
    borderRadius: 14,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
  },
  button: {
    borderRadius: 14,
    backgroundColor: colors.orange,
    paddingVertical: 12,
    width: "80%",
    marginTop: "5%",
    left: "10%",
  },

  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  headerTextContainer: {
    paddingLeft: "5%",
    paddingTop: "15%",
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
  logSignUpTextContainer: {
    flexDirection: "row",
    paddingLeft: "10%",
    paddingTop: "10%",
  },
  logText: {
    marginRight: 20,
    fontFamily: "Poppins_400Regular",
    color: "#C5C5C5",
  },
  signUpText: {
    fontFamily: "Poppins_500Medium",
    color: colors.orange,
  },
  orangeLine: {
    borderBottomColor: colors.orange,
    borderBottomWidth: 3,
    width: "17%",
    marginLeft: "29%",
  },
  grayLine: {
    borderBottomColor: "#C5C5C5",
    borderBottomWidth: 1,
    width: "80%",
    alignSelf: "center",
  },
  verifyText: {
    textAlign: "center",
    marginTop: "10%",
    color: "#C5C5C5",
  },
  signUpWithText: {
    marginTop: "5%",
    color: colors.gray,
    fontFamily: "Poppins_400Regular",
  },
});
