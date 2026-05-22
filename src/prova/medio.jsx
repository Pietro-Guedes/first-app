import { View, StyleSheet, Text } from "react-native";

export default function Medio() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Promoção</Text>
      </View>

      <View style={styles.corpo}>

        

        <View style={styles.areaPrincipal}>
         

          <View style={styles.superior}>
            <View style={[styles.card, styles.cardA]}>
              <Text style={styles.text}>Card A</Text>
            </View>

            <View style={[styles.card, styles.cardB]}>
              <Text style={styles.text}>Card B</Text>
            </View>

            
            <View style={[styles.card, styles.cardC]}>
              <Text style={styles.text}>Card B</Text>
            </View>

          </View>

          <View style={styles.divisoria}>
            <Text style={styles.text}>Destaque</Text>
          </View>

          <View style={styles.inferior}>

            <View style={[styles.card,styles.cardD]}>
              <Text style={styles.text}>Cat 1</Text>
            </View>

            <View style={[styles.card,styles.cardE]}>
              <Text style={styles.text}>Cat 2</Text>
            </View>

            <View style={[styles.card,styles.cardF]}>
              <Text style={styles.text}>Cat 3</Text>
            </View>

          </View>

        </View>

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
    backgroundColor: '#ecf0f1'
  },

  header: {
    height: 80,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },

  corpo: {
    flex: 1,
    flexDirection: 'row',
  },



  areaPrincipal: {
    flex: 1,
    flexDirection: "colunm",
    gap:8
  },


  superior: {
    height: 150,
    flexDirection: "row",
    gap: 8, 
  },

  divisoria: {
    flex: 1,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    gap: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inferior: {
    flexDirection: "row",
    height: 100,
    borderRadius: 8,
    gap: 8,
    
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardA: {
    flex: 1,
    backgroundColor: "#2ecc71",
    borderRadius: 8,
  
  },

  cardB: {
    flex: 1,
    backgroundColor: "#3498db",
    borderRadius: 8,
   
  },

  cardC: {
    flex: 2,
    backgroundColor: '#f39c12',
    borderRadius: 8,
    
  },

  cardD: {
    flex: 1,
    backgroundColor: "#9b59b6",
    borderRadius: 8,
  },

  cardE: {
    flex: 1,
    backgroundColor: "#1abc9c",
    borderRadius: 8
  },

  cardF: {
    flex: 1,
    backgroundColor: "#e67e22",
    borderRadius: 8
  },

 

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
