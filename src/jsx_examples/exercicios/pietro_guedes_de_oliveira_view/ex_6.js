import { View, Text, StyleSheet } from "react-native";


export default function Exercicio06() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.textStyle}>Conteudo</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textStyle}>footer</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {color: "white"}
});