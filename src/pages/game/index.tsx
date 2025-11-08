import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Game'>;

const PONTOS_KEY = 'GamePoints';
const FOTO_KEY = 'profileImage';
const NOME_KEY = 'usuarioNome';

export default function Game() {
  const navigation = useNavigation<Nav>();
  const [pontos, setPontos] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [nome, setNome] = useState<string>('');

  function go<T extends keyof RootStackParamList>(
    screen: T,
    ...args: RootStackParamList[T] extends undefined ? [] : [RootStackParamList[T]]
  ) {
    navigation.navigate(screen as any, ...(args as [any]));
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

  const nomeExibicao =
    nome && nome.trim().length > 0 ? nome : 'Usuário';

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* HEADER FIXO */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => go('Home')}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Odonto Game</Text>

        <TouchableOpacity onPress={() => go('Home')}>
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

      {/* BLOCO AZUL CLARO + INFO */}
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

      {/* MENU ROLÁVEL */}
      <View style={styles.menuContainer}>
        <ScrollView
          contentContainerStyle={styles.menuList}
          showsVerticalScrollIndicator={false}
        >
          {/* Tarefas diárias */}
          <TouchableOpacity
            onPress={() => go('TarefasDiarias')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                source={require('../../assets/tarefaIcon.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>Tarefas diárias</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>

          {/* Quiz */}
          <TouchableOpacity
            onPress={() => go('Quiz')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                source={require('../../assets/quizIcon.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>Quiz</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>

          {/* Pontos por consulta */}
          <TouchableOpacity
            onPress={() => go('PontuacaoConsulta')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                source={require('../../assets/consultaIcon.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>Pontos por consulta</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>

          {/* Desafios especiais -> tela Desafio */}
          <TouchableOpacity
            onPress={() => go('Desafio')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                source={require('../../assets/desafioIcon.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>Desafios</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>

          {/* Jogue em turma -> DesafioEmGrupo */}
          <TouchableOpacity
            onPress={() => go('DesafioEmGrupo')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                source={require('../../assets/turmaIcon.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>Jogue em turma</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>

          {/* SEPARADOR VISUAL */}
          <View style={styles.menuGroupSeparator} />

          {/* Troca de pontos */}
          <TouchableOpacity
            onPress={() => go('Premios')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                source={require('../../assets/premioIcon.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>Troca de pontos</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </TouchableOpacity>

          {/* ESPAÇO FINAL */}
          <View style={styles.menuBottomSpacer} />
        </ScrollView>
      </View>
    </View>
  );
}
