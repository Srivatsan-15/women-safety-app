import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define Stack Param List
type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
  SafeRoute: undefined;
  Alerts: undefined;
  Guardian: undefined;
};

// Define Props Type for HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [safeMode, setSafeMode] = useState(false);

  // Toggle Safe Mode and store state in AsyncStorage
  const toggleSafeMode = async () => {
    const newMode = !safeMode;
    setSafeMode(newMode);
    await AsyncStorage.setItem("safeMode", JSON.stringify(newMode));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Women's Safety App</Text>

      {/* Safe Mode Toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Safe Mode</Text>
        <Switch value={safeMode} onValueChange={toggleSafeMode} />
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SafeRoute")}>
        <Text style={styles.buttonText}>Safe Route Planning</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Alerts")}>
        <Text style={styles.buttonText}>Live Safety Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Guardian")}>
        <Text style={styles.buttonText}>Guardian Access</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.sosButton]} onPress={() => navigation.navigate("SOS")}>
        <Text style={styles.sosText}>Emergency SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#333",
  },
  button: {
    width: "100%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  sosButton: {
    backgroundColor: "#dc3545",
  },
  sosText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

