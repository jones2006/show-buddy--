import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Rootlayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#A15AE1",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#0F0F0F",
          elevation: 1,
          width: "100%",
          height: "12%",
          paddingTop: "2%",
          borderTopWidth: 0,
          borderTopEndRadius:"8%",
          borderTopStartRadius:"8%",
          position:"absolute",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Stream"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="tv" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
