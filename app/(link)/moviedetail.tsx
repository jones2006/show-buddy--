import { fetchMovieCredits } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const imageMap: Record<number, any> = {
  2: require("../../assets/images/img2.png"),
  1: require("../../assets/images/img1.png"),
  3: require("../../assets/images/img3.png"),
  4: require("../../assets/images/img4.png"),
  5: require("../../assets/images/img5.png"),
  6: require("../../assets/images/img6.png"),
  7: require("../../assets/images/img7.png"),
  8: require("../../assets/images/img8.png"),
  9: require("../../assets/images/img9.png"),
};

export default function moviedetail() {
  const { id, name, type1, type2, poster } = useLocalSearchParams();
  const movieId = Number(id); // assign to local or this file variable
  // const imageSrc = imageMap[movieId]; // then assign the local into a local image variable array and use
  const [cast, setCast] = useState<any[]>([]);
  const [crew, setCrew] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCredits = async () => {
      try {
        const data = await fetchMovieCredits(id as string);
        setCast(data.cast.slice(0, 10)); // top 10 cast
        setCrew(data.crew.slice(0, 5)); // top 5 crew
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadCredits();
  }, [id]);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#A15AE1" style={{ flex: 1 }} />
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              backgroundColor: "#7F28C8",
              width: "10%",
              height: 40,
              borderRadius: 50,
              position: "absolute",
              top: 25,
              left: 25,
              zIndex: 10,
            }}
            onPress={() => {
              router.push("/(tabs)/Home");
            }}
          >
            <Image
              source={require("@/assets/images/chevron.png")}
              style={{
                position: "relative",
                top: 12,
                left: 16,
                width: 9,
                height: 14,
              }}
            />
          </TouchableOpacity>
          <Image
            source={
              poster
                ? { uri: `https://image.tmdb.org/t/p/w500${poster}` } // poster display
                : require("../../assets/homeicons/placeholder.png") // offline placeholder
            }
            style={styles.img}
          />
          <View style={styles.movdetail}>
            <Text style={styles.movname}>{name}</Text>
            <Text style={styles.movtype}>2D</Text>
          </View>
        </View>
        <View style={styles.castWrapper}>
          <Text style={styles.castHeading}>Cast & Crew</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cast.map((c) => (
              <View key={c.id} style={styles.person}>
                <Image
                  source={
                    c.profile_path
                      ? {
                          uri: `https://image.tmdb.org/t/p/w200${c.profile_path}`,
                        }
                      : require("../../assets/homeicons/placeholder.png")
                  }
                  style={styles.castImg}
                />
                <Text style={styles.personName}>{c.name}</Text>
                <Text style={styles.character}>{c.character}</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: "#7F28C8",
              width: "100%",
              height: 50,
              borderRadius: 10,
              marginTop: 25,
            }}
            onPress={() => {
              router.replace("/(tabs)/Home");
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 16,
                position: "absolute",
                top: "27%",
                left: "35%",
              }}
            >
              Continue to watch
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "black",
  },
  img: {
    width: "100%",
    height: 520,
    borderRadius: 10,
    resizeMode: "cover",
  },
  movname: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 15,
  },
  movtype: {
    color: "white",
    borderColor: "white",
    width: 30,
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
    paddingHorizontal: 25,
  },
  movdetail1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 25,
    marginTop: 10,
    paddingHorizontal: 25,
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

  // 🆕 Cast & Crew section
  castWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  castHeading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  castImg: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10,
  },
  person: {
    alignItems: "center",
    marginRight: 15,
  },
  personName: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  character: {
    color: "#ccc",
    fontSize: 10,
    textAlign: "center",
  },
});
