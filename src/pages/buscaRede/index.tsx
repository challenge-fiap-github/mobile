import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

export default function BuscaRede() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.navigate({ name: 'Home', params: undefined });

  };

  const handlePesquisarLocalidade = () => {
    navigation.navigate({ name: 'BuscarLocalidade', params: {} });
  };

  return (
    <View style={styles.container}>
      {/* Header azul arredondado com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Busca de rede credenciada</Text>

        {/* Espaçador com a mesma largura do ícone de voltar */}
        <View style={{ width: 30 }} />
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

          <TouchableOpacity style={styles.optionCard} onPress={handlePesquisarLocalidade}>
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
