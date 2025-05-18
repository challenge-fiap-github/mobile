import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const coberturas = [
  { nome: 'Emergência', icon: require('../../assets/emergenciaIcon.png') },
  { nome: 'Cirurgia', icon: require('../../assets/cirurgiaIcon.png') },
  { nome: 'Diagnóstico', icon: require('../../assets/diagnosticoIcon.png') },
  { nome: 'Dentística', icon: require('../../assets/dentisticaIcon.png') },
  { nome: 'Odontopediatria', icon: require('../../assets/odontopediatriaIcon.png') },
  { nome: 'Periodontia', icon: require('../../assets/periodontiaIcon.png') },
  { nome: 'Endodontia', icon: require('../../assets/endodontiaIcon.png') },
  { nome: 'Radiologia', icon: require('../../assets/radiologiaIcon.png') },
  { nome: 'Prótese Dentária', icon: require('../../assets/proteseDentariaIcon.png') },
  { nome: 'Clínico Geral', icon: require('../../assets/clinicoGeralIcon.png') },
  { nome: 'Prevenção', icon: require('../../assets/prevencaoIcon.png') },
  { nome: 'Odontologia Legal', icon: require('../../assets/odontologiaLegalIcon.png') },
  { nome: 'Estética', icon: require('../../assets/esteticaIcon.png') },
  { nome: 'Limpeza', icon: require('../../assets/limpezaIcon.png') },
];

export default function Cobertura() {
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

      <ScrollView contentContainerStyle={styles.grid}>
        {coberturas.map((item, index) => (
          <TouchableOpacity key={index} style={styles.coberturaItem}>
            <Image source={item.icon} style={styles.coberturaIcon} />
            <Text style={styles.coberturaText}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
