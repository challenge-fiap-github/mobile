import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function FaleConosco() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cobertura e carência</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Card 1 */}
        <View style={styles.cardButton}>
          <Text style={styles.cardText}>
            Central de atendimento e relacionamento{"\n"}0800 702 9000
          </Text>
        </View>
        <Text style={styles.cardInfo}>
          Informações gerais, solicitações e dúvidas{"\n"}Horário de atendimento:
        </Text>
        <Text style={styles.cardHorario}>
          Todos os dias{"\n"}
          <Text style={styles.bold}>24h</Text>
        </Text>

        {/* Card 2 */}
        <View style={styles.cardButton}>
          <Text style={styles.cardText}>
            Serviços de atendimento ao consumidor{"\n"}0800 702 2255
          </Text>
        </View>
        <Text style={styles.cardInfo}>
          Prioritariamente para cancelamentos, reclamações{"\n"}e informações institucionais{"\n"}Horário de atendimento:
        </Text>
        <Text style={styles.cardHorario}>
          Todos os dias{"\n"}
          <Text style={styles.bold}>24h</Text>
        </Text>

        {/* Card 3 */}
        <View style={styles.cardButton}>
          <Text style={styles.cardText}>
            Deficiência auditiva ou de fala{"\n"}0800 722 2191
          </Text>
        </View>
        <Text style={styles.cardInfo}>Horário de atendimento:</Text>
        <Text style={styles.cardHorario}>
          Todos os dias{"\n"}
          <Text style={styles.bold}>24h</Text>
        </Text>

        {/* Card 4 */}
        <View style={styles.cardButton}>
          <Text style={styles.cardText}>Ouvidoria{"\n"}0800 721 6378</Text>
        </View>
        <Text style={styles.cardInfo}>Horário de atendimento:</Text>
        <Text style={styles.cardHorario}>
          de segunda a sexta-feira{"\n"}
          <Text style={styles.bold}>8:00h - 18:00h</Text>
        </Text>
      </ScrollView>
    </View>
  );
}
