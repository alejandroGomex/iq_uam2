import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const CheckBox = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={styles.title}>
        Acepto terminos y {"\n"}
        tratamiento de datos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 80,
    marginVertical: 3,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 13,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "gray",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 50,
    textAlign: "center",
  },
  checkbox: {
    marginLeft:130,
  },
});
