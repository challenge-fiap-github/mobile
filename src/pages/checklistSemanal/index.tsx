// src/pages/checklistSemanal/index.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const TASKS = [
  'Escovei os dentes 3x ao dia',
  'Usei fio dental 5 dias na semana',
  'Enxaguei os dentes 1x ao dia',
];

// chave separada pra não conflitar com versão "produção"
const STORAGE_KEY = 'ChecklistSemanal_TESTE_LIVRE';

type Nav = NativeStackNavigationProp<RootStackParamList, 'ChecklistSemanal'>;

export default function ChecklistSemanal() {
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
      const updated = { ...checked, [task]: !checked[task] };
      setChecked(updated);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.log(e);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

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
        <Text style={styles.headerTitle}>Checklist semanal</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* LISTA */}
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
                <Text style={styles.checkmark}>X</Text>
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
