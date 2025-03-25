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
      </View>

      {/* Feature Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Navigating to SafeRouteScreen...");
          navigation.navigate("SafeRoute");
        }}
      >
        <Text style={styles.buttonText}>Safe Route Planning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Navigating to LiveAlertsScreen...");
          navigation.navigate("LiveAlerts");
        }}
      >
        <Text style={styles.buttonText}>Live Safety Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Navigating to GuardianAccessScreen...");
          navigation.navigate("GuardianAccess");
        }}
      >
        <Text style={styles.buttonText}>Guardian Access</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.sosButton]}
        onPress={() => {
          console.log("Navigating to SOSScreen...");
          navigation.navigate("SOS");
        }}
      >
        <Text style={styles.buttonText}>Emergency SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  safeModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginBottom: 20,
  },
  safeModeText: {
    fontSize: 18,
  },
  button: {
    width: "90%",
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  sosButton: {
    backgroundColor: "red",
  },
});

