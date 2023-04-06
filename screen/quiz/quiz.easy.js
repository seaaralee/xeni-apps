import React from "react";
import {
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import CardQuiz from "../../components/cardQuiz";
import Popup from "../../components/quizPopup";

export default function QuizEasyScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;

  let popupref = React.createRef()

  const showPopup = () => {
    popupref.show()
  }

  const closePopup = () => {
    popupref.close()
  }

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>

        <View style={{ backgroundColor: "white", margin: 20, justifyContent: "space-between", alignItems: 'center', flexDirection: "row" }}>
          <Ionicons name="arrow-back" size={22} color="#755F86" onPress={() => navigation.navigate("Home")} />
          <Text style={styles.txtTitle}> Easy </Text>
          <TouchableWithoutFeedback onPress={showPopup}>
            <Entypo name="help-with-circle" size={22} color="#755F86" />
          </TouchableWithoutFeedback>
          <Popup ref={(target) => popupref = target} onTouchOutside={closePopup} />
        </View>
        <View style={{ margin: 20 }}>
          <CardQuiz
            navigate={() => navigation.navigate("QuizEasyDetail")}
            number="1" rating="5.0" soal=" 05/05" level=" Easy" />
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
    fontWeight: '500',
    color: "#755F86",
    textAlign: 'center',
  }
});
