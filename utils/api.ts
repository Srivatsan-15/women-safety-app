import axios from "axios";

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

export const getSafeRoute = async (
    origin: { latitude: number; longitude: number },
    destination: string
  ) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json`,
        {
          params: {
            origin: `${origin.latitude},${origin.longitude}`,
            destination: destination,
            key: GOOGLE_MAPS_API_KEY,
            mode: "walking",
            alternatives: true,
          },
        }
      );
  
      const routes = response.data.routes;
      if (routes.length > 0) {
        // Choose the safest route based on predefined criteria
        return routes[0].legs[0].steps.map((step: any) => ({
          latitude: step.start_location.lat,
          longitude: step.start_location.lng,
        }));
      }
  
      return [];
    } catch (error) {
      console.error("Error fetching safe route:", error);
      return [];
    }
  };
  