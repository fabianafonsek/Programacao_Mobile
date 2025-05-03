// Importando os pacotes necessários
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Declarando a função ChatScreen com o parâmetro navigation
function ChatScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.user}>👤 Ana Souza</Text>
        <Text style={styles.time}>08:45</Text>
        <Text style={styles.text}>Oi, tudo bem?</Text>
      </View>

      <View style={styles.message}>
        <Text style={styles.user}>👤 Carlos Lima</Text>
        <Text style={styles.time}>09:30</Text>
        <Text style={styles.text}>Vamos marcar aquela reunião?</Text>
      </View>

      <View style={styles.message}>
        <Text style={styles.user}>👤 Mariana Santos</Text>
        <Text style={styles.time}>10:10</Text>
        <Text style={styles.text}>Enviei o arquivo para vc.</Text>
      </View>
    </ScrollView>
  );
}

// Estilos para a tela de chat
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  message: {
    flexDirection: "column",
    marginBottom: 20,
  },
  user: {
    fontWeight: "bold",
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  text: {
    marginTop: 5,
    fontSize: 14,
  },
});

// Expondo o ChatScreen para ser acessado por outros módulos
export default ChatScreen;
