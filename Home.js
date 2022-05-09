import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Home({ setPage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>hello</Text>
      <Image source={require("./assets/hearticon.png")} style={styles.image} />
      <Text style={styles.midText}>
        let's get better{"\n"}together
      </Text>
      <TouchableOpacity style={styles.login} onPress={() => setPage("login")}>
        <Text style={styles.buttontext}>login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signup} onPress={() => setPage("signup")}>
        <Text style={styles.buttontext}>sign up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    height: 17,
    top: 127,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 17,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 9,
  },
  image: {
    position: "absolute",
    width: 315,
    height: 315,
    top: 184,
  },
  midText: {
    position: "absolute",
    height: 70,
    top: 532,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 35,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 9,
  },
  login: {
    position: "absolute",
    width: 341,
    height: 64,
    top: 633,
    backgroundColor: "rgba(73, 101, 156, 1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    position: "absolute",
    height: 35,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 9,
    color: "white",
  },
  signup: {
    position: "absolute",
    width: 341,
    height: 64,
    top: 736,
    backgroundColor: "rgba(128, 151, 211, 1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
