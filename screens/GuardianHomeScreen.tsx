import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GuardianHomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Guardian</Text>

      <Text style={styles.subtitle}>
        Here you can monitor the safety status of the person you're guarding.
      </Text>

      {/* Button to view live alerts */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LiveAlerts")}
      >
        <Ionicons name="notifications" size={24} color="white" />
        <Text style={styles.buttonText}>View Live Alerts</Text>
      </TouchableOpacity>

      {/* Button to view the safe route */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SafeRoute")}
      >
        <Ionicons name="map" size={24} color="white" />
        <Text style={styles.buttonText}>View Safe Route</Text>
      </TouchableOpacity>

      {/* Button to access guardian features */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GuardianAccess")}
      >
        <Ionicons name="shield" size={24} color="white" />
        <Text style={styles.buttonText}>Guardian Access</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976d2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: "#d32f2f",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
