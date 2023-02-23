import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

export default function OnBoardingScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "#FFFFFF",
          margin: 32,
        }}
      >
        <Image source={require("../assets/onboarding.png")} />
        <Text style={styles.txtWel}>
          Welcome! And Find More Words In
          <Text style={{ color: "#9D66C8" }}> Xerapan</Text>
        </Text>
        <Text style={styles.txtDesc}>
          find more words and improve your public speaking skills at xerapan
          indonesia
        </Text>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.txtLogin}> Login to Your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRegist}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.txtRegist}> Create new Account</Text>
            <AntDesign
              name="rightcircleo"
              size={16}
              color="white"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
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

  txtWel: {
    fontSize: 24,
    color: "#755F86",
    fontWeight: "700",
    opacity: 0.6,
    textAlign: "center",
  },

  txtDesc: {
    fontSize: 16,
    color: "#755F86",
    fontWeight: "400",
    opacity: 0.6,
    textAlign: "center",
    marginTop: 12,
  },

  txtLogin: {
    fontSize: 14,
    color: "#9D66C8",
    fontWeight: "400",
    textAlign: "center",
  },

  btnLogin: {
    backgroundColor: "#FFFFFF",
    width: 327,
    height: 48,
    borderRadius: 8,
    borderColor: "#A66DD3",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 36,
    textAlign: "center",
  },

  txtRegist: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
  },

  btnRegist: {
    backgroundColor: "#A66DD3",
    width: 327,
    height: 48,
    borderRadius: 8,
    borderColor: "#A66DD3",
    justifyContent: "center",
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
