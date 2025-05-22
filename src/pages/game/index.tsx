import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

export default function OdontoGame() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    const loadPoints = async () => {
      const stored = await AsyncStorage.getItem('GamePoints');
      const parsed = stored ? parseInt(stored, 10) : 0;
      setPontos(parsed);
    };

    const unsubscribe = navigation.addListener('focus', loadPoints);
    loadPoints();
    return unsubscribe;
  }, [navigation]);

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  const handleGoToTarefasDiarias = () => {
    navigation.navigate('TarefasDiarias');
  };

  const handleGoToQuiz = () => {
    navigation.navigate('Quiz');
  };

  const handleGoToConsultas = () => {
    navigation.navigate('Consulta');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Odonto Game</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/homeIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Pontuação com ícone */}
      <View style={styles.scoreRow}>
        <Image source={require('../../assets/odontoCoin.png')} style={styles.coinIcon} />
        <Text style={styles.scoreX}>{pontos} pontos</Text>
      </View>

      {/* Botões principais */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.menuButton} onPress={handleGoToTarefasDiarias}>
          <Image source={require('../../assets/tarefaIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Tarefas diárias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={handleGoToConsultas}>
          <Image source={require('../../assets/consultaIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={handleGoToQuiz}>
          <Image source={require('../../assets/quizIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Quiz</Text>
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
