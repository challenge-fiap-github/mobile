import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './style';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

// Exemplo de dados de bairros
const bairrosPorCidade: Record<string, string[]> = {
  'São Paulo': ['Aclimação', 'Bela Vista', 'Mooca', 'Tatuapé', 'Itaquera'],
  'Campinas': ['Cambuí', 'Taquaral', 'Barão Geraldo'],
  'Rio de Janeiro': ['Copacabana', 'Botafogo', 'Tijuca'],
};

export default function SelecionarBairro() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'SelecionarBairro'>>();
  const { cidadeSelecionada, estadoSelecionado } = route.params;

  const [search, setSearch] = useState('');

  const bairrosFiltrados = useMemo(() => {
    const bairros = bairrosPorCidade[cidadeSelecionada] || [];
    return bairros.filter(bairro =>
      bairro.toLowerCase().includes(search.toLowerCase())
    );
  }, [cidadeSelecionada, search]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSelecionarBairro = (bairro: string) => {
    navigation.navigate('BuscarLocalidade', {
      estadoSelecionado,
      cidadeSelecionada,
      bairroSelecionado: bairro,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selecione o Bairro</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/searchGame.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Procurar por Bairro"
          placeholderTextColor="#9A9A9A"
          style={styles.inputSearch}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={bairrosFiltrados}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelecionarBairro(item)}
            style={styles.cidadeContainer}
          >
            <Text style={styles.cidadeText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
