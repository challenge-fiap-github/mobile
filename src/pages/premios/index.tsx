// src/pages/premios/index.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './style';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Premios'>;

const PONTOS_KEY = 'GamePoints';
const FOTO_KEY = 'profileImage';
const NOME_KEY = 'usuarioNome';

type Reward = { titulo: string; custo: number };

const RECOMPENSAS: Reward[] = [
  { titulo: 'Cupom de desconto 5% - Farmácias', custo: 100 },
  { titulo: 'Cupom iFood - Frete grátis', custo: 200 },
  { titulo: 'Cupom de desconto 5% - Uber', custo: 120 },
  { titulo: 'Cupom de desconto 8% - Cosméticos', custo: 160 },
  { titulo: 'Frete grátis Uber Eats', custo: 180 },
  { titulo: 'Livraria Cultura - 10% OFF', custo: 220 },
];

export default function Premios() {
  const navigation = useNavigation<Nav>();

  const [pontos, setPontos] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [nome, setNome] = useState<string>('');

  const handleBackPress = () => navigation.goBack();

  const carregarDados = async () => {
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
    const unsub = navigation.addListener('focus', carregarDados);
    carregarDados();
    return unsub;
  }, [navigation]);

  const nomeExibicao =
    nome && nome.trim().length > 0 ? nome : 'Usuário';

  const confirmarResgate = (reward: Reward) => {
    if (pontos < reward.custo) {
      Alert.alert(
        'Pontos insuficientes',
        `Este prêmio custa ${reward.custo} moedas.\nVocê tem ${pontos} moedas.`
      );
      return;
    }

    Alert.alert(
      'Confirmar resgate',
      `Este prêmio custa ${reward.custo} moedas.\nDeseja resgatar agora?`,
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: async () => {
            const novoTotal = pontos - reward.custo;
            setPontos(novoTotal);
            try {
              await AsyncStorage.setItem(PONTOS_KEY, String(novoTotal));
            } catch {
              // rollback simples se der erro
              setPontos(pontos);
              Alert.alert('Erro', 'Não foi possível concluir o resgate.');
              return;
            }
            Alert.alert(
              'Prêmio resgatado!',
              `Você resgatou: ${reward.titulo}`
            );
          },
        },
      ]
    );
  };

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
        <Text style={styles.headerTitle}>Prêmios</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* CARD DO USUÁRIO (usa nome + foto reais) */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{nomeExibicao}</Text>
          <View style={styles.moedaContainer}>
            <Image
              source={require('../../assets/odontoCoin.png')}
              style={styles.moedaIcon}
            />
            <Text style={styles.moedaTexto}>{pontos} moedas</Text>
          </View>
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

      <Text style={styles.infoText}>
        Aqui você troca seus pontos por prêmios
      </Text>

      {/* LISTA DE PRÊMIOS */}
      <FlatList
        data={RECOMPENSAS}
        keyExtractor={(item, idx) => `${idx}-${item.titulo}`}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.rewardItem}
            onPress={() => confirmarResgate(item)}
            activeOpacity={0.9}
          >
            <Text style={styles.rewardText}>{item.titulo}</Text>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
