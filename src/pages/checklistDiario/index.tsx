// src/pages/checklistDiario/index.tsx

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

const STORAGE_KEY = 'ChecklistDiario_TESTE_LIVRE';
const PONTOS_KEY = 'GamePoints';

type Nav = NativeStackNavigationProp<RootStackParamList, 'ChecklistDiario'>;

export default function ChecklistDiario() {
  const navigation = useNavigation<Nav>();

  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setChecked(JSON.parse(stored));
        }
      } catch {
        setChecked({});
      }
    };
    load();
  }, []);

  const toggleCheck = async (task: string) => {
    try {
      const beforeAllDone = TASKS.every((t) => checked[t]);

      const updated = {
        ...checked,
        [task]: !checked[task],
      };
      setChecked(updated);

      const afterAllDone = TASKS.every((t) => updated[t]);

      // Se agora todas estão marcadas e antes não estavam todas,
      // considera que acabou de completar e dá os pontos.
      if (afterAllDone && !beforeAllDone) {
        const storedPoints = await AsyncStorage.getItem(PONTOS_KEY);
        const current = storedPoints ? parseInt(storedPoints, 10) || 0 : 0;
        const novoTotal = current + 5;
        await AsyncStorage.setItem(PONTOS_KEY, String(novoTotal));

        Alert.alert(
          'Parabéns!',
          'Você concluiu todas as tarefas e ganhou 5 pontos!'
        );
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.log(e);
    }
  };

  const handleBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checklist diário</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* LISTA DE TAREFAS */}
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleCheck(item)}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.checkbox,
                checked[item] && styles.checkedBox,
              ]}
            >
              {checked[item] && (
                <Text style={styles.checkmark}>✔</Text>
              )}
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
