import React from "react";
import {
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  Image,
  ScrollView
} from "react-native";
import CardSaved from "../components/cardSaved";

export default function SavedScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;
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
          <Text style={styles.txtTitle}> Saved </Text>
        </View>
        <ScrollView style={{ height: "93%", width: "100%" }}
          showsVerticalScrollIndicator={false}>
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: "40%"}}>
            {/* klo gaada saved */}
            <Image source={require("../assets/nothing.png")} />
            <Text style={{ marginTop: 16, fontSize: 12, color: "#755F86CC" }}>
              Nothing to see your saved words now :(
            </Text>
            <Text style={{ marginTop: 4, fontSize: 12, color: "#755F86CC" }}>
              Lets add some words!
            </Text>
            {/* <CardSaved />
            <CardSaved />
            <CardSaved />
            <CardSaved />
            <CardSaved /> */}
          </View>
        </ScrollView>
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
});
