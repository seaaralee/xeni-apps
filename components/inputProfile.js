import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Octicons, Fontisto } from "@expo/vector-icons";

export default function InputProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        {/* Icon */}
        <Octicons name={props.name} size={18} color="#141E614D" />
        <Fontisto name={props.namei} size={18} color="#141E614D" />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder={props.plch}
          placeholderTextColor="#141E614D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50
  },
  label: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "#B8B8D2",
    borderRadius: 8,
    alignItems: "center",
  },
  input: {
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 10,
    width: "100%",
  },
});
