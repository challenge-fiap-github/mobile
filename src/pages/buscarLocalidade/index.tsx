// index.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from './style';

export default function BuscarLocalidade() {
  return (
    <View style={styles.container}>
      {/* Header com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pesquisar por localidade</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Área de busca */}
      <View style={styles.searchBox}>
        <View style={styles.searchHeader}>
          <Image source={require('../../assets/searchIcon.png')} style={styles.searchIcon} />
          <Text style={styles.searchTitle}>Selecione a localidade desejada nos campos abaixo</Text>
        </View>

        {/* Campos de entrada */}
        <Text style={styles.inputLabel}>Estado</Text>
        <TextInput
          placeholder="Selecione o Estado"
          placeholderTextColor="#9A9A9A"
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Cidade</Text>
        <TextInput
          placeholder="Selecione o Cidade"
          placeholderTextColor="#9A9A9A"
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Bairro</Text>
        <TextInput
          placeholder="Selecione o Bairro"
          placeholderTextColor="#9A9A9A"
          style={styles.input}
        />

        {/* Botão Buscar */}
        <TouchableOpacity style={styles.buttonBuscar}>
          <Text style={styles.buttonBuscarText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
