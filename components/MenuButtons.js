import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "orange",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

export default function MenuButtons({ navigation }) {
  const openMeeting = () => {
    navigation.navigate("Meet Room");
  };
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => openMeeting()}
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470dc",
            }}
          >
            <FontAwesome name={item.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
