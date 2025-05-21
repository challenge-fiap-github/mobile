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

export default function OdontoGame() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  const handleGoToTarefasDiarias = () => {
    navigation.navigate('TarefasDiarias');
  };

  return (
    <View style={styles.container}>
      {/* Header com ícone de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Odonto Game</Text>

        <View style={{ width: 22 }} /> {/* Mantém o título centralizado */}
      </View>

      {/* Pontuação */}
      <Text style={styles.scoreText}>
        Pontuação: <Text style={styles.scoreX}>X X X</Text>
      </Text>

      {/* Botões principais */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.menuButton} onPress={handleGoToTarefasDiarias}>
          <Image source={require('../../assets/tarefaIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Tarefas diárias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/consultaIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/indiqueIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Indique e ganhe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/premioIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Premiações</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Tutorial */}
      <TouchableOpacity style={styles.tutorialButton}>
        <Text style={styles.tutorialText}>Tutorial</Text>
      </TouchableOpacity>
    </View>
  );
}
