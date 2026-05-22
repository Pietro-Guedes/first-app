import { View, Text, StyleSheet } from "react-native";

export default function Exercicio08() {
  return (
    <View style={styles.container}>
      
        <View style={styles.sidebar} />
      
      <View style={styles.content}>
        <View style={[styles.box, styles.card]} />
        <View style={[styles.box, styles.card2]} />
        <View style={[styles.box, styles.card3]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  sidebar: {
    width: 80,
    backgroundColor: "green",   
  },
  content:{
    padding: 10,
    gap: 20, 
    flex: 1
  },
  card: {
    flex: 1,
    backgroundColor: "red",
  },
  card2: {
    flex: 1,
    backgroundColor: "blue",
  },
  card3: {
    flex: 1,
    backgroundColor: "yellow",
  },
  textStyle: { color: "white" },
});