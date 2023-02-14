import React from "react";
import {
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
} from "react-native";

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
          }}
        >
          <Text> Saved Page</Text>
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
