import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const LogSignLogo = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.touchOpacityStyle, marginLeft: "5%" }}
      >
        <EvilIcons name="sc-facebook" size={40} color="#4267B2" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOpacityStyle}>
        <FontAwesome5 name="apple" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default LogSignLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "3%",
  },
  touchOpacityStyle: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(255, 137, 72, 0.1)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
