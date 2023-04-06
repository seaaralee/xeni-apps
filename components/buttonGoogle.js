import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function ButtonGoogleAuth() {
  return (
    <View style={{ marginTop: 24 }}>
      <TouchableOpacity style={styles.btn}>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", }}>
          <Image source={require("../assets/google.png")} />
          <Text style={styles.txt}>
            Sign in with Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#FFFF",
    width: 327,
    height: 48,
    borderRadius: 8,
    borderColor: "#9D66C899",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    color: "#755F86",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 6,
  }
})