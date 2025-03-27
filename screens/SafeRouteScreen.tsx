import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SafeRouteScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Simulated "Map" as a background image */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.routific.com%2Fblog%2Fgoogle-maps-multiple-stops&psig=AOvVaw3nlNHWy0bfedc_TkbuNSbu&ust=1743203732570000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCBp5Syq4wDFQAAAAAdAAAAABAK" }} // Placeholder for map image
          style={styles.mapImage}
        />
      </View>

      {/* Simulated Route Line (Representing the route) */}
      <View style={styles.routeLine}></View>

      {/* Simulated Start and End Markers */}
      <View style={[styles.marker, { top: 150, left: 40 }]}></View> {/* Start Marker */}
      <View style={[styles.marker, { top: 180, left: 300 }]}></View> {/* End Marker */}

      {/* Overlay for UI components */}
      <View style={styles.overlay}>
        <Text style={styles.header}>Safe Route Planning</Text>

        {/* Crime Rate Filter Section */}
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter Routes by Crime Rate</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    width: "90%",
    height: 300,
    position: "absolute",
    top: 50,
    left: 20,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  routeLine: {
    position: "absolute",
    top: 150,
    left: 40,
    width: "70%", // Route width
    height: 2, // Route height
    backgroundColor: "#FF5733", // Color of the route
    borderRadius: 2,
  },
  marker: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 10, // Circular shape for markers
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  filterText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#dc3545", // Red for back button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
