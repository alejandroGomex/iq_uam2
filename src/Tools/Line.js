import React from "react";

import { View, Text } from "react-native";

export const Line = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          height: 2.5,
          backgroundColor: "#ccc",
          height: 2.5,
          marginTop:10,
          marginLeft:170,
          marginRight:170
        }}
      />
    </View>
  );
};
