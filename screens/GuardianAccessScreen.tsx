import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

// Define Guardian Access Screen
export default function GuardianAccessScreen({ navigation }: any) {
  const [guardianName, setGuardianName] = useState(""); // State for guardian's name
  const [guardianNumber, setGuardianNumber] = useState(""); // State for guardian's phone number
  const [guardianList, setGuardianList] = useState<{ name: string; number: string }[]>([]); // List to hold multiple guardians

  // Function to save the guardian information
  const saveGuardian = () => {
    if (guardianNumber.length < 10) {
      Alert.alert("Invalid Number", "Please enter a valid 10-digit phone number.");
      return;
    }
    // Save the guardian name and number in the list
    setGuardianList([...guardianList, { name: guardianName, number: guardianNumber }]);
    setGuardianName(""); // Clear the input fields after saving
    setGuardianNumber("");
    Alert.alert("Success", "Guardian saved successfully!");
  };

  // Function to simulate sending an alert
  const sendAlert = () => {
    if (!guardianNumber) {
      Alert.alert("No Guardian", "Please save a guardian number first.");
      return;
    }
    // Simulate sending an alert to the guardian
    Alert.alert("Alert Sent", `Test alert sent to ${guardianName} at ${guardianNumber}`);
    console.log(`Sending emergency alert to ${guardianName} at ${guardianNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navigates to the previous screen
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Guardian Access</Text>

      {/* Input Field for Guardian's Name */}
      <TextInput
        style={styles.input}
        placeholder="Enter Guardian's Name"
        value={guardianName}
        onChangeText={setGuardianName}
      />

      {/* Input Field for Guardian's Phone Number */}
      <TextInput
        style={styles.input}
        placeholder="Enter Guardian's Phone Number"
        keyboardType="phone-pad"
        value={guardianNumber}
        onChangeText={setGuardianNumber}
      />

      {/* Save Guardian Button */}
      <TouchableOpacity style={styles.button} onPress={saveGuardian}>
        <Text style={styles.buttonText}>Save Guardian</Text>
      </TouchableOpacity>

      {/* Send Test Alert Button */}
      <TouchableOpacity
        style={[styles.button, styles.alertButton]}
        onPress={sendAlert}
      >
        <Text style={styles.buttonText}>Send Test Alert</Text>
      </TouchableOpacity>

      {/* Display Saved Guardians */}
      {guardianList.length > 0 && (
        <View style={styles.savedGuardiansContainer}>
          <Text style={styles.savedGuardiansHeader}>Saved Guardians:</Text>
          {guardianList.map((guardian, index) => (
            <Text key={index} style={styles.savedGuardianText}>
              {guardian.name}: {guardian.number}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2c2c", // Darker background color
    paddingHorizontal: 30,
    paddingTop: 60, // Increased top margin for better spacing
    paddingBottom: 30, // Increased bottom margin
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 12,
    backgroundColor: "#007bff", // Blue background for the button
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff", // White color for header
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#444", // Darker background for input fields
    fontSize: 16,
    color: "#fff", // White text color for inputs
  },
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#007bff", // Blue for Save Guardian button
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  alertButton: {
    backgroundColor: "#dc3545", // Red for alert button
  },
  savedGuardiansContainer: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    backgroundColor: "#444", // Dark background for saved guardians container
    borderRadius: 10,
    alignItems: "flex-start",
  },
  savedGuardiansHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff", // White color for header
  },
  savedGuardianText: {
    fontSize: 16,
    color: "#bbb", // Light gray for guardian text
  },
});
