import React, { createContext, useState, useEffect, ReactNode } from "react";
import { saveSafeModeState, getSafeModeState } from "../utils/storage"; // Import storage functions

// Safe Mode Context Type
interface SafeModeContextType {
  isSafeMode: boolean;
  toggleSafeMode: () => void;
}

// Create Context
export const SafeModeContext = createContext<SafeModeContextType | undefined>(undefined);

// Safe Mode Provider Props
interface SafeModeProviderProps {
  children: ReactNode;
}

// Safe Mode Provider Component
export const SafeModeProvider: React.FC<SafeModeProviderProps> = ({ children }) => {
  const [isSafeMode, setIsSafeMode] = useState<boolean>(false);

  // Load initial Safe Mode state from storage
  useEffect(() => {
    const loadSafeModeState = async () => {
      const savedState = await getSafeModeState();
      setIsSafeMode(savedState);
    };
    loadSafeModeState();
  }, []);

  // Toggle Safe Mode
  const toggleSafeMode = async () => {
    const newState = !isSafeMode;
    setIsSafeMode(newState);
    await saveSafeModeState(newState);
  };

  return (
    <SafeModeContext.Provider value={{ isSafeMode, toggleSafeMode }}>
      {children} {/* Ensure 'children' is properly handled */}
    </SafeModeContext.Provider>
  );
};

// Custom Hook for Using Safe Mode Context
export const useSafeMode = (): SafeModeContextType => {
  const context = React.useContext(SafeModeContext);
  if (!context) {
    throw new Error("useSafeMode must be used within a SafeModeProvider");
  }
  return context;
};
