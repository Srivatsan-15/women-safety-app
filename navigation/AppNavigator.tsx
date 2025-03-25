import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Import Screens
import HomeScreen from "../screens/HomeScreen";
import SOSScreen from "../screens/SOSScreen";
import LiveAlertsScreen from "../screens/LiveAlertsScreen";
import SafeRouteScreen from "../screens/SafeRouteScreen";
import GuardianAccessScreen from "../screens/GuardianAccessScreen";

// Define Stack Param List
export type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
  LiveAlerts: undefined;
  SafeRoute: undefined;
  GuardianAccess: undefined;
};

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SOS" component={SOSScreen} />
        <Stack.Screen name="LiveAlerts" component={LiveAlertsScreen} />
        <Stack.Screen name="SafeRoute" component={SafeRouteScreen} />
        <Stack.Screen name="GuardianAccess" component={GuardianAccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
