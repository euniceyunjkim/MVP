import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
} from "react-native";
import moment from "moment";
import CalendarStrip from "react-native-calendar-strip";
import React, { useState } from "react";
import SelectBox from "react-native-multi-selectbox";
import { ChevronDownIcon } from "react-native-heroicons/solid";

export default function CA1({
  setPage,
  pw,
  user,
  userProfile,
  setUserProfile,
}) {
  const [date, setDate] = useState(moment());

  const ageGroup = [
    { item: "0 - 17", id: "0 - 17" },
    { item: "18 - 35", id: "18 - 35" },
    { item: "36 - 58", id: "36 - 58" },
    { item: "59 - 70", id: "59 - 70" },
    { item: "71 and above", id: "71 and above" },
  ];

  const status = [
    { item: "fully vaccinated", id: "fully vaccinated" },
    { item: "partially vaccinated", id: "partially vaccinated" },
    { item: "not vaccinated", id: "not vaccinated" },
  ];

  const vaccine = [
    { item: "moderna", id: "moderna" },
    { item: "pfizer", id: "pfizer" },
    { item: "johnson & johnson", id: "johnson & johnson" },
    { item: "not vaccinated", id: "not vaccinated" },
  ];

  const booster = [
    { item: "moderna", id: "moderna" },
    { item: "pfizer", id: "pfizer" },
    { item: "johnson & johnson", id: "johnson & johnson" },
    { item: "no booster", id: "no booster" },
  ];

  const submit = (data) => {
    //eventually do authentication
    let info = {
      age: data.age.item,
      status: data.status.item,
      vaccine: data.vaccine.item,
      booster: data.booster.item,
      positive: data.positive,
    };

    if (!info.positive) {
      info.positive = moment().format();
    }
    
    setUserProfile(info);
    setPage("ca2");
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/hearticon.png")} style={styles.image} />
      <Text style={styles.text}> age?</Text>
      <SelectBox
        label=""
        inputPlaceholder="select your age group"
        selectIcon={<ChevronDownIcon color="black" />}
        options={ageGroup}
        containerStyle={styles.dropdown}
        optionContainerStyle={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: 341,
        }}
        selectedItemStyle={{
          textAlign: "center",
          paddingLeft: 55,
          justifyContent: "center",
        }}
        value={userProfile.age}
        onChange={(age) => setUserProfile({ ...userProfile, age: age })}
        hideInputFilter={true}
      />
      <Text style={styles.text}> vaccination status?</Text>
      <SelectBox
        label=""
        inputPlaceholder="select vaccine status"
        selectIcon={<ChevronDownIcon color="black" />}
        options={status}
        containerStyle={styles.dropdown}
        optionContainerStyle={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: 341,
        }}
        selectedItemStyle={{
          textAlign: "center",
          paddingLeft: 55,
          justifyContent: "center",
        }}
        value={userProfile.status}
        onChange={(status) =>
          setUserProfile({ ...userProfile, status: status })
        }
        hideInputFilter={true}
      />
      <Text style={styles.text}> which vaccine?</Text>
      <SelectBox
        label=""
        inputPlaceholder="select vaccination status"
        selectIcon={<ChevronDownIcon color="black" />}
        options={vaccine}
        containerStyle={styles.dropdown}
        optionContainerStyle={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: 341,
        }}
        selectedItemStyle={{
          textAlign: "center",
          paddingLeft: 55,
          justifyContent: "center",
        }}
        value={userProfile.vaccine}
        onChange={(vaccine) =>
          setUserProfile({ ...userProfile, vaccine: vaccine })
        }
        hideInputFilter={true}
      />
      <Text style={styles.text}> received a booster?</Text>
      <SelectBox
        label=""
        inputPlaceholder="select booster"
        selectIcon={<ChevronDownIcon color="black" />}
        options={booster}
        containerStyle={styles.dropdown}
        optionContainerStyle={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: 341,
        }}
        selectedItemStyle={{
          textAlign: "center",
          paddingLeft: 55,
          justifyContent: "center",
        }}
        value={userProfile.booster}
        onChange={(booster) =>
          setUserProfile({ ...userProfile, booster: booster })
        }
        hideInputFilter={true}
      />
      <Text style={{ ...styles.text, marginBottom: 18 }}>
        {" "}
        date tested positive?
      </Text>
      <CalendarStrip
        selectedDate={date}
        style={{ ...styles.dropdown, height: 80, paddingTop: 5 }}
        daySelectionAnimation={{
          type: "background",
          highlightColor: "rgba(128, 151, 211, 1)",
          duration: 10,
        }}
        scrollable={true}
        calendarColor={"white"}
        onDateSelected={(date) => {
          setDate(date);
          setUserProfile({
            ...userProfile,
            positive: date,
          });
        }}
      />
      {userProfile.age &&
      userProfile.status &&
      userProfile.vaccine &&
      userProfile.booster &&
      date ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => submit(userProfile)}
        >
          <Text style={styles.buttontext}>submit</Text>
        </TouchableOpacity>
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
  image: {
    width: 117,
    height: 117,
  },
  text: {
    letterSpacing: 9,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 18,
  },
  dropdown: {
    display: "flex",
    textAlign: "center",
    width: 341,
    height: 35,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 25,
  },
  button: {
    position: "absolute",
    width: 341,
    height: 64,
    top: 736,
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
});
