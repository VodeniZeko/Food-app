import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

const InfoBoardPhone = ({ results }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Entypo
        style={{ paddingTop: 5, color: "green", opacity: 0.4 }}
        size={30}
        name="phone"
      />

      <Entypo name="chevron-down" />
      <Text style={styles.addressInfo}>{results.display_phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressInfo: {
    // fontFamily: "Avenir-MediumOblique",
    fontSize: 15,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
export default InfoBoardPhone;