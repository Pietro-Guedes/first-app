import { FlatList, View } from "react-native";

export default function FlatListExemplo() {
  const alunos = [
    { id: "1", nome: "João", nota: 7.5 },
    { id: "2", nome: "Ana", nota: 9.0 },
    { id: "3", nome: "Carlos", nota: 6.8 },
    { id: "4", nome: "Fernanda", nota: 8.7 },
    { id: "5", nome: "Lucas", nota: 7.9 },
    { id: "6", nome: "Beatriz", nota: 9.5 },
    { id: "7", nome: "Rafael", nota: 5.4 },
    { id: "8", nome: "Juliana", nota: 8.1 },
    { id: "9", nome: "Maria", nota: 8.3 },
    { id: "10", nome: "Pedro", nota: 6.9 },
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>FlatList</Text>
        <View style={styles.exemploLista}>
            <Text style={styles.subtitulo}>FlatList</Text>
            <FlatList
            data={alunos}
            keyExtractor={(item) => item.id}>
            renderItem={({ item: aluno})  => {
                <CardItem nome={aluno.nome} nota={aluno.nota} />
            }}
            ListEmptyComponent={<Text>A lista está vazia</Text>}
            scrollEnabled={true}
            </FlatList>
        </View>
    </View>
  );
}
