import { router } from "expo-router";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const image = [
  require("../assets/images/side_logo.png"),
  require("../assets/images/hambug.png"),
];

export default function Headermenu({ showHamburger = false }) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            router.replace("/(tabs)/Home");
          }}
        >
          <Image source={image[0]} style={styles.headlogo} />
        </TouchableOpacity>
        {showHamburger && (
          <TouchableOpacity>
            <Image source={image[1]} style={styles.headham} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 35,
  },
  headlogo: {
    width: 165,
    height: 25,
  },
  headham: {
    width: 35,
    height: 18,
  },
});
