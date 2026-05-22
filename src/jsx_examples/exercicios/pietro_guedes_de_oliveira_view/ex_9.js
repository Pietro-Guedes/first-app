import { View, Text, StyleSheet } from "react-native";

export default function Exercicio09() {
  return (
    <View style={styles.container}>

      <View style={styles.semaforo}>
        <View style={[styles.luz, styles.card]} />
        <View style={[styles.luz, styles.card2]} />
        <View style={[styles.luz, styles.card3]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  semaforo: {
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    borderRadius: 20,
    height: 300,
    backgroundColor: "black"
  },
  luz:{
    width: 80,
    height: 80,
    borderRadius: 40
  },
  card: {

    backgroundColor: "red",
  },
  card2: {
    
    backgroundColor: "yellow",
  },
  card3: {
   
    backgroundColor: "green",
  },
  textStyle: { color: "white" },
});