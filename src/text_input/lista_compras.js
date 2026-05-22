import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text, Alert, StyleSheet } from "react-native";

export default function ListaDeCompras() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarProduto() {
    // Validação
    if (produto.trim() === "" || quantidade.trim() === "") {
      Alert.alert(
        "Erro",
        "Preencha o nome do produto e a quantidade."
      );
      return;
    }

    const novoProduto = {
      id: Date.now().toString(),
      nome: produto,
      quantidade: quantidade,
    };

    setLista([...lista, novoProduto]);

    // Limpa os campos
    setProduto("");
    setQuantidade("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o produto"
        value={produto}
        onChangeText={setProduto}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Button title="Adicionar" onPress={adicionarProduto} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.quantidade}x {item.nome}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});