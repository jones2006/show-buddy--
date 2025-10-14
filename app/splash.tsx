import { Text, View, StyleSheet, Image, TouchableOpacity,StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.container}>
          <Image
            source={require("../assets/homeicons/splash.png")}
            style={styles.splashimg}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/splash2")}
          >
            <Text style={styles.btntxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  splashimg: {
    width: 169,
    height: 167,
    margin: "auto",
    marginTop: "65%",
  },
  btn: {
    marginBottom: "25%",
    backgroundColor: "#7F28C8",
    width: "90%",
    height: "7%",
    borderRadius: 25,
    position: "relative",
    top: "10%",
    left: "5%",
  },
  btntxt: {
    color: "white",
    position: "absolute",
    top: "25%",
    left: "40%",
    fontSize: 20,
  },
});
