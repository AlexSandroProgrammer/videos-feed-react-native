import { Image, StyleSheet, Platform, View, FlatList } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { styles } from "@/styles/styles";
import { VideoItem } from "@/components/VideoItem";

// Datos de ejemplo: lista de videos con sus URLs
const videosData = [
  { id: "1", uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
  { id: "2", uri: "https://www.w3schools.com/html/mov_bbb.mp4" },
  // Puedes agregar más videos aquí
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={stylesHome.reactLogo}
        />
      }
    >
      <View style={styles.container}>
        <FlatList
          data={videosData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VideoItem uri={item.uri} />}
          contentContainerStyle={styles.list}
        />
      </View>
    </ParallaxScrollView>
  );
}

const stylesHome = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
