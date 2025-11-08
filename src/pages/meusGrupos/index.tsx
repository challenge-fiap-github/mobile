import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './style';

type Nav = NativeStackNavigationProp<RootStackParamList, 'MeusGrupos'>;

type StoredGroup = {
  id: string;
  name?: string;
  members?: string[] | string | null;
  createdAt?: string;
};

type Group = {
  id: string;
  name: string;
  membersCount: number;
};

const GROUPS_KEY = 'GruposOdontoGame';

// Grupo exemplo fixo
const DEFAULT_GROUP: Group = {
  id: 'default-trabalho-odonto',
  name: 'Trabalho Odonto',
  membersCount: 8,
};

export default function MeusGrupos() {
  const navigation = useNavigation<Nav>();
  const [groups, setGroups] = useState<Group[]>([]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOpenGroup = (group: Group) => {
    navigation.navigate('Grupo', {
      groupId: group.id,
      name: group.name,
    });
  };

  const loadGroups = async () => {
    try {
      const json = await AsyncStorage.getItem(GROUPS_KEY);
      let normalized: Group[] = [];

      if (json) {
        const parsed: StoredGroup[] = JSON.parse(json) || [];

        normalized = parsed
          .map((g, index) => {
            const name = (g.name || '').trim();
            if (!name) return null;

            let membersArray: string[] = [];

            if (Array.isArray(g.members)) {
              membersArray = g.members
                .map((m) => String(m).trim())
                .filter((m) => !!m);
            } else if (typeof g.members === 'string') {
              membersArray = g.members
                .split(',')
                .map((m) => m.trim())
                .filter((m) => !!m);
            }

            const membersCount = membersArray.length;
            if (membersCount === 0) return null;

            return {
              id: g.id || String(index),
              name,
              membersCount,
            };
          })
          .filter((g): g is Group => g !== null);
      }

      const hasDefault = normalized.some(
        (g) =>
          g.id === DEFAULT_GROUP.id ||
          g.name.toLowerCase() === DEFAULT_GROUP.name.toLowerCase()
      );

      const finalList = hasDefault
        ? normalized
        : [DEFAULT_GROUP, ...normalized];

      setGroups(finalList);
    } catch (e) {
      console.log('Erro ao carregar grupos', e);
      // Em caso de erro, mostra só o grupo exemplo
      setGroups([DEFAULT_GROUP]);
    }
  };

  useEffect(() => {
    const unsub = navigation.addListener('focus', loadGroups);
    loadGroups();
    return unsub;
  }, [navigation]);

  const renderItem = ({ item }: { item: Group }) => {
    const isDefault =
      item.id === DEFAULT_GROUP.id ||
      item.name.toLowerCase() === DEFAULT_GROUP.name.toLowerCase();

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.9}
        onPress={() => handleOpenGroup(item)}
      >
        {isDefault ? (
          <Image
            source={require('../../assets/grupo.png')}
            style={styles.groupAvatarImg}
          />
        ) : (
          <View style={styles.avatar} />
        )}

        <View style={styles.info}>
          <Text style={styles.groupName}>{item.name}</Text>
          <Text style={styles.membersText}>
            {item.membersCount}{' '}
            {item.membersCount === 1 ? 'Membro' : 'Membros'}
          </Text>
        </View>
      </TouchableOpacity>
    );
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

        <Text style={styles.headerTitle}>Meus grupos</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* LISTA */}
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Você ainda não possui grupos cadastrados.
          </Text>
        }
      />
    </View>
  );
}
