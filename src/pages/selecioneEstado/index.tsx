// index.tsx (SelecionarEstado)
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const estados = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export default function SelecionarEstado() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');

  const estadosFiltrados = estados.filter(sigla => sigla.toLowerCase().includes(search.toLowerCase()));

  const handleSelectEstado = (sigla: string) => {
    navigation.navigate('BuscarLocalidade', { estadoSelecionado: sigla });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selecione o Estado</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../assets/searchGame.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="Procurar por Estado"
          placeholderTextColor="#9A9A9A"
          style={styles.inputSearch}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={estadosFiltrados}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.estadoContainer} onPress={() => handleSelectEstado(item)}>
            <Text style={styles.estadoText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
