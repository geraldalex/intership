import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

const ButtonOrange = ({ text, onPress,width }) => {
 
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{...styles.button, width:width}}>
          <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default ButtonOrange;

const styles = StyleSheet.create({
  

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
