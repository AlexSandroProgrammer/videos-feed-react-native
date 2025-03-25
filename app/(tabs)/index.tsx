import React, { useState } from "react";
import { styles } from "@/styles/styles";
import { VideoItem } from "@/components/VideoItem";
import { View, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

// Datos de ejemplo: lista de videos en formato MP4
const videosData = [
  { id: "1", uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
  { id: "2", uri: "https://www.w3schools.com/html/mov_bbb.mp4" },
  // Puedes agregar más videos aquí
];

export default function HomeScreen() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [query, setQuery] = useState("");

  const buscarUbicacion = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&extratags=1&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon, extratags } = data[0];

        console.log(`Ubicacion encontrada: ${lat} - ${lon} - ${extratags}`);

        const newRegion = {
          ...region,
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        };
        setRegion(newRegion);
        setMarker({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={videosData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoItem uri={item.uri} />}
        contentContainerStyle={styles.list}
      /> */}

      <MapView style={{ flex: 1 }} region={region}>
        {marker && <Marker coordinate={marker} />}
      </MapView>
      <View style={{ position: "absolute", top: 40, left: 10, right: 10 }}>
        <TextInput
          placeholder="Buscar ubicación"
          value={query}
          onChangeText={setQuery}
          style={{ backgroundColor: "white", padding: 10, borderRadius: 5 }}
        />
        <Button title="Buscar" onPress={buscarUbicacion} />
      </View>
    </View>
  );
}
