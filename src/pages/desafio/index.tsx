import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Desafio'>;

const FOTO_KEY = 'profileImage';

export default function Desafio() {
  const navigation = useNavigation<Nav>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleBack = () => navigation.goBack();

  // Ações futuras dos cards
  const handleDesafioMes = () => {
    // Exemplo: abrir detalhes do desafio do mês
    console.log('Desafio do mês - Zero doce');
  };

  const handleDesafioSemana = () => {
    // Exemplo: mandar para checklist semanal
    // navigation.navigate('ChecklistSemanal');
    console.log('Desafio da semana - Faça o checklist');
  };

  useEffect(() => {
    const load = async () => {
      try {
        const uri = await AsyncStorage.getItem(FOTO_KEY);
        setProfileImage(uri ?? null);
      } catch {
        setProfileImage(null);
      }
    };

    const unsub = navigation.addListener('focus', load);
    load();
    return unsub;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* HEADER AZUL ESCURO */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Desafios especiais</Text>

        {/* Espaçador direita */}
        <View style={{ width: 22 }} />
      </View>

      {/* AVATAR SOBREPOSTO */}
      <View style={styles.avatarWrapper}>
        {profileImage ? (
          <Image
            source={{ uri: profileImage }}
            style={styles.avatarImg}
          />
        ) : (
          <View style={styles.avatar} />
        )}
      </View>

      {/* CARDS DE DESAFIO */}
      <View style={styles.cardsContainer}>
        {/* Desafio do mês */}
        <TouchableOpacity
          style={styles.cardWrapper}
          activeOpacity={0.9}
          onPress={handleDesafioMes}
        >
          <ImageBackground
            source={require('../../assets/desafioMensal.png')}
            style={styles.cardImage}
            imageStyle={styles.cardImageRadius}
          >
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>DESAFIO DO MÊS</Text>
              <Text style={styles.cardSubtitle}>ZERO DOCE</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Desafio da semana */}
        <TouchableOpacity
          style={styles.cardWrapper}
          activeOpacity={0.9}
          onPress={handleDesafioSemana}
        >
          <ImageBackground
            source={require('../../assets/desafioSemanal.png')}
            style={styles.cardImage}
            imageStyle={styles.cardImageRadius}
          >
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>DESAFIO DA SEMANA</Text>
              <Text style={styles.cardSubtitle}>FAÇA O CHECKLIST</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}
