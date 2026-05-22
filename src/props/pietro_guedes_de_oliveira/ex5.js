import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export  function Botao({ titulo }) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#00a416",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: "#6b7280",
  },
});
