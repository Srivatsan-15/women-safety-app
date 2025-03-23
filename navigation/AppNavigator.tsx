import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Import Screens
import HomeScreen from "../screens/HomeScreen";
import SOSScreen from "../screens/SOSScreen";

// Define Stack Param List
export type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
};

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SOS" component={SOSScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
