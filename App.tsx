import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// Telas
import Home from "./src/pages/home";
import BuscaRede from "./src/pages/buscaRede";
import Game from "./src/pages/game";
import Agendamento from "./src/pages/agendamento";
import Cobertura from "./src/pages/cobertura";
import FaleConosco from "./src/pages/faleConosco";
import DadosPessoais from "./src/pages/dadosPessoais";
import BuscarLocalidade from "./src/pages/pesquisaLocalidade";
import SelecionarCidade from "./src/pages/selecioneCidade";
import SelecionarEstado from './src/pages/selecioneEstado';



import { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0066FF" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BuscaRede" component={BuscaRede} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Cobertura" component={Cobertura} />
        <Stack.Screen name="FaleConosco" component={FaleConosco} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoais} />
        <Stack.Screen name="BuscarLocalidade" component={BuscarLocalidade} />
        <Stack.Screen name="SelecionarEstado" component={SelecionarEstado} />
        <Stack.Screen name="SelecionarCidade" component={SelecionarCidade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
