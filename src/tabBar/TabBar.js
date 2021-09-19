import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TabBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="calendar" size={35} color={colors.orange} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="barbell" size={35} color="#C5C5C5" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="settings" size={35} color="#C5C5C5" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: "4%",
    flexDirection: "row",
    width: "92%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 14,
    justifyContent: "space-around",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
