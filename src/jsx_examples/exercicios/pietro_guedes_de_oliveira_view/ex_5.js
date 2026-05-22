import { View, Text, StyleSheet } from "react-native";

export default function Exercicio05() {
  return (
    <View style={styles.container}>
      <View style={styles.coluna01}>
        <Text style={styles.textStyle}>Coluna 1</Text>
      </View>
      <View style={styles.coluna02}>
        <Text style={styles.textStyle}>Coluna 2</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
  },
  coluna01: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  coluna02: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {color: "white"}
});
