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
const FOTO_KEY = 'profileImage';
const NOME_KEY = 'usuarioNome';

type ConsultaItem = {
  id: string;
  doutor: string;
  tipo: string;
  data: string;
};

const consultas: ConsultaItem[] = [
  {
    id: '1',
    doutor: 'Dr. Thiago Fernandes',
    tipo: 'Consulta limpeza',
    data: '24/02/2025',
  },
  {
    id: '2',
    doutor: 'Dr. Thiago Fernandes',
    tipo: 'Consulta limpeza',
    data: '12/07/2024',
  },
  {
    id: '3',
    doutor: 'Dr. Thiago Fernandes',
    tipo: 'Consulta periódica',
    data: '22/06/2024',
  },
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
    } catch {
      setPontos(0);
      setProfileImage(null);
      setNome('');
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, [loadData])
  );

  const handleBackPress = () => navigation.navigate('Game');

  const handleAvaliar = (item: ConsultaItem) => {
    navigation.navigate('Avaliacao', { doutor: item.doutor });
  };

  const nomeExibicao = nome?.trim() ? nome : 'Usuário';

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pontos de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* CARD DO USUÁRIO */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{nomeExibicao}</Text>
          <Text style={styles.userScore}>Pontuação: {pontos}</Text>
        </View>

        <View style={styles.profileCircle}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={styles.profileImage}
            />
          ) : (
            <Image
              source={require('../../assets/fotoPerfil.png')}
              style={styles.profileImage}
            />
          )}
        </View>
      </View>

      {/* LISTA DE CONSULTAS */}
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}
        style={styles.consultaList}
        contentContainerStyle={styles.consultaListContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.consultaRow}>
            <View style={styles.consultaTextBlock}>
              <Text style={styles.doutor}>{item.doutor}</Text>
              <Text style={styles.tipo}>
                {item.tipo}{'   '}
                <Text style={styles.data}>{item.data}</Text>
              </Text>
            </View>

            <TouchableOpacity
              style={styles.avaliarButton}
              onPress={() => handleAvaliar(item)}
            >
              <Text style={styles.avaliarText}>AVALIAR</Text>
              <Text style={styles.avaliarArrow}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
}
