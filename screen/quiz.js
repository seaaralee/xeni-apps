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
} from "react-native";
import IconPage from "../components/level";


export default function QuizScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;
  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View
          style={{
            backgroundColor: "white",
            margin: 24,
          }}
        >
            <Text
              style={{
                textAlign: "center",
                color: "#755F86",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Xerapan Quiz
            </Text>
          <View style={{ alignItems: "center", marginTop: 49 }}>
            <Image source={require("../assets/quiz.png")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 9,
            }}
          >
            <IconPage
              navigate={() => navigation.navigate("QuizEasy")}
              title="Easy"
            />
            <IconPage
              navigate={() => navigation.navigate("QuizMedium")}
              title="Medium"
            />
            <IconPage
              navigate={() => navigation.navigate("QuizHard")}
              title="Hard"
            />
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={{ color: "#755F86", fontSize: 18, fontWeight: "500" }}>
              {" "}
              Quiz History{" "}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20%",
            }}
          >
            <Image source={require("../assets/nothing.png")} />
            <Text style={{ marginTop: 16, fontSize: 12, color: "#755F86CC" }}>
              Nothing to see your history now :({" "}
            </Text>
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
});
