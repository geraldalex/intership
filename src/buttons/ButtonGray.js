import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

const ButtonGray = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGray;

const styles = StyleSheet.create({
  container: {},

  button: {
    borderRadius: 8,
    backgroundColor: colors.gary,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 100,
    borderWidth: 0.4,
    borderColor: colors.orange,
  },

  text: {
    color: colors.orange,
    fontSize: 16,
    textAlign: "center",
  },
});
