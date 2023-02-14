import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";

export default function InputText(props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputText}>
        {/* Icon */}
        <Octicons
          name={props.name}
          size={18}
          color="#141E614D"
        />
        <Feather
          name={props.icn}
          size={18}
          color="#141E614D"
        />
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
  },
  inputText: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#FFFF",
    borderBottomColor: "#B8B8D2",
    borderBottomWidth: 0.5,
    alignItems: "center",
  },
  input: {
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 10,
    width: "90%",
  },
});
