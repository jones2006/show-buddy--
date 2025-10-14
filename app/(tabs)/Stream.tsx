import Headermenu from "@/components/Header";
import { fetchPopularmovies } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const image = [
  require("../../assets/images/Search 01.png"),
  require("../../assets/images/download.png"),
  require("../../assets/images/user_icon.png"),
];

export default function Profile() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { id, name, type1, type2, poster } = useLocalSearchParams();

  const handleSearch = async (text: string) => {
    setQuery(text);

    if (text.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const movies = await fetchPopularmovies({ query: text });
      setResults(movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Headermenu showHamburger={true} />
        <View style={styles.searchbarbtn}>
          <View style={styles.input}>
            <Image source={image[0]} />
            <TextInput
              placeholder="Search a movie/series"
              placeholderTextColor={"white"}
              style={{ color: "white" }}
              value={query}
              onChangeText={handleSearch}
            />
          </View>
        </View>

        {/* Loading Indicator */}
        {loading && (
          <ActivityIndicator
            size="large"
            color="#A15AE1"
            style={{ marginTop: 20 }}
          />
        )}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20, paddingLeft: 10 }}
        >
          {results.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ marginRight: 15 }}
              onPress={() =>
                router.push({
                  pathname: "/(link)/moviedetail",
                  params: {
                    id: item.id.toString(),
                    name: item.title,
                    poster: item.poster_path,
                  },
                })
              }
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={{ width: 110, height: 150, borderRadius: 5 }}
              />
              <Text
                style={{
                  color: "white",
                  width: 110,
                  textAlign: "center",
                  marginTop: 5,
                }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  searchbarbtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
    bottom: "1%",
  },
  input: {
    width: "95%",
    height: 50,
    backgroundColor: "#595656",
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 12,
    position: "relative",
    bottom: "1%",
  },
  button: {
    backgroundColor: "#7F28C8",
    width: 100,
    height: 50,
    borderRadius: 10,
    // position: "absolute",
    // top: "9.4%",
    // left: "72%",
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 16,
  },
  texts: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    bottom: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  text1: {
    fontWeight: "bold",
    color: "#A15AE1",
    fontSize: 17,
  },
  text2: {
    fontWeight: "bold",
    color: "#A15AE1",
    fontSize: 17,
  },
  cards: {
    position: "relative",
    left: 10,
  },
  texts1: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  text11: {
    fontWeight: "bold",
    color: "#A15AE1",
    fontSize: 17,
  },
  text21: {
    fontWeight: "bold",
    color: "#A15AE1",
    fontSize: 17,
  },
});
