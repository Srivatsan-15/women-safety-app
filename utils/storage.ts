import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveSafeModeState = async (state: boolean) => {
  try {
    await AsyncStorage.setItem("safeMode", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving Safe Mode state:", error);
  }
};

export const getSafeModeState = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem("safeMode");
    return value ? JSON.parse(value) : false;
  } catch (error) {
    console.error("Error loading Safe Mode state:", error);
    return false;
  }
};
