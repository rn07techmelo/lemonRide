import styles from "./styles";
import React from "react";
import { Text, View, FlatList } from "react-native";

let data = [
  {
    id: 1,
    name: "Brake",
  },
  {
    id: 2,
    name: "Chain",
  },
  {
    id: 3,
    name: "Air Pressure",
  },
  {
    id: 4,
    name: "Wheel Alignment",
  },
];

const ListView = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={{ textAlign: "center", top: 10 }}>
          Buy amazing product from our store!
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.mainFlatlistContainer}>
            <View style={styles.storeCard}>
              <Text>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListView;
