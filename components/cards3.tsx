import { fetchPopularmovies } from "@/services/api";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// const images = [
//   require("../assets/images/img4.png"),
//   require("../assets/images/img5.png"),
//   require("../assets/images/img6.png"),
//   require("../assets/images/img7.png"),
//   require("../assets/images/img8.png"),
//   require("../assets/images/img9.png"),
// ];

export default function Cards3() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        const movieData = await fetchPopularmovies({ query: "" });
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cards}
      horizontal={true}
    >
      {movies.slice(9).map((item, index) => (
        <TouchableOpacity key={index}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    marginRight: 25,
    borderRadius: 5,
    width: 110,
    height: 150,
  },
});
