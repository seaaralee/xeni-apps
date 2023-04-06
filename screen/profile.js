import React, { useState } from "react";
import {
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import InputProfile from "../components/inputProfile";
import { Entypo, Octicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";


export default function ProfileScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  }


  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View
          style={{
            backgroundColor: "white",
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.txtTitle}> Edit Profile </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: image }}
            style={{ marginTop: "15%", width: 130, height: 130, borderRadius: 100 }}
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: -201,
            }}
          >
            <Image
              source={require("../assets/profileround.png")}
              style={{ marginTop: "15%" }}
            />
            <TouchableOpacity style={styles.btnimage} onPress={pickImage}>
              <Entypo name="camera" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Text style={styles.txtdesc}>
            share a lil bit about yourself
          </Text>
        </View>

        <View style={{ marginHorizontal: 21 }}>
          <View style={{ marginTop: "10%" }}>
            <InputProfile secure={false} name="person-fill" plch=" UsernameA" />
            <InputProfile
              secure={false}
              name="mail"
              plch=" example@gmail.com"
            />
            <InputProfile secure={false} namei="phone" plch=" Number Phone" />
          </View>
          <View style={{ marginTop: "10%" }}>
            <TouchableOpacity style={styles.btnupdate}>
              <Text style={styles.txtupdate}> Update </Text>
              <Octicons
                name="sync"
                size={16}
                color="white"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 22,
  },
  container: {
    flex: 1,
  },

  lightContainer: {
    backgroundColor: "#FFFFFF",
  },

  darkContainer: {
    backgroundColor: "#FFFFFF",
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#755F86",
  },
  txtdesc: {
    marginTop: 16, fontSize: 16, color: "#755F86CC"
  },
  btnimage: {
    backgroundColor: "#A66DD3",
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: "center",
    marginTop: -30,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 3,
  },
  txtupdate: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
  },

  btnupdate: {
    backgroundColor: "#A66DD3",
    width: "100%",
    height: 48,
    borderRadius: 8,
    borderColor: "#A66DD3",
    justifyContent: "center",
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
