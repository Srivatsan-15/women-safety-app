import AsyncStorage from "@react-native-async-storage/async-storage";

const SAFE_MODE_KEY = "safe_mode_state";

export const saveSafeModeState = async (isEnabled: boolean) => {
  try {
    await AsyncStorage.setItem(SAFE_MODE_KEY, JSON.stringify(isEnabled));
  } catch (error) {
    console.error("Error saving Safe Mode state:", error);
  }
};

export const getSafeModeState = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(SAFE_MODE_KEY);
    return value !== null ? JSON.parse(value) : false; // Default to false
  } catch (error) {
    console.error("Error retrieving Safe Mode state:", error);
    return false;
  }
};
