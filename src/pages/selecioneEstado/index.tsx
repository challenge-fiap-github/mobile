// index.tsx
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

const estados = [
  'AC', 'AL', 'AM', 'AP',
  'BA',
  'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB',
  'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export default function SelecionarEstado() {
  const [search, setSearch] = useState('');

  const estadosFiltrados = estados.filter(estado => estado.toLowerCase().includes(search.toLowerCase()));

  const agruparPorLetra = () => {
    const agrupados: { [key: string]: string[] } = {};
    estadosFiltrados.forEach(sigla => {
      const letra = sigla[0];
      if (!agrupados[letra]) agrupados[letra] = [];
      agrupados[letra].push(sigla);
    });
    return agrupados;
  };

  const agrupados = agruparPorLetra();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selecione o Estado</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Campo de Pesquisa */}
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

      {/* Lista de Estados */}
      <FlatList
        data={Object.keys(agrupados)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionHeader}>{item}</Text>
            {agrupados[item].map((estado) => (
              <View key={estado} style={styles.estadoContainer}>
                <Text style={styles.estadoText}>{estado}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}
