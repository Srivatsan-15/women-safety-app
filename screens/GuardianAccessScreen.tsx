import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GuardianAccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guardian Access</Text>
      {/* Add functionality for guardian access here */}
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
