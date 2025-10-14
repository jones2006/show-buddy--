import { fetchGenres, fetchPopularmovies } from "@/services/api";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const images = [
  require("@/assets/images/img1.png"),
  require("@/assets/images/img2.png"),
  require("@/assets/images/img3.png"),
  require("@/assets/images/img4.png"),
];

export default function cards() {
  // const clickimg = [
  //   {
  //     id: 1,
  //     src: require("../assets/images/img1.png"),
  //     name: "Thuppaki",
  //     type1: "Action",
  //     type2: "Military",
  //   },
  //   {
  //     id: 2,
  //     src: require("../assets/images/img2.png"),
  //     name: "Sultan",
  //     type1: "Action",
  //     type2: "Drama",
  //   },
  //   {
  //     id: 3,
  //     src: require("../assets/images/img3.png"),
  //     name: "Vaazhai",
  //     type1: "Sad",
  //     type2: "Unity",
  //   },
  //   {
  //     id: 4,
  //     src: require("../assets/images/img4.png"),
  //     name: "Comali",
  //     type1: "comedy",
  //     type2: "fantasy",
  //   },
  //   {
  //     id: 5,
  //     src: require("../assets/images/img5.png"),
  //     name: "INN",
  //     type1: "sci-fi",
  //     type2: "fantasy",
  //   },
  //   {
  //     id: 6,
  //     src: require("../assets/images/img6.png"),
  //     name: "Ethirneeechal",
  //     type1: "Comedy",
  //     type2: "Drama",
  //   },
  //   {
  //     id: 7,
  //     src: require("../assets/images/img7.png"),
  //     name: "Avan-Ivan",
  //     type1: "Comedy",
  //     type2: "Action",
  //   },
  //   {
  //     id: 8,
  //     src: require("../assets/images/img8.png"),
  //     name: "Chennai-62",
  //     type1: "Comedy",
  //     type2: "Action",
  //   },
  //   {
  //     id: 9,
  //     src: require("../assets/images/img9.png"),
  //     name: "maan-karathe",
  //     type1: "Comedy",
  //     type2: "Action",
  //   },
  // ];

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<any[]>([]);

  // 👇 Fetch movies and genres
  useEffect(() => {
    const loadData = async () => {
      try {
        const movieData = await fetchPopularmovies({ query: "" });
        const genreData = await fetchGenres();
        setMovies(movieData);
        setGenres(genreData);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // 👇 genre ID to name
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
    <ScrollView horizontal={true}>
      <View style={styles.cards}>
        {movies.slice(1).map((item, index) => {
          const genreNames = getGenreNames(item.genre_ids);
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                router.push({
                  pathname: "/(link)/moviedetail",
                  params: {
                    id: item.id.toString(),
                    name: item.title,
                    type1: genreNames[0] || "movie",
                    type2: genreNames[1] || "movie",
                    poster: item.poster_path,
                  },
                })
              }
            >
              <Image
                source={{
                  uri: item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/185x260.png?text=No+Image",
                }}
                style={styles.card}
              />
              <View style={styles.movdetail}>
                <Text style={styles.movname}>{item.title}</Text>
              </View>
              <View style={styles.movdetail1}>
                <Text style={styles.movtype1}>{genreNames[0]}</Text>
                <Text style={styles.movtype2}>{genreNames[1]}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
  },
  card: {
    width: 185,
    height: 260,
    borderRadius: 10,
  },
  movname: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
    width: 175,
  },
  movtype: {
    color: "white",
    borderColor: "white",
    width: 20,
    height: 20,
    borderWidth: 1,
    fontSize: 13,
    borderRadius: 6,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
  movdetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    // width: "100%",
  },
  movdetail1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 25,
    paddingHorizontal: 5,
  },
  movtype1: {
    color: "white",
    borderColor: "white",
    width: 65,
    height: 20,
    borderWidth: 1,
    fontSize: 13,
    borderRadius: 6,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  movtype2: {
    color: "white",
    borderColor: "white",
    width: 65,
    height: 20,
    borderWidth: 1,
    fontSize: 13,
    borderRadius: 6,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    position: "relative",
    bottom: 3.5,
  },
});
