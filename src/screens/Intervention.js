import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from "react-native";
import colors from "../../assets/colors/colors";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import ButtonOrange from "../buttons/ButtonOrange";
import TabBar from "../tabBar/TabBar";

const inverventionBackGround = require("../../assets/Intervention.png");
const photo = require("../../assets/Group175663.png");
const medal = require("../../assets/Group175664.png");

const Intervention = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground
        source={inverventionBackGround}
        style={styles.backgroundImage}
      >
        <View
          style={{ paddingLeft: 20, paddingTop: 45, alignSelf: "flex-start" }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 30,
              color: colors.orange,
            }}
          >
            Therapy
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 30,
              color: colors.orange,
            }}
          >
            Intervention
          </Text>
        </View>

        <Image
          source={photo}
          style={{ height: 300, resizeMode: 'cover' }}
        />
      
        <Image
          source={medal}
          style={{ height: 85,width:312,  resizeMode: 'cover', marginBottom:10, marginTop:10  }}
        />
        <ButtonOrange text='Continue' width={134} />
        <TabBar/>
      </ImageBackground>
    );
  }
};

export default Intervention;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },
});
