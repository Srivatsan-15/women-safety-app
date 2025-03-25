import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LiveAlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Safety Alerts</Text>
      {/* Add functionality for live safety alerts here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
