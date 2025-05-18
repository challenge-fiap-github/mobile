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
import { cidadesPorEstado } from '../../data/cidadesPorEstado';

export default function SelecionarCidade() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'SelecionarCidade'>>();
  const { estadoSelecionado } = route.params;

  const [search, setSearch] = useState('');

  const cidadesFiltradas = useMemo(() => {
    const cidades = cidadesPorEstado[estadoSelecionado] || [];
    return cidades.filter(cidade => cidade.toLowerCase().includes(search.toLowerCase()));
  }, [estadoSelecionado, search]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSelecionarCidade = (cidade: string) => {
    navigation.navigate('BuscarLocalidade', {
      estadoSelecionado,
      cidadeSelecionada: cidade,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selecione a Cidade</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../assets/searchGame.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="Procurar por Cidade"
          placeholderTextColor="#9A9A9A"
          style={styles.inputSearch}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={cidadesFiltradas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelecionarCidade(item)} style={styles.cidadeContainer}>
            <Text style={styles.cidadeText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
