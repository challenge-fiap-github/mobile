import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'TokenConsulta'>;

function genToken(): string {
  const n = Math.floor(Math.random() * 100000);
  return String(n).padStart(5, '0');
}

// chaves já usadas no app
const NOME_KEY = 'usuarioNome';
const CARTAO_KEY = 'usuarioCarteirinha';

export default function TokenConsultaScreen() {
  const navigation = useNavigation<Nav>();

  const [token, setToken] = useState<string>(genToken());
  const [secondsLeft, setSecondsLeft] = useState<number>(60);

  const [nome, setNome] = useState<string>('');
  const [numeroCarteira, setNumeroCarteira] = useState<string>('');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleBack = () => navigation.goBack();

  const refreshToken = () => {
    setToken(genToken());
    setSecondsLeft(60);
  };

  // Carrega dados básicos da carteirinha
  useEffect(() => {
    const loadUserCard = async () => {
      try {
        const [nomeSt, cartSt] = await Promise.all([
          AsyncStorage.getItem(NOME_KEY),
          AsyncStorage.getItem(CARTAO_KEY),
        ]);

        setNome(nomeSt || '');
        setNumeroCarteira(cartSt || '');
      } catch {
        // se der erro, segue com placeholders
      }
    };

    loadUserCard();
  }, []);

  // Timer do token
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setToken(genToken());
          return 60;
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const mmss = useMemo(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }, [secondsLeft]);

  // Exibição (com exemplos fictícios quando não houver dado real)
  const displayNumero = numeroCarteira || '01.09821198.00';
  const displayNome = nome || 'Usuário OdontoPrev';
  const displayCns = '898 0012 3456 7890';     // CNS fictício
  const displayPlano = 'Dental 300';           // plano fictício
  const displayNascimento = '12/07/1994';      // data fictícia

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} accessibilityLabel="Voltar">
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Token</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* CARTEIRINHA - CARTÃO FINO */}
      <View style={styles.cardCarteirinha}>
        <View style={styles.cardTopRow}>
          <Text style={styles.cardLogoText}>odontoprev</Text>
        </View>

        <View style={styles.cardBlueStrip}>
          <Text style={styles.cardNumber}>{displayNumero}</Text>
        </View>

        <View style={styles.cardInfoRow}>
          <Text style={styles.cardLabel}>Beneficiário:</Text>
          <Text style={styles.cardValue}>{displayNome}</Text>
        </View>

        <View style={styles.cardInfoRow}>
          <Text style={styles.cardLabel}>CNS:</Text>
          <Text style={styles.cardValue}>{displayCns}</Text>
        </View>

        <View style={styles.cardInfoRow}>
          <Text style={styles.cardLabel}>Plano:</Text>
          <Text style={styles.cardValue}>{displayPlano}</Text>
        </View>

        <View style={[styles.cardInfoRow, { paddingBottom: 10 }]}>
          <Text style={styles.cardLabel}>Nascimento:</Text>
          <Text style={styles.cardValue}>{displayNascimento}</Text>
        </View>
      </View>

      {/* CARD DO TOKEN */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/token.png')}
            style={styles.tokenIcon}
          />
          <Text style={styles.tokenValue}>{token}</Text>
        </View>

        <Text style={styles.helperText}>
          Um novo código é gerado a cada 1 minuto.
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.timerLabel}>Atualiza em</Text>
          <Text style={styles.timerValue}>{mmss}</Text>

          <TouchableOpacity
            onPress={refreshToken}
            activeOpacity={0.85}
            style={styles.refreshBtn}
          >
            <Text style={styles.refreshText}>Gerar agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
