import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";

export default function CardQuiz(props) {
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 10 }}>
            <View style={styles.container}>
                <View style={styles.titlebox}>
                    <Image source={require("../assets/ideas.png")} />
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.text}> Quiz Serapan {props.number}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                        <Text> {props.rating} </Text>
                        <AntDesign name="star" size={16} color="#F0B622" />
                    </View>
                </View>
                <View style={styles.descbox}>
                    <View style={styles.minibox}>
                        <Fontisto name="question" size={14} color="#A66DD3" />
                        <Text style={styles.desctext}>
                            {props.soal}
                        </Text>
                    </View>
                    <View style={styles.minibox}>
                        <Entypo name="bar-graph" size={14} color="#A66DD3" />
                        <Text style={styles.desctext}>
                            {props.level}
                        </Text>
                    </View>
                </View>
                <View styles={styles.btnbox}>
                    <TouchableOpacity style={styles.btnquiz} onPress={props.navigate}>
                        <Text style={styles.txtquiz}> Try Quiz </Text>
                        <AntDesign name="rightcircleo" size={16} color="white" tyle={{ marginLeft: 8 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        height: 191,
        width: "100%",
        shadowColor: "#506F74",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
    },
    titlebox: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    descbox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 16
    },
    minibox: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 5,
        alignItems: "center"
    },
    btnbox: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 10,
    },
    btnquiz: {
        backgroundColor: "#9C66C7",
        width: "91%",
        height: 48,
        borderRadius: 8,
        borderColor: "#A66DD3",
        justifyContent: "center",
        marginTop: 12,
        marginHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    txtquiz: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "400",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: "#755F86",
        fontWeight: "400",
    },
    desctext: {
        fontSize: 14,
        color: "#755F86",
        fontWeight: "400"
    }
})