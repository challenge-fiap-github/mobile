import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const TASKS = [
  'Escovei os dentes - Manhã',
  'Escovei os dentes - Almoço',
  'Escovei os dentes - Noite',
  'Usei enxaguante bocal',
  'Passei fio dental',
];

const STORAGE_KEY = 'ChecklistDiario';
const PONTOS_KEY = 'GamePoints';

export default function ChecklistDiario() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [recompensaRecebida, setRecompensaRecebida] = useState(false);

  const shouldReset = async () => {
    const lastReset = await AsyncStorage.getItem(`${STORAGE_KEY}_lastReset`);
    const today = new Date().toDateString();
    if (lastReset !== today) {
      await AsyncStorage.removeItem(STORAGE_KEY);
      await AsyncStorage.setItem(`${STORAGE_KEY}_lastReset`, today);
      setRecompensaRecebida(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      await shouldReset();
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setChecked(parsed);
        setRecompensaRecebida(parsed.__recompensaRecebida || false);
      }
    };
    load();
  }, []);

  const toggleCheck = async (task: string) => {
    const updated = { ...checked, [task]: !checked[task] };
    setChecked(updated);

    const totalConcluidas = TASKS.filter((t) => updated[t]).length;

    if (totalConcluidas === TASKS.length && !recompensaRecebida) {
      // Adiciona os pontos
      const storedPoints = await AsyncStorage.getItem(PONTOS_KEY);
      const current = storedPoints ? parseInt(storedPoints, 10) : 0;
      const novoTotal = current + 5;
      await AsyncStorage.setItem(PONTOS_KEY, novoTotal.toString());

      Alert.alert('Parabéns!', 'Você concluiu todas as tarefas e ganhou 5 pontos!');
      updated.__recompensaRecebida = true;
      setRecompensaRecebida(true);
    }

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checklist diário</Text>
        <View style={{ width: 22 }} />
      </View>

      <FlatList
        data={TASKS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleCheck(item)}
          >
            <View style={[styles.checkbox, checked[item] && styles.checkedBox]}>
              {checked[item] && <Text style={styles.checkmark}>✔</Text>}
            </View>
            <Text style={styles.taskText}>{item}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
