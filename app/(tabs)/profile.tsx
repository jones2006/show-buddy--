import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Headermenu from "@/components/Header";
import ToggleExample from "@/components/Toggle";
export default function profile() {
  return (
    <View style={styles.container}>
      <Headermenu showHamburger={false} />
      <View style={styles.profile}>
        <Image
          source={require("@/assets/images/Ellipse 6.png")}
          style={styles.proimg}
        />
        <Text style={styles.protxt}>User</Text>
      </View>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.notify}>
        <TouchableOpacity style={styles.btn1}>
          <Image
            source={require("@/assets/images/notifications.png")}
            style={styles.btn1img}
          />
        </TouchableOpacity>
        <Text style={styles.btn1txt}>Notification</Text>
        <ToggleExample />
      </View>
      <Text style={styles.profiletext}>Profile</Text>
      <View style={styles.user}>
        <TouchableOpacity style={styles.btn3}>
          <Image
            source={require("@/assets/images/user_icon.png")}
            style={styles.btn3img}
          />
        </TouchableOpacity>
        <Text style={styles.btn3txt}>Manual User</Text>
        <ToggleExample />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  profile: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  proimg: {
    width: 145,
    height: 144,
  },
  protxt: {
    color: "white",
    textAlign: "left",
    fontSize: 24,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    position: "absolute",
    top: 340,
    left: 20,
  },
  notify: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 50,
    alignItems: "center",
    position: "relative",
    top: 80,
  },
  btn1: {
    backgroundColor: "#B482E0",
    width: "12%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn1img: {
    width: 24,
    height: 24,
  },
  btn1txt: {
    color: "white",
    fontWeight: "400",
    fontSize: 22,
  },
  dark: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 50,
    alignItems: "center",
    position: "relative",
    top: 100,
  },
  btn2: {
    backgroundColor: "#B482E0",
    width: "12%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn2img: {
    width: 24,
    height: 24,
  },
  btn2txt: {
    color: "white",
    fontWeight: "400",
    fontSize: 22,
  },
  profiletext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    position: "relative",
    top: 120,
    left: 25,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 40,
    alignItems: "center",
    position: "relative",
    top: 140,
  },
  btn3: {
    backgroundColor: "#B482E0",
    width: "12%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn3img: {
    width: 24,
    height: 24,
  },
  btn3txt: {
    color: "white",
    fontWeight: "400",
    fontSize: 22,
  },
   button: {
    backgroundColor: "#B482E0",
    width: 300,
    height: 50,
    borderRadius: 10,
    position: "absolute",
    top: 665,
    left: 65,
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 16,
  },

});
