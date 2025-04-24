import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// Nova tela
import BuscaRede from "./src/pages/buscaRede/index"; // ajuste o caminho se necessário

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0066FF" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BuscaRede" component={BuscaRede} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
