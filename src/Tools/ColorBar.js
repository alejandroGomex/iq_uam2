import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ColorBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-uam.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#0069a3",
    justifyContent: "center",
  },
  logo: {
    width: 145,
    height: 70,
    flex: 1,
    marginLeft: 120,
  },
});

export default ColorBar;
