import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  mainFlatlistContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  storeCard: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    marginTop: 5,
    bottom: 5,
    top: 5,
  },
});

export default styles;
