import React from "react";
import { SafeModeProvider } from "./context/SafeModeContext";
import AppNavigator from "./navigation/AppNavigator"; // Ensure navigation is correctly imported

export default function App() {
  return (
    <SafeModeProvider>
      <AppNavigator />
    </SafeModeProvider>
  );
}
