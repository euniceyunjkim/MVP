import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { extendMoment } from "moment-range";
import CalendarStrip from "react-native-calendar-strip";
import { WebView } from "react-native-webview";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
  MenuIcon,
  PlusCircleIcon,
  ChartSquareBarIcon,
} from "react-native-heroicons/solid";

export default function Signedin({
  completed,
  date,
  setDate,
  setPage,
  userProfile,
  setUserProfile,
  pw,
  setPW,
  user,
  setUser,
  email,
  setEmail,
}) {
  const mmt = extendMoment(moment);
  const [days, setDays] = useState(0);
  const [open, setOpen] = useState(false);
  const [showCDC, setshowCDC] = useState(false);

  const start = userProfile.positive.item
    ? moment(userProfile.positive.item)
    : moment(userProfile.positive);

  let end = moment(date);
  let range = mmt.range(start, end);
  const [coDays, setCoDays] = useState(range.diff("days", true));

  let todayS = completed[moment(date).format("MMMM Do, YYYY")] ? completed[moment(date).format("MMMM Do, YYYY")] : null;

  let todaySymptoms = todayS ? Object.keys(todayS).reduce((o,key) => {
    todayS[key] === true && (o[key] = todayS[key])
    return o;
  }, {}) : null;

  let symptomData = todaySymptoms ? Object.keys(todaySymptoms) : null;

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ ...styles.date, display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              setDays(days - 1);
              let temp = moment().add(days - 1, "days");
              setDate(moment(temp).format());
              let end = moment(temp).format();
              let rng = mmt.range(start, end);
              setCoDays(rng.diff("days", true));
            }}
          >
            <ArrowCircleLeftIcon color="white" />
          </TouchableOpacity>
          <Text style={styles.text}>
            {days === 0
              ? moment().format("[Today - ]MMMM Do, YYYY")
              : moment(date).format("MMMM Do, YYYY")}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDays(days + 1);
              let temp = moment().add(days + 1, "days");
              setDate(moment(temp).format());
              let end = moment(temp).format();
              let rng = mmt.range(start, end);
              setCoDays(rng.diff("days", true));
            }}
          >
            <ArrowCircleRightIcon color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(164, 196, 244, 1)",
            width: 54,
            height: 54,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setOpen(true)}
        >
          <MenuIcon color="white" size="45" />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent="false"
          visible={open}
          onRequestClose={() => setOpen(false)}
        >
          <View style={styles.modalContainer}>
            <Image
              source={require("./assets/hearticon.png")}
              style={styles.image}
            />
            <Text style={styles.section}>username</Text>
            <Text style={styles.data}>{user}</Text>
            <Text style={styles.section}>email</Text>
            <Text style={styles.data}>{email}</Text>
            <Text style={styles.section}>age group</Text>
            <Text style={styles.data}>
              {userProfile.age && userProfile.age}
            </Text>
            <Text style={styles.section}>vaccination status</Text>
            <Text style={styles.data}>
              {userProfile.status && userProfile.status}
            </Text>
            <Text style={styles.section}>vaccine type</Text>
            <Text style={styles.data}>
              {userProfile.vaccine && userProfile.vaccine}
            </Text>
            <Text style={styles.section}>booster type</Text>
            <Text style={styles.data}>
              {userProfile.booster && userProfile.booster}
            </Text>
            <Text style={styles.section}>date tested positive</Text>
            <Text style={styles.data}>
              {moment(userProfile.positive).format("MMMM Do, YYYY")}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={styles.exit}
                onPress={() => setOpen(false)}
              >
                <Text style={styles.buttontext}>exit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logout}
                onPress={() => {
                  setUser(null);
                  setPW(null);
                  setEmail(null);
                  setUserProfile({
                    age: "",
                    status: "",
                    vaccine: "",
                    booster: "",
                    positive: "",
                  });
                  setPage("home");
                }}
              >
                <Text style={styles.buttontext}> log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={{
          width: 312,
          height: 312,
          borderRadius: 500,
          backgroundColor: "rgba(164, 196, 244, 1)",
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/hearticon.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            bottom: 200,
            right: 75,
            width: 120,
            height: 120,
            borderRadius: 500,
            backgroundColor: "rgba(128, 151, 211, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            {coDays >= 0 ? "day" : "covid"}
          </Text>
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 30,
              color: "white",
            }}
          >
            {coDays >= 0 ? Math.ceil(coDays) : "free!"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            top: -150,
            right: 55,
            width: 141,
            height: 141,
            borderRadius: 500,
            backgroundColor: "rgba(244, 188, 42, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            {symptomData && symptomData[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            top: -90,
            left: 40,
            width: 160,
            height: 160,
            borderRadius: 500,
            backgroundColor: "rgba(73, 101, 156, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            {symptomData && symptomData[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            top: -30,
            left: -80,
            width: 113,
            height: 113,
            borderRadius: 500,
            backgroundColor: "rgba(128, 151, 211, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            {symptomData && symptomData[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            top: 40,
            right: 100,
            width: 73,
            height: 73,
            borderRadius: 500,
            backgroundColor: "rgba(73, 101, 156, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            top: 80,
            left: 50,
            width: 38,
            height: 38,
            borderRadius: 500,
            backgroundColor: "rgba(244, 188, 42, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            display: "flex",
            bottom: 250,
            left: 130,
            width: 61,
            height: 61,
            borderRadius: 500,
            backgroundColor: "rgba(244, 188, 42, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
      {completed[moment(date).format("MMMM Do, YYYY")] ? null : (
        <TouchableOpacity
          style={styles.symptoms}
          onPress={() => setPage("symptoms")}
        >
          <PlusCircleIcon color="white" />
          <Text style={styles.buttontext2}>log your symptoms</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.analysis}
        onPress={() => setshowCDC(true)}
      >
        <ChartSquareBarIcon color="white" />
        <Text style={styles.buttontext2}>cdc guidelines</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent="false"
        visible={showCDC}
        onRequestClose={() => setOpen(false)}
      >
        <View style={styles.modal}>
          <WebView
            style={{ flex: 1 }}
            source={{
              uri: "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html",
            }}
          />
          <TouchableOpacity
            style={{ ...styles.exit, top: 20, alignSelf: "center" }}
            onPress={() => setshowCDC(false)}
          >
            <Text style={styles.buttontext}>exit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "15%",
    width: "100%",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "25%",
    width: "100%",
    justifyContent: "space-evenly",
  },
  date: {
    display: "flex",
    textAlign: "center",
    width: 280,
    height: 54,
    backgroundColor: "rgba(73, 101, 156, 1)",
    borderRadius: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    height: 35,
    width: "auto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 35,
    textAlign: "center",
    color: "white",
  },
  section: {
    letterSpacing: 9,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 15,
  },
  data: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 30,
  },
  exit: {
    width: 170,
    height: 64,
    backgroundColor: "rgba(73, 101, 156, 1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    height: 35,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 9,
    color: "white",
  },
  logout: {
    width: 170,
    height: 64,
    backgroundColor: "rgba(128, 151, 211, 1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 117,
    height: 117,
    marginBottom: 18,
  },
  symptoms: {
    position: "absolute",
    width: 341,
    height: 94,
    top: 633,
    backgroundColor: "rgba(73, 101, 156, 1)",
    borderRadius: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  analysis: {
    position: "absolute",
    width: 341,
    height: 94,
    bottom: 89,
    backgroundColor: "rgba(128, 151, 211, 1)",
    borderRadius: 25,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttontext2: {
    height: 35,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 6,
    color: "white",
  },
  modal: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    height: "90%",
  },
});
