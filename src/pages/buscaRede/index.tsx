// index.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';

export default function BuscaRede() {
  return (
    <View style={styles.container}>
      {/* Header azul arredondado com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Busca de rede credenciada</Text>
      </View>

      {/* Conteúdo com padding */}
      <View style={styles.content}>
        <Text style={styles.title}>Como deseja realizar a busca?</Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionCard}>
            <Image source={require('../../assets/localizacaoIcon.png')} style={styles.optionIcon} />
            <Text style={styles.optionTitle}>Próximos{"\n"}a mim</Text>
            <Text style={styles.optionDesc}>Necessário adicionar localidade nos favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Image source={require('../../assets/searchIcon.png')} style={styles.optionIcon} />
            <Text style={styles.optionTitle}>Pesquisar por{"\n"}localidade</Text>
            <Text style={styles.optionDesc}>Buscar por estado, cidade e bairro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerLabel}>Meus endereços</Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Adicionar endereços</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
