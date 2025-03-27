import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

export default function LiveSafetyAlertScreen() {
  const navigation = useNavigation(); // Get the navigation object

  // Sample data for live safety alerts (Replace this with real data when functional)
  const [alerts] = useState([
    { id: "1", message: "Suspicious activity detected near your location", time: "2 minutes ago" },
    { id: "2", message: "Safe route detour: Street blockage detected", time: "5 minutes ago" },
    { id: "3", message: "Emergency: High traffic reported ahead", time: "10 minutes ago" },
  ]);

  // Function to handle alert item click
  const handleAlertClick = (alertMessage: string) => {
    Alert.alert("Alert", alertMessage, [{ text: "OK" }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Safety Alerts</Text>
      <Text style={styles.subtitle}>Stay updated with real-time safety alerts!</Text>

      {/* List of live alerts */}
      <FlatList
        data={alerts}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.alertItem}
            onPress={() => handleAlertClick(item.message)}
          >
            <Text style={styles.alertMessage}>{item.message}</Text>
            <Text style={styles.alertTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="white" />
        <Text style={styles.backText}> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#2c2c2c", // Darker background color
    paddingTop: 60, // Increased top margin for better spacing
    paddingBottom: 30, // Increased bottom margin
    paddingHorizontal: 30, // Added more horizontal padding for a spacious feel
  },
  title: {
    fontSize: 28, // Larger font size for the title
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 25, // Added more space between title and subtitle
  },
  subtitle: {
    fontSize: 18, // Increased font size for readability
    color: "#e0e0e0", // Lighter color for the subtitle for contrast against dark background
    marginBottom: 40, // Added more margin below the subtitle
    textAlign: "center",
    paddingHorizontal: 25,
  },
  alertItem: {
    backgroundColor: "#444", // Darker background for the alert items
    width: "100%", // Ensure it takes full width of the screen
    padding: 18, // Added padding for better touch area
    marginVertical: 15, // Increased vertical margin between items
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  alertMessage: {
    fontSize: 18, // Slightly larger font size for alert messages
    fontWeight: "bold",
    color: "#fff", // White color for better readability
  },
  alertTime: {
    fontSize: 16, // Increased font size for time for better readability
    color: "#bbb", // Lighter gray color for the time
    marginTop: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976d2", // Blue background for the button
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 40, // More space between back button and alerts list
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 7,
  },
  backText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 8,
  },
});
