import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export default function InputSearch(
  props,
  { clicked, searchPhrase, setSearchPhrase, setCLicked, navigation }
) {
  return (
    <View style={styles.container}>
      <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked} >

        {/* search Icon */}
        <Feather
          name="search"
          size={18}
          color="#141E614D"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#755F868F"
          value={searchPhrase}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "105%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#FFFF",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.05,
    elevation: 0.5,
  },

  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.05,
    elevation: 0.5,
  },

  input: {
    fontSize: 14,
    marginLeft: 16,
    width: "90%",
  },
});
