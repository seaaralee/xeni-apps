import react from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function questQuiz(props) {
  return (
      <View style={{ marginTop: "15%"}}>
        <Text style={styles.number}>
              Question {props.questnum}
            </Text>
            <Text style={styles.quiz}> {props.question} </Text>
      </View>
  );
}


const styles = StyleSheet.create({
    number: {
        fontSize: 14,
        color: "#755F86CC"
    },
    quiz: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "400",
        textAlign: "center",
      },
})
