// Importando os pacotes necessários
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Declarando a função CallScreen com o parâmetro navigation
function CallScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.call}>
        <Text style={styles.user}>👤 Campos Sales</Text>
        <Text style={styles.time}>28/02/2024 12:03</Text>
        <Text style={styles.icon}>📞</Text>
      </View>

      <View style={styles.call}>
        <Text style={styles.user}>👤 Rui Barbosa</Text>
        <Text style={styles.time}>04/12/2023 21:10</Text>
        <Text style={styles.icon}>📞</Text>
      </View>
    </ScrollView>
  );
}

// Estilos para a tela de chamadas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  call: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  user: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
  },
});

// Expondo o CallScreen para ser acessado por outros módulos
export default CallScreen;
