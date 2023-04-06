import React from "react";
import { View, Image, useColorScheme, StyleSheet, Text } from "react-native";
import InputText from "../components/inputText";
import ButtonAuth from "../components/buttonAuth";
import { AuthContext } from "./auth/context.auth";
import { useContext } from "react";
import Spinner from "react-native-loading-spinner-overlay/lib";

export default function LoginScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, password)
      .then((userInfo) => {
        console.log(userInfo);
        navigation.reset({
          index: 0,
          routes: [{ name: "Dashboard" }],
        });
      })
      .catch((error) => {
        console.log(error);
        // menampilkan pesan kesalahan
      });
  };

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Spinner visible={isLoading} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          margin: 32,
        }}
      >
        {/* xeni */}
        <Image
          style={{ marginTop: 47 }}
          source={require("../assets/xeni.png")}
        />

        {/* images */}
        <Image
          style={{ marginTop: 67 }}
          source={require("../assets/login-regist.png")}
        />

        {/* forms */}
        <View style={{ marginTop: 36.2 }}>
          <Text>{val}</Text>
          <InputText secure={false} name="person" plch=" Email" value={email} onChange={text => setEmail(text)} />
          <InputText
            style={{ marginTop: 12 }}
            secure={true}
            icn="unlock"
            plch="Password"
            value={password}
            onChange={text => setPassword(text)}
          />
        </View>

        {/* sign in */}
        <ButtonAuth onPress={handleLogin} txt="Sign In" />

        <View style={styles.text}>
          <Text style={{ color: "#755F86", fontWeight: "400" }}> Don't have an Account? </Text>
          <Text style={{ color: "#9D66C8", fontWeight: "500" }} onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Register" }],
                    });
                  }}> SignUp </Text>
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
  text: {
    color: "#9D66C8",
    marginTop: "5%",
    flexDirection: "row"
  }
});
