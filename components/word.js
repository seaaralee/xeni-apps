import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Popup from "./popup";

export default function ListWord(props) {
  let popupref = React.createRef()

  const showPopup = () => {
    popupref.show()
  }

  const closePopup = () => {
    popupref.close()
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={showPopup}>
        <Text style={styles.txtword}>{props.word}</Text>
      </TouchableWithoutFeedback>
      <Popup ref={(target) => popupref = target} onTouchOutside={closePopup} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: "#755F86",
    opacity: 0.75,
    borderWidth: 1,
    marginTop: 4,
  },
  txtword: {
    margin: 14,
    color: "#755F86BD",
  },
});
