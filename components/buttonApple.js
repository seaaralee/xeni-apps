import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function ButtonAppleAuth({ navigation, props }) {
    return (
        <View style={{ marginTop: "5%" }}>
            <TouchableOpacity style={styles.btn} >
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", }}>
                    <Image source={require("../assets/apple.png")} />
                    <Text style={styles.txt}>
                        Sign in with Apple
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#FFFFFF",
        width: 327,
        height: 48,
        borderRadius: 8,
        borderColor: "#9D66C899",
        borderWidth: 1,
    },
    txt: {
        color: "#755F86",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 6,
    }
})