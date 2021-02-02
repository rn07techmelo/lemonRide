import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ListView from "./Component/UI/ListView/";

import styles from "./styles";

class Store extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView />
      </View>
    );
  }
}

export default Store;
