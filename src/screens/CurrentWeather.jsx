import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome5 name="cloud-sun" size={100} color="yellow" />
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginLeft: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    color: "blue",
    fontSize: 30,
  },
});

export default CurrentWeather;
