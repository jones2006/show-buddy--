import Headermenu from "@/components/Header";
import Cards from "@/components/cards";
import Cards2 from "@/components/cards2";
import Cards3 from "@/components/cards3";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const image = [
  require("../../assets/images/Search 01.png"),
  require("../../assets/images/download.png"),
  require("../../assets/images/user_icon.png"),
];

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Headermenu showHamburger={true} />
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={styles.input}>
            <Image source={image[0]} />
            <TextInput
              placeholder="Search a movie/series"
              placeholderTextColor={"white"}
              onPress={() => {
                router.push("/(tabs)/Stream");
              }}
            />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                router.push("/(link)/download");
              }}
            >
              <Image source={image[1]} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                router.push("/(tabs)/profile");
              }}
            >
              <Image source={image[2]} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Cards />
        </View>
        <View style={styles.texts}>
          <Text style={styles.text1}>Best/ popular movies</Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("/(tabs)/Stream");
            }}
          >
            <Text style={styles.text2}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card2}>
          <Cards2 />
          <Cards3 />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  input: {
    width: "70%",
    height: 50,
    backgroundColor: "#595656",
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 8,
  },
  btns: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
    height: "auto",
  },
  btn1: {
    width: "12%",
    height: 50,
    backgroundColor: "#7F28C8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btn2: {
    width: "12%",
    height: 50,
    backgroundColor: "#7F28C8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  texts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 10,
  },
  text1: {
    fontWeight: "bold",
    color: "#A15AE1",
    fontSize: 17,
  },
  text2: {
    fontWeight: "bold",
    color: "#A15AE1",
    fontSize: 17,
  },
  card2: {
    marginLeft: 10,
    marginTop: 10,
  },
});
