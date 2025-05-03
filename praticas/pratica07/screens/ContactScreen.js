// Importando os pacotes necessários
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Declarando a função ContactScreen com o parâmetro navigation
function ContactScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.user}>👤 Nome do Contato</Text>
        <Text style={styles.phone}>(99) 99999-9999</Text>
      </View>

      <View style={styles.contact}>
        <Text style={styles.user}>👤 Nome do Contato</Text>
        <Text style={styles.phone}>(99) 99999-9999</Text>
      </View>

      <View style={styles.contact}>
        <Text style={styles.user}>👤 Nome do Contato</Text>
        <Text style={styles.phone}>(99) 99999-9999</Text>
      </View>
    </ScrollView>
  );
}

// Estilos para a tela de contatos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contact: {
    marginBottom: 20,
  },
  user: {
    fontWeight: "bold",
    fontSize: 16,
  },
  phone: {
    fontSize: 14,
    color: "gray",
  },
});

// Expondo o ContactScreen para ser acessado por outros módulos
export default ContactScreen;
