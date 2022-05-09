import { StatusBar } from "expo-status-bar";
import database from "@react-native-firebase/database";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function CA2({ setPage, userProfile }) {
  const postProfileData = () => {
    // console.log(userProfile);
    // if (userProfile) {
    //   database()
    //     .ref("/profile")
    //     .push({profile: userProfile})
    //     .then(() => setPage("signedin"))
    //     .catch((err) => console.log("err creating acct", err));
    // }
    setPage("signedin");
  };

  setTimeout(function () {
    postProfileData();
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.container}
        onPress={() => setPage("signedin")}
      >
        <Image source={require("./assets/loading.gif")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    width: 315,
    height: 315,
  },
});
