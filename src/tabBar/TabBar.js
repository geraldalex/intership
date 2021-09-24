import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TabBar = ({ navigation }) => {
const [colorCalendar, setColorCalendar] = useState(true)
const [colorGym, setColorGym] = useState(false)
const [colorSetting, setolorSetting] = useState(false)

const changeColor1 = () => {
  setColorCalendar(true)
      setColorGym(false)
      setolorSetting(false)
}

const changeColor2 = () => {
  setColorCalendar(false)
      setColorGym(true)
      setolorSetting(false)
}

const changeColor3 = () => {
  setColorCalendar(false)
      setColorGym(false)
      setolorSetting(true)
}



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>{ navigation.navigate('EducationAndExercise') 
      changeColor1()

      }}>
        <AntDesign name="calendar" size={35} color={colorCalendar ? colors.orange :"#C5C5C5" } />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Mood')
      changeColor2()
    }}>
        <Ionicons name="barbell" size={35} color={colorGym ? colors.orange :"#C5C5C5" } />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Settings')
      changeColor3()
    }}>
        <Feather name="settings" size={35} color={colorSetting ? colors.orange :"#C5C5C5" } />
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
