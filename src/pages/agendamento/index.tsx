import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types'; // ajuste o caminho se estiver diferente
import styles from './style';

export default function Agendamento() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agendamentos</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Selecione uma opção</Text>

        {/* Card 1 - NAVEGAÇÃO FUNCIONAL */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('AgendamentoConsulta')}
        >
          <View style={styles.cardLeft}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/agendarIcon.png')}
                style={styles.cardIcon}
              />
            </View>
            <View>
              <Text style={styles.cardTitle}>Agendar primeira{'\n'}consulta de avaliação</Text>
              <Text style={styles.cardSubtitle}>Consulta inicial com o dentista para{'\n'}avaliação</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.cardLeft}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/meusAgendamentosIcon.png')}
                style={styles.cardIcon}
              />
            </View>
            <View>
              <Text style={styles.cardTitle}>Meus agendamentos</Text>
              <Text style={styles.cardSubtitle}>Acompanhe seus agendamentos</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
