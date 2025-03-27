import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../navigation/types"; // Import the RootStackParamList
import { StackNavigationProp } from "@react-navigation/stack";

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const handleRegister = async () => {
    try {
      const userData = { name, email, password };
      await AsyncStorage.setItem(email, JSON.stringify(userData));
      Alert.alert("Success", "Registration successful!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", "Registration failed!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginLinkContainer}
      >
        <Text style={styles.loginLink}>
          Already have an account? <Text style={styles.boldText}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333", // Dark background for the container
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "600",
    color: "#f4f6f9", // Light color for the header text
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#444", // Darker input field background
    borderColor: "#555", // Slightly lighter border color
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: "#f4f6f9", // Light text color for inputs
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#3b5998", // Professional blue button color
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    shadowColor: "#3b5998",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginLinkContainer: {
    marginTop: 20,
  },
  loginLink: {
    color: "#007bff", // Blue for the link
    textAlign: "center",
    fontSize: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default RegisterScreen;
