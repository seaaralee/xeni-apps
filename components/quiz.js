import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Quiz(props) {
    return (
        <View style={styles.container}>
            <View style={styles.titlequiz}>
                <Image source={require("../assets/ideas.png")}/>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        borderRadius: 8,
    },
    titlequiz: {
        margin: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    }
  });