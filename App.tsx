import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// Importa a nova tela do Odonto Game
import OdontoGame from "./src/pages/game/index"; // ajuste o caminho se necessário

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0066FF" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OdontoGame" component={OdontoGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
