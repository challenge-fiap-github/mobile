import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './style';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Premios'>;

const PONTOS_KEY = 'GamePoints';

// Defina aqui os custos de cada prêmio
type Reward = { titulo: string; custo: number };
const RECOMPENSAS: Reward[] = [
  { titulo: 'Cupom de desconto 5% - Farmacias', custo: 100 },
  { titulo: 'Cupom Ifood - Frete grátis', custo: 200 },
  { titulo: 'Cupom de desconto 5% - Uber', custo: 120 },
  { titulo: 'Cupom de desconto 8% - Cosmeticos', custo: 160 },
  { titulo: 'Frete grátis Uber Eats', custo: 180 },
  { titulo: 'Livraria Cultura - 10% OFF', custo: 220 },
];

export default function Premios() {
  const navigation = useNavigation<Nav>();
  const [pontos, setPontos] = useState(0);

  const handleBackPress = () => navigation.goBack();

  // carrega pontos
  useEffect(() => {
    const loadPoints = async () => {
      try {
        const stored = await AsyncStorage.getItem(PONTOS_KEY);
        const parsed = stored ? parseInt(stored, 10) : 0;
        setPontos(Number.isNaN(parsed) ? 0 : parsed);
      } catch {
        setPontos(0);
      }
    };
    const unsub = navigation.addListener('focus', loadPoints);
    loadPoints();
    return unsub;
  }, [navigation]);

  // confirma e tenta resgatar
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
              // se falhar, volta o valor na UI (raro)
              setPontos(pontos);
              Alert.alert('Erro', 'Não foi possível concluir o resgate.');
              return;
            }
            Alert.alert('Prêmio resgatado!', `Você resgatou: ${reward.titulo}`);
            // aqui você pode: navegar, abrir modal com código, etc.
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header (seu modelo) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Prêmios</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Card do usuário */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Nome</Text>
          <View style={styles.moedaContainer}>
            <Image source={require('../../assets/odontoCoin.png')} style={styles.moedaIcon} />
            <Text style={styles.moedaTexto}>{pontos} moedas</Text>
          </View>
        </View>

        <View style={styles.profileCircle}>
          <Image source={require('../../assets/fotoPerfil.png')} style={styles.profileImage} />
        </View>
      </View>

      <Text style={styles.infoText}>Aqui você troca seus pontos por prêmios</Text>

      {/* Lista de recompensas */}
      <FlatList
        data={RECOMPENSAS}
        keyExtractor={(item, idx) => `${idx}-${item.titulo}`}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.rewardItem} onPress={() => confirmarResgate(item)}>
            <Text style={styles.rewardText}>{item.titulo}</Text>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
