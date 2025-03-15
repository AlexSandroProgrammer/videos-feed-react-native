import { StyleSheet } from "react-native";

// Estilos para una interfaz amigable
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    paddingVertical: 10,
  },
  videoContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  video: {
    width: "90%",
    height: 200,
    backgroundColor: "#000",
  },
  fullscreenIcon: {
    position: "absolute",
    bottom: 10,
    right: "5%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 5,
  },
});
