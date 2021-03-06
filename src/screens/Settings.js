import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import * as ImagePicker from "expo-image-picker";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import TabBar from "../tabBar/TabBar";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const settingsBackGround = require("../../assets/Settings.png");
const avatar = require("../../assets/Group175634.png");

const Settings = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground
        source={settingsBackGround}
        style={styles.backgroundImage}
      >
        <Text style={styles.headerText}>Setting</Text>
        <View style={styles.menuBlock}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Image
              source={selectedImage ? { uri: selectedImage.localUri } : avatar}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Text style={styles.nameText}>John Doe</Text>
          <TouchableOpacity
            style={styles.opacityItem}
            onPress={() => navigation.navigate("EducationAndExercise")}
          >
            <AntDesign name="home" size={24} color={colors.orange} />
            <Text style={styles.menuTextItem}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opacityItem}>
            <Feather name="settings" size={24} color={colors.orange} />
            <Text style={styles.menuTextItem}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opacityItem}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={colors.orange}
            />
            <Text style={styles.menuTextItem}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opacityItem}>
            <SimpleLineIcons name="info" size={24} color={colors.orange} />
            <Text style={styles.menuTextItem}>About us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opacityItem}
            onPress={() => navigation.navigate("Login")}
          >
            <AntDesign name="logout" size={24} color={colors.orange} />
            <Text style={styles.menuTextItem}>logout</Text>
          </TouchableOpacity>
        </View>

        <TabBar navigation={navigation} />
      </ImageBackground>
    );
  }
};

export default Settings;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    color: colors.orange,
    marginBottom: 10,
    paddingLeft: 20,
    paddingTop: 60,
    alignSelf: "flex-start",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  nameText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: colors.orange,
  },
  menuBlock: {
    alignSelf: "flex-start",
    paddingLeft: 32,
  },
  menuTextItem: {
    marginLeft: 10,
    fontFamily: "Poppins_400Regular",
    color: colors.orange,
  },
  opacityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
});
