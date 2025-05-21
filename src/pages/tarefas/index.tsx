import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

export default function TarefasDiarias() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.navigate('OdontoGame');
  };

  const handleChecklistDiarioPress = () => {
    navigation.navigate('ChecklistDiario');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tarefas diárias</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Card do usuário (exemplo) */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Nome</Text>
          <Text style={styles.userScore}>Pontuação: xxxxx</Text>
        </View>
        <View style={styles.profileCircle}>
          <Image
            source={require('../../assets/fotoPerfil.png')}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cardButton} onPress={handleChecklistDiarioPress}>
          <Image
            source={require('../../assets/checklist.png')}
            style={styles.iconButton}
          />
          <Text style={styles.textButton}>Checklist{'\n'}diário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton}>
          <Image
            source={require('../../assets/semanal.png')}
            style={styles.iconButton}
          />
          <Text style={styles.textButton}>Checklist{'\n'}semanal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
