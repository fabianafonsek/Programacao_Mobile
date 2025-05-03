// Importando os pacotes necessários
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Declarando a função HomeScreen com o parâmetro navigation
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
      <Text style={styles.subtitle}>
        Navegue pelo menu lateral para acessar seu perfil.
      </Text>
    </View>
  );
}

// Estilos para a tela de Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});

// Expondo o HomeScreen para ser acessado por outros módulos
export default HomeScreen;
