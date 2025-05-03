// Importando os pacotes necessários
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

// Importando as telas
import ChatScreen from "../screens/ChatScreen";
import CallScreen from "../screens/CallScreen";
import ContactScreen from "../screens/ContactScreen";

// Criando o TopTab Navigator
const Tab = createMaterialTopTabNavigator();

// Declarando a função TopTabNavigator
function TopTabNavigator() {
  return (
    <View style={{ flex: 1, paddingTop: 24 }}>
      <Tab.Navigator>
        <Tab.Screen name="Conversas" component={ChatScreen} />
        <Tab.Screen name="Ligações" component={CallScreen} />
        <Tab.Screen name="Contatos" component={ContactScreen} />
      </Tab.Navigator>
    </View>
  );
}

// Expondo o TopTabNavigator para ser acessado por outros módulos
export default TopTabNavigator;
