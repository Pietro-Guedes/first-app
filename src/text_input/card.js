export default function CardItem ({nome,nota}) {
    return (
        <View style={StyleSheet.linha}>
            <Text>{nome}</Text>
            <Text>{nota}</Text>
        </View>
    )
}