import { View, Text, StyleSheet } from "react-native";

export default function Exercicio02() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} >
              <Text style={styles.textStyle}>R</Text>
            </View>
            <View style={styles.box2} >
              <Text style={styles.textStyle}>G</Text>
            </View>
            <View style={styles.box3} >
              <Text style={styles.textStyle}>B</Text>
            </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    gap: 15
  },
  box1: { width: 80, height: 80, backgroundColor: "red", alignItems: "center", justifyContent: "center" },
  box2: { width: 80, height: 80, backgroundColor: "green", alignItems: "center", justifyContent: "center" },
  box3: { width: 80, height: 80, backgroundColor: "blue", alignItems: "center", justifyContent: "center" },
  textStyle: {color: "white"}
});
