import { View, Text, StyleSheet } from "react-native";

export default function Exercicio04() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} >
        <Text style={styles.textStyle}>Centro</Text>
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
    gap: 15,
    justifyContent: "center",
    alignItems: 'center'
  },
  box1: { width: 70, height: 70, backgroundColor: "#eeb310", alignItems: "center", justifyContent: "center" },
  textStyle: {color: "white"}
});
