import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

export default function AgendamentoConsulta() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agendamento de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.buttonRow}>
        {/* Botão 1: Próximos a mim */}
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => navigation.navigate('AgendamentoBusca')}
        >
          <Image source={require('../../assets/proximosIcon.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>Próximos{'\n'}a mim</Text>
          <Text style={styles.cardSubtitle}>
            Necessário{'\n'}localizador ativo no{'\n'}seu aparelho
          </Text>
        </TouchableOpacity>

        {/* Botão 2: Pesquisar por localidade */}
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => navigation.navigate('AgendamentoBusca')}
        >
          <Image source={require('../../assets/localidadeIcon.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>Pesquisar por{'\n'}localidade</Text>
          <Text style={styles.cardSubtitle}>
            Buscar por estado e{'\n'}região específica
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
