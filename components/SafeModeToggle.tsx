// src/components/SafeModeToggle.tsx
import React, { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SafeModeToggle: React.FC = () => {
  const [isSafeMode, setIsSafeMode] = useState<boolean>(false);

  useEffect(() => {
    // Load Safe Mode state from storage
    const loadSafeMode = async () => {
      try {
        const savedState = await AsyncStorage.getItem("safeMode");
        if (savedState !== null) {
          setIsSafeMode(JSON.parse(savedState));
        }
      } catch (error) {
        console.error("Error loading Safe Mode state", error);
      }
    };
    loadSafeMode();
  }, []);

  const toggleSafeMode = async () => {
    try {
      const newState = !isSafeMode;
      setIsSafeMode(newState);
      await AsyncStorage.setItem("safeMode", JSON.stringify(newState));
    } catch (error) {
      console.error("Error saving Safe Mode state", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Safe Mode: {isSafeMode ? "ON ✅" : "OFF ❌"}
      </Text>
      <Switch value={isSafeMode} onValueChange={toggleSafeMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default SafeModeToggle;
