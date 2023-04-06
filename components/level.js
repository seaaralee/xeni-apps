import react from "react";
import { View, Text, ScrollView, TouchableOpacity , StyleSheet} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function IconPage(props) {
  return (
    <TouchableOpacity onPress={props.navigate}>
      <View>
        <View style={styles.container}>
          <Entypo name="graduation-cap" size={24} color="white" />
        </View>
        <View style={{ alignItems: "center", marginTop: 12 }}>
          <Text style={styles.title}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A66DD3",
    width: 48,
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#BD76F5", fontSize: 14, fontWeight: "500" 
  }
})
