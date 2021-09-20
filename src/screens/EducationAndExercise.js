import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator,
    Image,
    ImageBackground, } from 'react-native'
   import {
        useFonts,
        Poppins_400Regular,
        Poppins_500Medium,
      } from "@expo-google-fonts/poppins";
      import ButtonOrange from "../buttons/ButtonOrange";
      import TabBar from "../tabBar/TabBar";
      import { ScrollView } from "react-native-gesture-handler";
      import colors from "../../assets/colors/colors";

      const educationBackGround = require("../../assets/EducationAndExerciseTab.png");
const educationImage1 = require("../../assets/Group175655.png");
const educationImage2 = require("../../assets/Group175656.png");
const educationImage3 = require("../../assets/Group175657.png");
const educationImage4 = require("../../assets/Group175658.png");
const educationImage5 = require("../../assets/Group175623.png");

const EducationAndExercise = () => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
      });
    
      if (!fontsLoaded) {
        return <ActivityIndicator />;
      } else {
    return (
        <ImageBackground
        source={educationBackGround}
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
            Hi John,
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
              color: colors.gray,
            }}
          >
            rate the following visual
          </Text>
        </View>
        <ScrollView >
        <Image
          source={educationImage1}
          style={{ height:207, width:335}}
        />
        <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
        <Image
          source={educationImage2}
          style={{ height:195, width:160}}
        />
        <Image
          source={educationImage3}
          style={{ height:195, width:160}}
        />
        </View>

        <View style={{flexDirection:'row', }}>
       <Text style={{fontFamily: "Poppins_500Medium",
              fontSize: 16,
              color: colors.orange,
              paddingLeft:12,
              marginRight:12
              }}>
          Relaxation
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular",
              fontSize: 16,
              color: colors.gray,
              marginRight:12
              }}>
          Therapy
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular",
              fontSize: 16,
              color: colors.gray,}}>
          Lifestyle
          </Text>
        
        </View>
        <Image
          source={educationImage5}
          style={{  width:16,height:4,marginLeft:12}}
        />
        <Image
          source={educationImage4}
          style={{ height:353, width:335, resizeMode:'stretch', marginBottom:80}}
        />
        <TabBar/>
        </ScrollView>
        </ImageBackground>
       
    )
      }
}

export default EducationAndExercise

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        alignItems: "center",
       
      },
})
