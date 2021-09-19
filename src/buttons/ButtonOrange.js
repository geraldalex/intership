import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

const ButtonOrange = ({ text, onPress}) => {
 
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default ButtonOrange;

const styles = StyleSheet.create({
  container: {},

  button: {
    borderRadius: 8,
    backgroundColor: colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 134,
  },

  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
