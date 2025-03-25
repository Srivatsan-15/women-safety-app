import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { saveSafeModeState, getSafeModeState } from "../utils/storage"; // Import storage functions
import { RootStackParamList } from "../navigation/types";

// Define Props Type for HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [isSafeMode, setIsSafeMode] = useState<boolean>(false);

  // Load Safe Mode state from storage when the screen loads
  useEffect(() => { 
    const loadSafeModeState = async () => {
      const savedState = await getSafeModeState();
      setIsSafeMode(savedState);
    };
    loadSafeModeState();
  }, []);

  // Handle Safe Mode Toggle
  const toggleSafeMode = async () => {
    const newState = !isSafeMode;
    setIsSafeMode(newState);
    await saveSafeModeState(newState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Women's Safety App</Text>

      {/* Safe Mode Toggle */}
      <View style={styles.safeModeContainer}>
        <Text style={styles.safeModeText}>Safe Mode</Text>
        <Switch value={isSafeMode} onValueChange={toggleSafeMode} />
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
    backgroundColor: "#f8f9fa",
    paddingTop: 80, // Increased spacing at the top
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  safeModeContainer: {
    width: "90%",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 4, // Shadow effect (for Android)
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    marginBottom: 25,
  },
  safeModeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 8,
  },
  safeModeStatus: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5, // Added margin to separate from the switch
  },
  safeModeOn: {
    color: "green",
  },
  safeModeOff: {
    color: "red",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    elevation: 3, // Shadow effect for Android
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  sosButton: {
    backgroundColor: "#dc3545", // Red for SOS
  },
});

