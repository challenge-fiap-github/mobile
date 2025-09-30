import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Consulta'>;

const PONTOS_KEY = 'GamePoints';
const FOTO_KEY   = 'profileImage';
const NOME_KEY   = 'usuarioNome';

const consultas = [
  { doutor: 'Dr. nome do doutor', tipo: 'Consulta limpeza',   pontos: 200, data: '24/02/2025' },
  { doutor: 'Dr. nome do doutor', tipo: 'Consulta limpeza',   pontos: 200, data: '12/07/2024' },
  { doutor: 'Dr. nome do doutor', tipo: 'Consulta periódica', pontos: 150, data: '22/06/2024' },
];

export default function Consulta() {
  const navigation = useNavigation<Nav>();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [nome, setNome] = useState<string>('');
  const [pontos, setPontos] = useState<number>(0);

  const loadData = useCallback(async () => {
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
    } catch (_e) {
      setPontos(0);
      setProfileImage(null);
      setNome('');
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);
  useFocusEffect(React.useCallback(() => { loadData(); }, [loadData]));

  const handleBackPress = () => navigation.navigate('Game');
  const nomeExibicao = nome?.trim() ? nome : 'Usuário';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pontos de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Card do usuário */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{nomeExibicao}</Text>
          <Text style={styles.userScore}>Pontuação: {pontos}</Text>
        </View>

        {/* avatar: usa foto salva ou fallback */}
        <View style={styles.profileCircle}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../../assets/fotoPerfil.png')} style={styles.profileImage} />
          )}
        </View>
      </View>

      {/* Lista de pontos */}
      <FlatList
        data={consultas}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.consultaList}
        renderItem={({ item }) => (
          <View style={styles.consultaItem}>
            <View style={styles.consultaInfo}>
              <Text style={styles.doutor}>{item.doutor}</Text>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
            <View style={styles.pontosBox}>
              <Text style={styles.pontos}>
                Pontos: <Text style={{ color: 'green' }}>+{item.pontos}</Text>
              </Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
