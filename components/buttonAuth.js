import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonAuth(props) {
    return (
        <View style={{ marginTop: 24, alignItems: "center", width: 327 }}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>
                    {props.txt}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#9D66C8",
        width: 327,
        height: 48,
        borderRadius: 8,
        justifyContent: "center",
    },
    txt: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
    }
})
