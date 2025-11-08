// src/pages/desafioEmGrupo/index.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'DesafioEmGrupo'>;

const FOTO_KEY = 'profileImage';

export default function DesafioEmGrupo() {
  const navigation = useNavigation<Nav>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  const handleCriarGrupo = () => {
    navigation.navigate('CadastrarGrupo');
  };

  const handleMeusGrupos = () => {
    navigation.navigate('MeusGrupos');
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

      {/* HEADER AZUL ESCURO (padrão Game) */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Desafio em grupo</Text>

        <TouchableOpacity onPress={handleHome}>
          <Image
            source={require('../../assets/homeIcon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>

      {/* AVATAR SOBREPOSTO */}
      <View style={styles.avatarWrapper}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.avatarImg} />
        ) : (
          <View style={styles.avatar} />
        )}
      </View>

      {/* CARDS */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={handleCriarGrupo}
          activeOpacity={0.9}
        >
          <Text style={styles.cardTitle}>Criar um grupo</Text>
          <Text style={styles.cardText}>
            Monte um grupo de amigos e descubra quem é o campeão da saúde bucal!
            {'\n'}Topa o desafio?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={handleMeusGrupos}
          activeOpacity={0.9}
        >
          <Text style={styles.cardTitle}>Meus grupos</Text>
          <Text style={styles.cardText}>
            Veja seus grupos já criados
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
