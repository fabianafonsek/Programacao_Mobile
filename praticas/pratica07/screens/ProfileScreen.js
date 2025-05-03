// Importando os pacotes necessários
import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

// Declarando a função ProfileScreen com o parâmetro navigation
function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Exibindo a imagem do perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://via.placeholder.com/100" }} // Usando uma imagem de exemplo
        />
      </View>

      {/* Exibindo as informações do usuário */}
      <Text style={styles.name}>João da Silva</Text>
      <Text style={styles.email}>joao.silva@email.com.br</Text>
      <Text style={styles.phone}>(61) 99999-9999</Text>

      {/* Botão para editar perfil */}
      <View style={styles.editProfileContainer}>
        <Button
          title="Editar Perfil"
          onPress={() => {
            // Ação para editar perfil, você pode adicionar a navegação ou funcionalidade desejada
            alert("Função de editar perfil ainda não implementada");
          }}
        />
      </View>
    </View>
  );
}

// Estilos para a tela de perfil
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    marginBottom: 20,
  },
  editProfileContainer: {
    width: "100%",
    marginTop: 20,
  },
});

// Expondo a função ProfileScreen para ser acessada por outros módulos
export default ProfileScreen;
