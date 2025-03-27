import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { saveSafeModeState, getSafeModeState } from "../utils/storage"; // Import storage functions
import { RootStackParamList } from "../navigation/types";
import { useAuth } from "../context/AuthContext"; // Import Auth Context

// Define Props Type for HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [isSafeMode, setIsSafeMode] = useState<boolean>(false);
  const { user, logout } = useAuth(); // Using Auth Context to get user and logout functionality

  // Load Safe Mode state from storage when the screen loads
  useEffect(() => {
    const loadSafeModeState = async () => {
      const savedState = await getSafeModeState();
      setIsSafeMode(savedState ?? false); // Default to false if no saved state
    };
    loadSafeModeState();
  }, []);

  // Handle Safe Mode Toggle
  const toggleSafeMode = async () => {
    const newState = !isSafeMode;
    setIsSafeMode(newState);
    await saveSafeModeState(newState);
  };

  // Handle Logout
  const handleLogout = async () => {
    await logout(); // Logout logic from Auth Context
    navigation.navigate("Login"); // Now "Login" is valid as a screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Women's Safety App</Text>

      {/* Profile and Logout Button at the Top Right */}
      <View style={styles.topRightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{ uri: "https://path_to_your_profile_icon.png" }} // Replace with your profile icon path or URL
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        {user && (
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Safe Mode Toggle */}
      <View style={styles.safeModeContainer}>
        <Text style={styles.safeModeText}>Safe Mode</Text>
        <Switch
          value={isSafeMode}
          onValueChange={toggleSafeMode}
          trackColor={{ false: "#888", true: "#66bb6a" }} // Darker track color for off state
          thumbColor={isSafeMode ? "#ffffff" : "#888"} // White for the thumb when ON and gray when OFF
          style={styles.safeModeSwitch} // Apply custom style for a smaller switch
        />
        <Text style={[styles.safeModeStatus, isSafeMode ? styles.safeModeOn : styles.safeModeOff]}>
          {isSafeMode ? "ON" : "OFF"}
        </Text>
      </View>

      {/* Feature Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SafeRoute")}>
          <Text style={styles.buttonText}>Safe Route Planning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LiveAlerts")}>
          <Text style={styles.buttonText}>Live Safety Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GuardianAccess")}>
          <Text style={styles.buttonText}>Guardian Access</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.sosButton]} onPress={() => navigation.navigate("SOS")}>
          <Text style={styles.buttonText}>Emergency SOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333", // Darker gray background for the container
    paddingTop: 100, // Increased top padding for more margin
  },
  header: {
    fontSize: 32,
    fontWeight: "600",
    color: "#f4f6f9", // Lighter color for header text to contrast the dark background
    marginBottom: 40, // Increased margin bottom to separate header from the next section
  },
  topRightContainer: {
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular profile icon
    marginRight: 15, // Space between the icon and logout button
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#3b5998", // Professional blue color for logout button
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  safeModeContainer: {
    width: "90%",
    padding: 15,
    backgroundColor: "#444", // Darker background for safe mode section
    borderRadius: 12,
    elevation: 4,
    alignItems: "center",
    marginBottom: 30, // Increased margin between sections
  },
  safeModeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddd", // Light color text for safe mode
    marginBottom: 8,
  },
  safeModeStatus: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  safeModeOn: {
    color: "green",
  },
  safeModeOff: {
    color: "red",
  },
  safeModeSwitch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // Make the switch smaller
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#3b5998", // Blue background for regular buttons
    borderRadius: 12,
    marginVertical: 12, // Increased space between buttons
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  sosButton: {
    backgroundColor: "#dc3545", // Red background for SOS button
  },
});
