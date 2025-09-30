// src/pages/meusAgendamentos/index.tsx
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'MeusAgendamentos'>;

type Turno = 'manha' | 'tarde' | 'noite';
type Agendamento = {
  dia: string;
  semana: string;
  turno: Turno;
  criadoEm?: string;
  clinica?: string;
  usuarioNome?: string;
};

export default function MeusAgendamentos() {
  const navigation = useNavigation<Nav>();
  const [loading, setLoading] = useState(true);
  const [lista, setLista] = useState<Agendamento[]>([]);
  const [usuarioAtual, setUsuarioAtual] = useState<string>('');

  const handleBack = () => navigation.goBack();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      // usuário logado salvo no login
      const currentUser = (await AsyncStorage.getItem('usuarioNome')) ?? '';
      setUsuarioAtual(currentUser);

      // lista acumulada
      const rawList = await AsyncStorage.getItem('Agendamentos');
      const arr: Agendamento[] = rawList ? JSON.parse(rawList) : [];

      // fallback: último selecionado
      const rawSingle = await AsyncStorage.getItem('AgendamentoSelecionado');
      const single: Agendamento | null = rawSingle ? JSON.parse(rawSingle) : null;

      const merged = [...arr];
      if (single) {
        const exists = merged.some(
          a => a.dia === single.dia && a.semana === single.semana && a.turno === single.turno
        );
        if (!exists) merged.unshift(single);
      }

      // mantém apenas do usuário atual (se houver)
      const onlyMine = currentUser
        ? merged.filter(a => (a.usuarioNome ?? currentUser) === currentUser)
        : merged;

      // normaliza campos
      const normalized = onlyMine.map(a => ({
        usuarioNome: a.usuarioNome ?? (currentUser || 'Usuário'),
        clinica: a.clinica ?? 'Clínica São Paulo',
        ...a,
      }));

      // ordena por criadoEm (desc)
      normalized.sort((x, y) => {
        const dx = x.criadoEm ? Date.parse(x.criadoEm) : 0;
        const dy = y.criadoEm ? Date.parse(y.criadoEm) : 0;
        return dy - dx;
      });

      setLista(normalized);
    } catch {
      setLista([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsub = navigation.addListener('focus', load);
    load();
    return unsub;
  }, [navigation, load]);

  const renderItem = ({ item }: { item: Agendamento }) => (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Image
          source={require('../../assets/meusAgendamentosIcon.png')}
          style={styles.cardIcon}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitulo}>{item.usuarioNome}</Text>
          <Text style={styles.cardLinha}>
            {item.semana} • {item.dia} ({item.turno.toUpperCase()})
          </Text>
          <Text style={styles.cardClinica}>{item.clinica}</Text>
        </View>
      </View>
      {item.criadoEm && (
        <Text style={styles.cardRodape}>
          Criado em {new Date(item.criadoEm).toLocaleString('pt-BR', { hour12: false })}
        </Text>
      )}
    </View>
  );

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
        <Text style={styles.headerTitle}>Meus agendamentos</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* LISTA */}
      {loading ? (
        <View style={styles.loadingBox}>
          <ActivityIndicator />
        </View>
      ) : lista.length === 0 ? (
        <View style={styles.emptyBox}>
          <Image
            source={require('../../assets/empty.png')}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>
            {usuarioAtual ? `${usuarioAtual}, ` : ''}você ainda não tem agendamentos
          </Text>
          <Text style={styles.emptyText}>
            Faça um agendamento e ele aparecerá aqui.
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('AgendamentoResultado')}
            activeOpacity={0.9}
            style={styles.cta}
          >
            <Text style={styles.ctaText}>Agendar consulta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={lista}
          keyExtractor={(item, idx) => `${item.dia}-${item.turno}-${idx}`}
          renderItem={renderItem}
          contentContainerStyle={styles.listaConteudo}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
