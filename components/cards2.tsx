import { fetchGenres, fetchPopularmovies } from "@/services/api";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cards2() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
   const [genres, setGenres] = useState<any[]>([]);

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

  if (loading) {
    return (
      <View
        style={{ height: 160, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#A15AE1" />
      </View>
    );
  }


    const getGenreNames = (ids: number[]) => {
      return ids
        .map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .slice(0, 2);
    };
  
    if (loading) {
      return (
        <ActivityIndicator size="large" color="purple" style={{ flex: 1 }} />
      );
    }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} // horizontal, so no vertical indicator
      contentContainerStyle={styles.cards}
    >
      {movies.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() =>
            router.push({
              pathname: "/(link)/moviedetail",
              params: {
                id: item.id.toString(),
                name: item.title,
                poster: item.poster_path, // main image
                genre_ids: JSON.stringify(item.genre_ids), // pass genres
              },
            })
          }
        >
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
    paddingHorizontal: 10,
    marginTop: 20,
  },
  image: {
    marginRight: 15,
    borderRadius: 5,
    width: 110,
    height: 150,
  },
});
