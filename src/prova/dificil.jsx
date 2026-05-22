import { View, StyleSheet, Text } from "react-native";

export default function Dificil() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>HEADER</Text>
      </View>

      <View style={styles.corpo}>

        <View style={styles.sidebar} >
          <Text style={styles.text}>Sidebar</Text>
        </View>

        <View style={styles.areaPrincipal}>
         

          <View style={styles.superior}>
            <View style={[styles.card, styles.cardA]}>
              <Text style={styles.text}>Card A</Text>
            </View>

            <View style={[styles.card, styles.cardB]}>
              <Text style={styles.text}>Card B</Text>
            </View>

          </View>

          <View style={styles.divisoria}/>

          <View style={styles.inferior}>

            <View style={[styles.card,styles.cardC]}>
              <Text style={styles.text}>C</Text>
            </View>

            <View style={[styles.card,styles.cardD]}>
              <Text style={styles.text}>Card D</Text>
            </View>

            <View style={[styles.card,styles.cardE]}>
              <Text style={styles.text}>E</Text>
            </View>

          </View>

        </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>FOOTER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    padding: 8,
    gap: 8,
    backgroundColor: '#1a1a1a'
  },

  header: {
    height: 60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },

  corpo: {
    flex: 1,
    flexDirection: 'row'
  },

  sidebar: {
    width: 80,
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },

  areaPrincipal: {
    flex: 1,
    flexDirection: "colunm",
    gap: 8,
    padding: 8
  },

  superior: {
    flex: 1,
    flexDirection: "row",
    gap: 8
  },

  divisoria: {
    height: 8,
    backgroundColor: "#34495e",
    gap: 8,
    padding: 8,
    borderRadius: 8
  },

  inferior: {
    flexDirection: "row",
    flex: 1,
    borderRadius: 8,
    gap: 8
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardA: {
    flex: 1,
    backgroundColor: "green",
    borderRadius: 8
  },

  cardB: {
    flex: 1,
    backgroundColor: "blue",
    borderRadius: 8
  },

  cardC: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 8
    
  },

  cardD: {
    flex: 2,
    backgroundColor: "orange",
    borderRadius: 8
  },

  cardE: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 8
  },

  footer: {
    height: 50,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
