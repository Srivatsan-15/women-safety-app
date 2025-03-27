import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../navigation/types"; // Import the RootStackParamList
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth(); // Get login function from AuthContext

  const handleLogin = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem(email);
      if (!storedUserData) {
        Alert.alert("Error", "Email or Password is incorrect.");
        return;
      }

      const userData = JSON.parse(storedUserData);

      if (userData.password === password) {
        // Correct login: Use email and password when calling login
        login(email, password);
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Email or Password is incorrect.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during login.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WELCOME BACK</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.registerLinkContainer}
      >
        <Text style={styles.registerLink}>
          Don't have an account? <Text style={styles.boldText}>Register here</Text>
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
    color: "#f4f6f9", // Lighter color for header text to contrast the dark background
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#444", // Darker background for input fields
    borderColor: "#555", // Slightly lighter border color for input fields
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: "#f4f6f9", // Lighter color text for input fields
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
  registerLinkContainer: {
    marginTop: 20,
  },
  registerLink: {
    color: "#007bff", // Blue for the link
    textAlign: "center",
    fontSize: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default LoginScreen;
