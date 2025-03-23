import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define Stack Param List
type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
};

// Define Props Type for HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Women's Safety App!</Text>
      <Button title="Go to SOS" onPress={() => navigation.navigate("SOS")} />
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
    color: "#333",
  },
});
