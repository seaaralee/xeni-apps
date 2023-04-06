import React, { useEffect, useState } from "react";
import {
    View,
    useColorScheme,
    StyleSheet,
    SafeAreaView,
    Text,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import axios from 'axios';

export default function QuizEasyDetailScreen({ navigation }) {
    const colorScheme = useColorScheme();

    const themeContainerStyle =
        colorScheme === "light" ? styles.lightContainer : darkContainer;


    return (
        <View style={[styles.container, themeContainerStyle]}>
            <SafeAreaView style={styles.AndroidSafeArea}>
                {/* top */}
                <View style={{ margin: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row", }}>
                    <Ionicons name="arrow-back" size={22} color="#FFFFFF" onPress={() => navigation.navigate("QuizEasy")} />
                    <Text style={styles.title}> Easy Quiz </Text>
                    <Entypo name="help-with-circle" size={22} color="#FFFFFF" />
                </View>

                {/* quiz */}
                <View style={styles.quizcontainer}>

                    {/* soal */}

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/quizdetail.png")} style={{ marginTop: "20%" }} />
                            <View style={{ marginTop: "15%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.txtquiz}>{quiz[quest].quiz}</Text>
                            </View>
                    </View>

                    {/* answer */}
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: "25%", }}>
                            {/* row 1 */}
                            <TouchableOpacity style={styles.btnanswer}>
                                <Text style={styles.answer}>Absorben</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnanswer}>
                                <Text style={styles.answer}>Absorben</Text>
                            </TouchableOpacity>
                            {/* row 1 */}
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: "3%", }}>
                            {/* row 1 */}
                            <TouchableOpacity style={styles.btnwrong}>
                                <Text style={styles.wrong}>Absorben</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btntrue}>
                                <Text style={styles.true}>Absorben</Text>
                            </TouchableOpacity>
                            {/* row 1 */}
                        </View>
                    </View>

                    {/* btn */}
                    <View style={{ marginTop: "5%", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={styles.btn} onPress={handlePress}>
                            <Text style={styles.txt}> Next </Text>
                        </TouchableOpacity>
                    </View>


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
        backgroundColor: "#A66DD3",
        flex: 1,
    },
    lightContainer: {
        backgroundColor: "#A66DD3",
    },

    darkContainer: {
        backgroundColor: "#A66DD3",
    },
    title: {
        fontSize: 18,
        fontWeight: "400",
        color: "#FFFFFF",
        textAlign: "center",
    },
    quizcontainer: {
        backgroundColor: "white",
        height: "90%",
        marginHorizontal: 13,
        marginVertical: 13,
        borderRadius: 30,
    },
    txtnumber: {
        fontSize: 14,
        color: "#755F86CC",
        fontWeight: "400",
    },
    txtquiz: {
        fontSize: 20,
        color: "#755F86E5",
        fontWeight: "500",
        textAlign: "center",
        alignSelf: "center",
        marginTop: "2%",
        maxHeight: 50
    },
    answer: {
        fontSize: 14,
        color: "#755F86",
        fontWeight: "400",
    },
    btnanswer: {
        backgroundColor: "#F7EDFF",
        width: "46%",
        height: 57,
        borderRadius: 8,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    wrong: {
        fontSize: 14,
        color: "white",
        fontWeight: "400"
    },
    btnwrong: {
        backgroundColor: "#F04D4D",
        width: "46%",
        height: 57,
        borderRadius: 8,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    true: {
        fontSize: 14,
        color: "white",
        fontWeight: "400"
    },
    btntrue: {
        backgroundColor: "#67D94B",
        width: "46%",
        height: 57,
        borderRadius: 8,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    btn: {
        backgroundColor: "#A66DD3",
        width: "95%",
        height: 48,
        borderRadius: 8,
        borderColor: "#A66DD3",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    txt: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "400",
        textAlign: "center",
    },
})