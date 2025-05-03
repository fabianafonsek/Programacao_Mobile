// routes/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RecoverScreen from '../screens/RecoverScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="RecuperarSenha"
        component={RecoverScreen}
        options={{ title: 'Recuperar Senha' }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
