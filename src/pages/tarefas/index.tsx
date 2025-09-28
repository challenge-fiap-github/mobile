import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './style';

type Nav = NativeStackNavigationProp<RootStackParamList, 'TarefasDiarias'>;

const PONTOS_KEY = 'GamePoints';
const FOTO_KEY = 'profileImage';
const NOME_KEY = 'usuarioNome';

export default function TarefasDiarias() {
  const navigation = useNavigation<Nav>();
  const [pontos, setPontos] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [nome, setNome] = useState<string>('');

  function go<T extends keyof RootStackParamList>(
    screen: T,
    ...args: RootStackParamList[T] extends undefined ? [] : [RootStackParamList[T]]
  ) {
    // @ts-expect-error: sobrecarga controlada
    navigation.navigate(screen, ...(args as [any]));
  }

  const loadData = async () => {
    try {
      const [storedPoints, storedUri, storedName] = await Promise.all([
        AsyncStorage.getItem(PONTOS_KEY),
        AsyncStorage.getItem(FOTO_KEY),
        AsyncStorage.getItem(NOME_KEY),
      ]);
      const parsed = storedPoints ? parseInt(storedPoints, 10) : 0;
      setPontos(Number.isNaN(parsed) ? 0 : parsed);
      setProfileImage(storedUri ?? null);
      setNome(storedName ?? '');
    } catch {
      setPontos(0);
      setProfileImage(null);
      setNome('');
    }
  };

  useEffect(() => {
    const unsub = navigation.addListener('focus', loadData);
    loadData();
    return unsub;
  }, [navigation]);

  const nomeExibicao = nome && nome.trim().length > 0 ? nome : 'Usuário';

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* TOPO (igual ao da Game) */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => go('Game')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Odonto Game</Text>

        <TouchableOpacity onPress={() => go('Home')}>
          <Image source={require('../../assets/homeIcon.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>

      {/* AVATAR CENTRAL SOBREPOSTO — usa a mesma foto salva na Home */}
      <View style={styles.avatarWrapper}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.avatar} />
        ) : (
          <View style={styles.avatar} />
        )}
      </View>

      {/* BLOCO AZUL-CLARO COM NOME + PONTOS */}
      <View style={styles.headerBlock}>
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>
            Olá, <Text style={styles.greetingBold}>{nomeExibicao}</Text>
          </Text>
          <View style={styles.scoreRow}>
            <Image
              source={require('../../assets/odontoCoin.png')}
              style={styles.coinIcon}
            />
            <Text style={styles.scoreText}>{pontos} moedas</Text>
          </View>
        </View>
      </View>

      {/* GRADE DE CARDS (2 colunas) */}
      <View style={styles.cardsRow}>
        <TouchableOpacity style={styles.cardButton} onPress={() => go('ChecklistDiario')}>
          <Image
            source={require('../../assets/checklist.png')}
            style={styles.cardIcon}
          />
          <Text style={styles.cardLabel}>Checklist{'\n'}diário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => go('ChecklistSemanal')}>
          <Image
            source={require('../../assets/semanal.png')}
            style={styles.cardIcon}
          />
          <Text style={styles.cardLabel}>Checklist{'\n'}semanal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
