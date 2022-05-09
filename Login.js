import { StatusBar } from "expo-status-bar";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  HeartIcon,
  UserIcon,
  LockClosedIcon,
} from "react-native-heroicons/solid";

export default function Login({ setPage, setUser, setPW, user, pw }) {
  const login = () => {
    //eventually do authentication
    // console.log(user);
    // console.log(pw);
    setPage("signedin");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>welcome back</Text>
      <HeartIcon style={styles.icon} size={50} />
      <View style={styles.username}>
        <UserIcon
          size={45}
          style={{ marginRight: 10, color: "rgba(73, 101, 156, 1)" }}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(text) => setUser(text)}
          placeholder="u s e r n a m e"
          value={user}
        />
      </View>
      <View style={styles.password}>
        <LockClosedIcon
          size={45}
          style={{ marginRight: 10, color: "rgba(73, 101, 156, 1)" }}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(text) => setPW(text)}
          placeholder="p a s s w o r d"
          value={pw}
        />
        <Text style={styles.forgot}>forgot password?</Text>
      </View>
      <TouchableOpacity style={styles.login} onPress={login}>
        <Text style={styles.buttontext}>login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signup} onPress={() => setPage("signup")}>
        <Text style={styles.buttontext}>sign up</Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          top: 735,
        }}
      >
        <View style={styles.line1} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line2} />
      </View>
      <StatusBar style="auto" />
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
  icon: {
    position: "absolute",
    width: 50,
    height: 50,
    top: 175,
    color: "rgba(244, 188, 42, 1)",
  },
  username: {
    position: "absolute",
    width: 341,
    height: 50,
    top: 350,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
  },
  password: {
    position: "absolute",
    width: 341,
    height: 50,
    top: 450,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 17,
    top: 10,
  },
  forgot: {
    letterSpacing: 9,
    position: "absolute",
    height: 17,
    top: 60,
    left: 95,
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
    bottom: 89,
    backgroundColor: "rgba(128, 151, 211, 1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  line1: {
    position: "absolute",
    width: 110,
    left: 50,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  line2: {
    position: "absolute",
    width: 110,
    right: 50,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  or: {
    position: "absolute",
    letterSpacing: 9,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 17,
  },
});
