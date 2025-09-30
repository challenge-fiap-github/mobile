// index.tsx (AgendamentoResultado)
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert, ListRenderItem } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import type { ImageSourcePropType } from 'react-native';

type HorarioItem = {
  dia: string;
  semana: string;
  turno: 'manha' | 'tarde' | 'noite';
};

const horarios: HorarioItem[] = [
  { dia: '06/07/2025', semana: 'Terça-Feira', turno: 'manha' },
  { dia: '06/07/2025', semana: 'Terça-Feira', turno: 'tarde' },
  { dia: '06/07/2025', semana: 'Terça-Feira', turno: 'noite' },
  { dia: '07/07/2025', semana: 'Quarta-Feira', turno: 'manha' },
  { dia: '07/07/2025', semana: 'Quarta-Feira', turno: 'tarde' },
  { dia: '07/07/2025', semana: 'Quarta-Feira', turno: 'noite' },
  { dia: '08/07/2025', semana: 'Quinta-Feira', turno: 'manha' },
  { dia: '08/07/2025', semana: 'Quinta-Feira', turno: 'tarde' },
];

export default function AgendamentoResultado() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filtro, setFiltro] = useState<'todos' | 'manha' | 'tarde' | 'noite'>('todos');
  const [selecionado, setSelecionado] = useState<HorarioItem | null>(null);

  const handleBack = () => navigation.goBack();

  const mesmaData = (a: HorarioItem | null, b: HorarioItem) =>
    !!a && a.dia === b.dia && a.semana === b.semana && a.turno === b.turno;

  const handleAgendar = () => {
    if (!selecionado) return;

    Alert.alert(
      'Deseja agendar?',
      `${selecionado.semana} • ${selecionado.dia} (${selecionado.turno})`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          onPress: async () => {
            const agendamento = {
              ...selecionado,
              criadoEm: new Date().toISOString(),
            };

            try {
              await AsyncStorage.setItem('AgendamentoSelecionado', JSON.stringify(agendamento));
            } catch {}

            Alert.alert('Agendado com sucesso!', '', [
              {
                text: 'OK',
                onPress: () =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  }),
              },
            ]);
          },
        },
      ]
    );
  };

  // ---- Filtro de Turnos (botões azuis/brancos) ----
  const renderFiltro = (
    tipo: 'todos' | 'manha' | 'tarde' | 'noite',
    label: string,
    icon?: ImageSourcePropType
  ) => {
    const isSelected = filtro === tipo;
    const isTodos = tipo === 'todos';

    return (
      <TouchableOpacity
        key={tipo}
        onPress={() => {
          setFiltro(tipo);
          setSelecionado(null); // limpa seleção ao mudar filtro
        }}
        activeOpacity={0.8}
        style={[
          styles.filtroBtnBase,
          isTodos && styles.filtroBtnTodos,
          isSelected ? styles.filtroBtnSelected : styles.filtroBtnUnselected,
        ]}
      >
        {!isTodos && icon && (
          <Image
            source={icon}
            style={[
              styles.filtroIcon,
              isSelected ? styles.filtroIconSelected : styles.filtroIconUnselected,
            ]}
          />
        )}
        <Text style={isSelected ? styles.filtroTextSelected : styles.filtroTextUnselected}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  // ---- Card de data/semana/turno (toggle de seleção) ----
  const renderCard: ListRenderItem<HorarioItem> = ({ item }) => {
    if (filtro !== 'todos' && item.turno !== filtro) return null;

    const isSel = mesmaData(selecionado, item);

    return (
      <TouchableOpacity
        onPress={() => setSelecionado(isSel ? null : item)} // toggle
        activeOpacity={0.9}
        style={[styles.dataCard, isSel && styles.dataCardSelected]}
        accessibilityRole="button"
        accessibilityState={{ selected: isSel }}
      >
        <Text style={[styles.semana, isSel && styles.semanaSelected]}>{item.semana}</Text>
        <Text style={[styles.dia, isSel && styles.diaSelected]}>{item.dia}</Text>
        <Text style={[styles.turno, isSel && styles.turnoSelected]}>
          {item.turno.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} accessibilityLabel="Voltar">
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agendamento de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* CARD DE INFORMAÇÃO */}
      <View style={styles.boxInfo}>
        <Image source={require('../../assets/profissionalcon.png')} style={styles.perfil} />
        <View>
          <Text style={styles.nomeUnidade}>Clínica São Paulo</Text>
          <Text style={styles.tipoConsulta}>Dentista Geral</Text>
        </View>
      </View>

      <Text style={styles.subtitulo}>Encontramos opções nessas datas</Text>

      {/* FILTROS */}
      <View style={styles.filtros}>
        {renderFiltro('todos', 'Todos', require('../../assets/todosIcon.png'))}
        {renderFiltro('manha', 'Manhã', require('../../assets/manhaIcon.png'))}
        {renderFiltro('tarde', 'Tarde', require('../../assets/tardeIcon.png'))}
        {renderFiltro('noite', 'Noite', require('../../assets/noiteIcon.png'))}
      </View>

      {/* DATAS */}
      <FlatList
        data={horarios}
        keyExtractor={(item, idx) => `${item.dia}-${item.turno}-${idx}`}
        renderItem={renderCard}
        contentContainerStyle={styles.listaDatas}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* RODAPÉ / BOTÃO AGENDAR */}
      <View style={styles.footer}>
        <TouchableOpacity
          disabled={!selecionado}
          onPress={handleAgendar}
          activeOpacity={0.9}
          style={[styles.cta, selecionado ? styles.ctaEnabled : styles.ctaDisabled]}
        >
          <Text
            style={[styles.ctaText, selecionado ? styles.ctaTextEnabled : styles.ctaTextDisabled]}
          >
            Agendar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
