import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign, Fontisto, Entypo, Feather } from "@expo/vector-icons";

export default function CardSaved(props) {
    return (
        <View style={{ backgroundColor: "white", width: "100%", borderTopRightRadius: 8, borderTopLeftRadius: 8, paddingHorizontal: 10}}>
            <View style={styles.container}>
                <View style={styles.popword}>
                    <Text style={styles.txtword}>Absensi</Text>
                    <Feather name="bookmark" size={16} color="white" />
                </View>
                <View style={styles.boxword}>
                    <Text style={styles.text}> Ketidakhadiran (tanpa pemberitahuan)</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 206,
        backgroundColor: "#FFFFFF",
        shadowColor: "#00000014",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
        alignContent: "center"

    },
    menu: {
        width: 64,
        height: 3,
        borderRadius: 12,
        backgroundColor: "#525252",
        alignSelf: "center",
        marginTop: "2%"
    },
    popword: {
        marginHorizontal: 24,
        marginTop: 35,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#9D66C8",
        height: 49,
        shadowColor: "#506F74",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    boxword: {
        height: 89,
        marginHorizontal: 24,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: "#FFFFFF",
        shadowColor: "#506F74",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
        alignItems: "center",
        justifyContent: "center"
    },
    txtword: {
        fontWeight: "700",
        fontSize: 16,
        color: "white"
    },
    text: {
        color: "#626262A3",
        fontWeight: "400",
        fontSize: 12,
        padding: 20,
        alignSelf: "center"
    }
})