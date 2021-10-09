import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Adioom">
        <Stack.Screen
          name="Adioom"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Meet Room"
          component={MeetingRoom}
          options={{
            title: "Start A Meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
              shadowOpacity: 0,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
