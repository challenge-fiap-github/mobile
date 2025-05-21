import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

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
  { dia: '07/07/2025', semana: 'Quarta-Feira', turno: 'noite' },
];

export default function AgendamentoResultado() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filtro, setFiltro] = useState<'todos' | 'manha' | 'tarde' | 'noite'>('todos');

  const handleBack = () => navigation.goBack();

  const renderCard = ({ item }: { item: HorarioItem }) => {
    if (filtro !== 'todos' && item.turno !== filtro) return null;
    return (
      <View style={styles.dataCard}>
        <Text style={styles.semana}>{item.semana}</Text>
        <Text style={styles.dia}>{item.dia}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
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
        <TouchableOpacity onPress={() => setFiltro('todos')} style={styles.filtroBtn}>
          <Image source={require('../../assets/todosIcon.png')} style={styles.filtroIcon} />
          <Text style={styles.filtroText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFiltro('manha')} style={styles.filtroBtn}>
          <Image source={require('../../assets/manhaIcon.png')} style={styles.filtroIcon} />
          <Text style={styles.filtroText}>Manhã</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFiltro('tarde')} style={styles.filtroBtn}>
          <Image source={require('../../assets/tardeIcon.png')} style={styles.filtroIcon} />
          <Text style={styles.filtroText}>Tarde</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFiltro('noite')} style={styles.filtroBtn}>
          <Image source={require('../../assets/noiteIcon.png')} style={styles.filtroIcon} />
          <Text style={styles.filtroText}>Noite</Text>
        </TouchableOpacity>
      </View>

      {/* DATAS */}
      <FlatList
        data={horarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard}
        contentContainerStyle={styles.listaDatas}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
