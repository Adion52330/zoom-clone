import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={styles.searchBar}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
  },
  searchBar: {
    color: "#858585",
    paddingLeft: 14,
    fontSize: 17,
  },
});
