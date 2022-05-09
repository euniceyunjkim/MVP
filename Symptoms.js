import { StatusBar } from "expo-status-bar";
import database from "@react-native-firebase/database";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import moment from "moment";
import React, { useState } from "react";
import { EmojiHappyIcon, EmojiSadIcon } from "react-native-heroicons/solid";

export default function Symptoms({
  user,
  setPage,
  date,
  completed,
  setCompleted,
  getSymptoms,
}) {
  const [question, setQuestion] = useState(0);
  const [symptoms, setSymptoms] = useState({
    mood: null,
    fever: false,
    cough: false,
    breathing: false,
    throat: false,
    aches: false,
    fatigue: false,
    headache: false,
    loss: false,
    congestion: false,
    nausea: false,
    diarrhea: false,
    symptoms: null,
    symptomDate: null,
    negative: false,
  });

  const addSymptoms = (info) => {
    database()
      .ref("/symptoms")
      .push({
        [info.symptomDate]: info,
      })
      .then(() => getSymptoms())
      .catch((err) => console.log("err logging symptoms", err));

    Alert.alert("You have logged your symptoms!");
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/hearticon.png")} style={styles.image} />
      {question === 0 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>how are you {"\n"}feeling today?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                let temp = moment(date).format("MMMM Do, YYYY");
                setSymptoms({ ...symptoms, mood: true, symptomDate: temp });
                setQuestion(1);
              }}
            >
              <EmojiHappyIcon color="white" size="50" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#49659C" }}
              onPress={() => {
                let temp = moment(date).format("MMMM Do, YYYY");
                setSymptoms({ ...symptoms, mood: false, symptomDate: temp });
                setQuestion(1);
              }}
            >
              <EmojiSadIcon color="white" size="50" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 1 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>any symptoms today?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, symptoms: true });
                setQuestion(2);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, symptoms: false });
                setQuestion(2);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 2 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>do you have a fever?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, fever: true });
                setQuestion(3);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, fever: false });
                setQuestion(3);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 3 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>do you have a cough?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, cough: true });
                setQuestion(4);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, cough: false });
                setQuestion(4);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 4 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>difficulty breathing?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, breathing: true });
                setQuestion(5);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, breathing: false });
                setQuestion(5);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 5 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>do you have a sore throat?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, throat: true });
                setQuestion(6);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, throat: false });
                setQuestion(6);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 6 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>any muscle/ body aches?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, aches: true });
                setQuestion(7);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, aches: false });
                setQuestion(7);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 7 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>any unusual fatigue?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, fatigue: true });
                setQuestion(8);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, fatigue: false });
                setQuestion(8);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 8 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>headache?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, headache: true });
                setQuestion(9);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, headache: false });
                setQuestion(9);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 9 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>loss of taste/ smell?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, loss: true });
                setQuestion(10);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, loss: false });
                setQuestion(10);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 10 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>any congestion/ runny nose?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, congestion: true });
                setQuestion(11);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, congestion: false });
                setQuestion(11);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 11 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>any nausea?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, nausea: true });
                setQuestion(12);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, nausea: false });
                setQuestion(12);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 12 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>any diarrhea?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                setSymptoms({ ...symptoms, diarrhea: true });
                setQuestion(13);
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                setSymptoms({ ...symptoms, diarrhea: false });
                setQuestion(13);
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {question === 13 ? (
        <View style={styles.Qcontainer}>
          <Text style={styles.text}>have you tested negative?</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.button2,
                backgroundColor: "rgba(244, 188, 42, 1)",
              }}
              onPress={() => {
                let temp = moment(date).format("MMMM Do, YYYY");
                setSymptoms({
                  ...symptoms,
                  negative: true,
                });
                // setCompleted({ ...completed, [temp]: "completed" });
                addSymptoms(symptoms);
                setPage("signedin");
              }}
            >
              <Text style={styles.answers}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button2, backgroundColor: "#49659C" }}
              onPress={() => {
                let temp = moment(date).format("MMMM Do, YYYY");
                setSymptoms({
                  ...symptoms,
                  negative: false,
                });
                // setCompleted({ ...completed, [temp]: "completed" });
                addSymptoms(symptoms);
                setPage("signedin");
              }}
            >
              <Text style={styles.answers}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    marginTop: "25%",
  },
  Qcontainer: {
    display: "flex",
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
  },
  image: {
    width: 117,
    height: 117,
  },
  text: {
    letterSpacing: 7,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 18,
    marginBottom: 30,
  },
  button: {
    width: 101,
    height: 75,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: 101,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  answers: {
    letterSpacing: 5,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    color: "black",
  },
});
