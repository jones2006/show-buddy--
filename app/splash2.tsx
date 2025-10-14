import { View, Text, StyleSheet, Image, TouchableOpacity,StatusBar } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
export default function splash2() {

  const router= useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.container}>
          <View style={styles.img1}></View>
          <View style={styles.img2}></View>
          <Image
            source={require("../assets/homeicons/illustration.png")}
            style={styles.img3}
          />
          <Text style={styles.text}>
            Transform your binge-watching experience with Show buddy—because
            great stories deserve the perfect audience. 🎥✨
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)/Home")}>
            <Text style={styles.btntxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  img1: {
    backgroundColor: "#7F28C8A8",
    width: "100%",
    height: "20%",
    borderEndEndRadius: "90%",
    borderStartEndRadius: "90%",
  },
  img2: {
    backgroundColor: "#A15AE18C",
    width: "65%",
    height: "40%",
    position: "absolute",
    top: "5%",
    left: "70%",
    borderRadius: "50%",
  },
  img3: {
    width: 330,
    height: 380,
    position: "absolute",
    top: "15%",
    left: "10%",
  },
  text: {
    color: "white",
    fontSize: 24,
    width: "90%",
    textAlign: "center",
    position: "absolute",
    top: "67%",
    left: "5%",
  },
  btn: {
    marginBottom: "25%",
    backgroundColor: "#7F28C8",
    width: "90%",
    height: "7%",
    borderRadius: 25,
    position: "relative",
    top: "66%",
    left: "5%",
  },
  btntxt: {
    color: "white",
    position: "absolute",
    top: "25%",
    left: "37%",
    fontSize: 20,
  },
});
