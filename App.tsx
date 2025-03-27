import React from "react";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import { SafeModeProvider } from "./context/SafeModeContext";
import AppNavigator from "./navigation/AppNavigator"; // Ensure navigation is correctly imported

export default function App() {
  return (
    <AuthProvider>
      <SafeModeProvider>
        <AppNavigator />
      </SafeModeProvider>
    </AuthProvider>
  );
}
