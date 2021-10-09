import React from "react";
import {} from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function StartMeeting({
  name,
  setName,
  roomId,
  setRoomId,
  joinRoom,
}) {
  return (
    <View>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter Username"
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter Meeting ID"
            style={styles.textInput}
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.startMeetingButton}
            onPress={() => joinRoom()}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Start/Join Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "#fff",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
  },
});
