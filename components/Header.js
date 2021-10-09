import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo name="notification" size={30} color="#efefef" />
      </TouchableOpacity>
      <Text style={styles.header}>Meet & Chat</Text>
      <TouchableOpacity>
        <Entypo name="new-message" size={30} color="#efefef" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    color: "#efefef",
    fontSize: 20,
    fontWeight: "700",
  },
});
