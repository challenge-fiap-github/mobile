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

const STORAGE_KEY = 'ChecklistSemanal';

export default function ChecklistSemanal() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const getCurrentWeek = () => {
    const now = new Date();
    const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const shouldReset = async () => {
    const lastReset = await AsyncStorage.getItem(`${STORAGE_KEY}_lastReset`);
    const currentWeek = getCurrentWeek().toString();
    if (lastReset !== currentWeek) {
      await AsyncStorage.removeItem(STORAGE_KEY);
      await AsyncStorage.setItem(`${STORAGE_KEY}_lastReset`, currentWeek);
    }
  };

  useEffect(() => {
    const load = async () => {
      await shouldReset();
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setChecked(JSON.parse(stored));
      }
    };
    load();
  }, []);

  const toggleCheck = async (task: string) => {
    const updated = { ...checked, [task]: !checked[task] };
    setChecked(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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

      <FlatList
        data={TASKS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleCheck(item)}
            disabled={checked[item]} // desabilita após marcar
          >
            <View style={[styles.checkbox, checked[item] && styles.checkedBox]}>
              {checked[item] && <Text style={styles.checkmark}>X</Text>}
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
