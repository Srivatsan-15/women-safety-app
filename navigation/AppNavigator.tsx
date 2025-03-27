import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens from both parts
import LoginScreen from "../screens/LoginScreen"; // Adjust imports as needed
import RegisterScreen from "../screens/RegisterScreen"; // Adjust imports as needed
import HomeScreen from "../screens/HomeScreen"; // Regular User Home
import GuardianHomeScreen from "../screens/GuardianHomeScreen"; // Guardian Home
import SOSScreen from "../screens/SOSScreen"; // Import SOSScreen
import LiveAlertsScreen from "../screens/LiveAlertsScreen"; // Import LiveAlertsScreen
import SafeRouteScreen from "../screens/SafeRouteScreen"; // Import SafeRouteScreen
import GuardianAccessScreen from "../screens/GuardianAccessScreen"; // Import GuardianAccessScreen

// Define Stack Param List for the navigator
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined; // Regular user home
  GuardianHome: undefined; // Guardian home screen
  SOS: undefined;
  LiveAlerts: undefined;
  SafeRoute: undefined;
  GuardianAccess: undefined;
};

// Create Stack Navigator with the updated RootStackParamList type
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Screens for Authentication */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{
            title: "Register", // Optional title for register screen
          }}
        />

        {/* Screens for Home and Functional Features */}
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Regular user Home */}
        <Stack.Screen name="GuardianHome" component={GuardianHomeScreen} /> {/* Guardian Home */}
        <Stack.Screen name="SOS" component={SOSScreen} />
        <Stack.Screen name="LiveAlerts" component={LiveAlertsScreen} />
        <Stack.Screen name="SafeRoute" component={SafeRouteScreen} />
        <Stack.Screen name="GuardianAccess" component={GuardianAccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
