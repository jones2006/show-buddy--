import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ToggleExample() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.toggleBtn, isOn ? styles.on : styles.off]}
        onPress={toggleSwitch}
      >
        <Text style={styles.text}>{isOn ? "ON" : "OFF"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  on: {
    backgroundColor: "#7F28C8",
  },
  off: {
    backgroundColor: "gray",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
