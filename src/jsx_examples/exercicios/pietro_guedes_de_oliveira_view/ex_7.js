import { View, Text, StyleSheet } from "react-native";

export default function Exercicio07() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, styles.green]} />
        <View style={[styles.box, styles.red]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.yellow]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1
  },

  row: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    gap: 20,
  },
  green: {
    backgroundColor: "green",
  },
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
  yellow: {
    backgroundColor: "yellow",
  },
  textStyle: { color: "white" },
});
