import React from "react";
import { View, Image, useColorScheme, StyleSheet, Text } from "react-native";
import InputText from '../components/inputText';
import ButtonAuth from "../components/buttonAuth";
import ButtonAppleAuth from "../components/buttonApple";
import ButtonGoogleAuth from "../components/buttonGoogle";


export default function LoginScreen ({navigation}) {

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;

    return (
        <View style={[styles.container, themeContainerStyle]}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', margin: 32}}>

            {/* xeni */}
            <Image style={{marginTop: 47}} source={require("../assets/xeni.png")} />

            {/* images */}
            <Image style={{marginTop: 67}} source={require("../assets/login-regist.png")} />

            {/* forms */}
            <View style={{marginTop: 36.2}}>
                <InputText  secure={false} name="person" plch=" Email"/>
                <InputText style={{marginTop: 12}} secure={true} icn="unlock" plch="Password"/>
            </View>

            {/* sign in */}
            <ButtonAuth nav={() => navigation.navigate('Home')} txt="Sign In"/>

            {/* atau */}
            <View style={{marginTop: 24, opacity: 0.4}}>
                <Text> Atau </Text>
            </View>

            {/* auth button */}
            <ButtonGoogleAuth />
            <ButtonAppleAuth />


        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    lightContainer: {
      backgroundColor: "#FFFFFF",
    },
  
    darkContainer: {
      backgroundColor: "#FFFFFF",
    },
  });