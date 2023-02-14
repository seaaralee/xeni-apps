import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ListWord(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.TxtWord}>{props.word}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: "#755F86",
    opacity: 0.7,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
  },
  TxtWord: {
    margin: 14,
    color: "#755F86BD",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#755F86",
    width: "100%",
  },
});
