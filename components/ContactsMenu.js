import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contextMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "Contact",
    name: "Gru",
    photo: require("../assets/gru.jpg"),
  },
  {
    type: "Contact",
    name: "Harry",
    photo: require("../assets/harry.jpg"),
  },
  {
    type: "Contact",
    name: "Beluga",
    photo: require("../assets/beluga.jpg"),
  },
  {
    type: "Contact",
    name: "Aditya Developer",
    photo: require("../assets/me.jpg"),
  },
];

export default function ContactsMenu() {
  return (
    <View style={styles.container}>
      {contextMenuButtons.map((button, index) => (
        <View key={index} style={styles.row}>
          {/* Image */}
          {button.type == "starred" ? (
            <View style={styles.icon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={button.photo} style={styles.image} />
          )}
          {/* Text */}
          <Text style={styles.text}>{button.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
