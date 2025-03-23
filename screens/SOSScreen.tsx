import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define Stack Param List
type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
};

// Define Props Type for SOSScreen
type Props = NativeStackScreenProps<RootStackParamList, "SOS">;

export default function SOSScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🚨 SOS Activated! 🚨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
