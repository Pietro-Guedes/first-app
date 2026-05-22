import { View, StyleSheet,Text} from "react-native"

export function ExpressoesJsx() {
    const nome = "João";
    const idade = 30;
    const preco = 49.9;

    const usuario = {
        nome: "Pietro",
        cidade: "Salto",
    }
    return (
    <View style= {styles.container}>
        <Text>Expressões JSX - Exemplos</Text>
        <View>
            <Text>Nome:{nome}</Text>
            <Text>idade:{idade}</Text>
        </View>

        <View>
            <Text>Maiusculas:{nome.toUpperCase()}</Text>
            <Text>Soma:{preco*2}</Text>
        </View>

        <View>
            <Text>{usuario.nome}</Text>
            <Text>{usuario.cidade}</Text>
        </View>
    </View>
)
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",

    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exemplo: {
        width: "80%",
        pidding: 16,
        marginBottom: 16,
        backgroundColor:"#f5f5f5",
        borderRadius: 8,
    }
})