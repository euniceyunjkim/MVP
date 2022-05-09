import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import database from "@react-native-firebase/database";
import React, { useState } from "react";
import moment from "moment";
import Home from "./Home.js";
import Signup from "./Signup.js";
import Login from "./Login.js";
import Signedin from "./Signedin.js";
import CA1 from "./CA1.js";
import CA2 from "./CA2.js";
import Symptoms from "./Symptoms.js";
import { useEffect } from "react";

let symptomsRef = database().ref("/symptoms");
let profileRef = database().ref("/profile");

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [pw, setPW] = useState(null);
  const [email, setEmail] = useState(null);
  const [date, setDate] = useState(moment().format());
  const [completed, setCompleted] = useState({});
  const [userProfile, setUserProfile] = useState({
    age: "",
    status: "",
    vaccine: "",
    booster: "",
    positive: "",
  });

  const getSymptoms = () => {
    symptomsRef.on("value", (snapshot) => {
      let dt = snapshot.val();
      let obj = {};
      if (dt) {
        for (var key in dt) {
          obj = { ...obj, ...dt[key] };
        }
        setCompleted(obj);
      }
    });
  };

  let load;
  let loggedin;

  if (user && pw) {
    loggedin = true;
  } else {
    loggedin = false;
  }

  if (page === "home" && !loggedin) {
    load = <Home setPage={setPage} />;
  } else if (page === "home" && loggedin) {
    setPage("signedin");
    load = (
      <Signedin
        completed={completed}
        date={date}
        setDate={setDate}
        setPage={setPage}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        pw={pw}
        setPW={setPW}
        user={user}
        setUser={setUser}
        email={email}
        setEmail={setEmail}
      />
    );
  }

  if (page === "signup") {
    load = (
      <Signup
        setPage={setPage}
        setUser={setUser}
        setPW={setPW}
        user={user}
        pw={pw}
        email={email}
        setEmail={setEmail}
      />
    );
  } else if (page === "login") {
    load = (
      <Login
        setPage={setPage}
        setUser={setUser}
        setPW={setPW}
        user={user}
        pw={pw}
      />
    );
  } else if (page === "signedin") {
    load = (
      <Signedin
        completed={completed}
        date={date}
        setDate={setDate}
        setPage={setPage}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        pw={pw}
        setPW={setPW}
        user={user}
        setUser={setUser}
        email={email}
        setEmail={setEmail}
      />
    );
  } else if (page === "ca1") {
    load = (
      <CA1
        setPage={setPage}
        pw={pw}
        user={user}
        setUserProfile={setUserProfile}
        userProfile={userProfile}
      />
    );
  } else if (page === "ca2") {
    load = <CA2 userProfile={userProfile} setPage={setPage} />;
  } else if (page === "symptoms") {
    load = (
      <Symptoms
        getSymptoms={getSymptoms}
        user={user}
        setPage={setPage}
        date={date}
        completed={completed}
        setCompleted={setCompleted}
      />
    );
  }

  useEffect(() => {
    getSymptoms();
  }, []);

  return (
    <View style={styles.container}>
      {load}
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
});
