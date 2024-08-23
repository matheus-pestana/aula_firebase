import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RealizarLogin from './src/pages/realizarLogin';
import PaginaPrincipal from './src/pages/paginaPrincipal';
import ListaJogadores from './src/pages/listaJogadores';

const Stack = createNativeStackNavigator();

const App = () => (

  <NavigationContainer>
    <Stack.Navigator initialRouteName="RealizarLogin"
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="RealizarLogin" component={RealizarLogin}/>
      <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal}/>
      <Stack.Screen name="ListaJogadores" component={ListaJogadores}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;