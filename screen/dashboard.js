import React, {useState} from "react";
import {
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InputSearch from "../components/inputSearch";
import ListWord from "../components/word";

export default function DashboardScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : darkContainer;


    const [state, setState] = useState({
      search: '',
    });
  
    filterList = (list) => {
      return list.filter(
        (listItem) =>
          listItem.word
            .toLowerCase()
            .includes(state.search.toLowerCase())
      )
    }
  
    const list = [
      {word:'abatoar'},
      {word:'abdikasi'},
      {word:'abdomen'},
      {word:'aberasi'},
      {word:'abiosfer'},
      {word:'abiogenesis'},
      {word:'abiturien'},
      {word:'ablasi'},
      {word:'ablaut'},
      {word:'abnormal'},
      {word:'abnormalitas'},
      {word:'abolisi'},
      {word:'abonemen'},
      {word:'absen'},
      
    ];
  
  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View
          style={{
            backgroundColor: "white",
            margin: 20,
          }}
        >
          {/* headers */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* top */}
            <View style={{ flexDirection: "row" }}>
              {/* profile */}
              <Image
                style={{ justifyContent: "flex-start" }}
                source={require("../assets/profile.png")}
              />

              {/* name */}
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 14,
                  marginTop: 3,
                }}
              >
                <Text style={styles.txtName}>Hello Nasywa,</Text>
                <Text style={styles.txtDesc}>
                  Welcome, let's find your best words
                </Text>
              </View>
            </View>

            {/* notification */}
            <View style={{ marginTop: 12 }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#755F86"
                style={{ backgroundColor: "white", borderColor: "#755F86" }}
              />
            </View>
          </View>

          {/* search */}
          <View>
            <InputSearch onChangeText={(search) => setState({search})}/>
          </View>

          {/* scrolling */}
          <ScrollView
            style={{ marginTop: 25, height: "84%", width: "100%" }}
            contentContainerStyle={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
          >
            {filterList(list).map((listItem, index) => (
                  <ListWord key={index} word={listItem.word} />
            ))}                         
          </ScrollView>
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
    flex: 1,
  },

  lightContainer: {
    backgroundColor: "#FFFFFF",
  },

  darkContainer: {
    backgroundColor: "#FFFFFF",
  },

  txtName: {
    fontSize: 16,
    color: "#755F86",
    fontWeight: "500",
    marginTop: 2.5,
  },

  txtDesc: {
    fontSize: 12,
    color: "#755F86",
    fontWeight: "400",
    opacity: 0.6,
    marginTop: 2,
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingBottom: 30,
  },
});
