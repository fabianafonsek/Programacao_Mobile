// Importando os pacotes necessários
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from "@expo/vector-icons";

// Importando as telas
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

// Declarando a função DrawerNavigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

// Expondo a função DrawerNavigator para ser acessada por outros módulos
export default DrawerNavigator;
