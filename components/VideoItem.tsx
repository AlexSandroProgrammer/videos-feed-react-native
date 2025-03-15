// App.js
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "@/styles/styles";

// Componente para cada item de video
export const VideoItem = ({ uri }: any) => {
  // Creamos una referencia al componente Video para controlar funciones imperativas
  const videoRef = React.useRef<Video>(null);

  // Función para activar el modo de pantalla completa
  const handleFullscreen = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.presentFullscreenPlayer();
      } catch (error) {
        console.error(
          "Error al presentar el video en pantalla completa:",
          error
        );
      }
    }
  };

  return (
    <View style={styles.videoContainer}>
      <Video
        ref={videoRef}
        source={{ uri }}
        style={styles.video}
        useNativeControls // Muestra controles nativos (play, pausa, etc.)
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      {/* Botón para activar pantalla completa */}
      <TouchableOpacity
        style={styles.fullscreenIcon}
        onPress={handleFullscreen}
      >
        <MaterialIcons name="fullscreen" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
