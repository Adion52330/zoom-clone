import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { io } from "socket.io-client";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import StartMeeting from "../components/StartMeeting";

let socket;

export default function MeetingRoom() {
  const menuIcons = [
    {
      id: 1,
      name: "microphone",
      title: "Mute",
      customColor: "#efefef",
    },
    {
      id: 2,
      name: "video-camera",
      title: "Stop Video",
    },
    {
      id: 3,
      name: "upload",
      title: "Share Screen",
    },
    {
      id: 4,
      name: "group",
      title: "Participants",
    },
  ];
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [startCamera, setStartCamera] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);

  const startsCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    startsCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io("http://localhost:3000");
    socket.on("connection", () => {
      console.log("Eiiii");
    });
    socket.on("all-users", (users) => {
      console.log("activeUsers");
      console.log(users);
      setActiveUsers(users);
    });
  }, []);
  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type="front"
                style={{
                  width: activeUsers.length == 0 ? "100%" : 200,
                  height: activeUsers.length == 0 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers.map((user, index) => (
                <View key={index} style={styles.activeUserContainer}>
                  <Text style={{ color: "#fff" }}>{user.userName}</Text>
                </View>
              ))}
            </View>
          </View>
          {/* Footer */}
          <View style={styles.menu}>
            {menuIcons.map((menuIcon, index) => (
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={menuIcon.name} size={24} color="#efefef" />
                <Text style={styles.text}>{menuIcon.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  text: {
    color: "#fff",
    marginTop: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cameraContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100%",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "black",
  },
});
