// src/pages/grupo/index.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './style';

type GrupoNav = NativeStackNavigationProp<RootStackParamList, 'Grupo'>;
type GrupoRoute = RouteProp<RootStackParamList, 'Grupo'>;

const GRUPOS_KEY = 'GruposOdontoGame';

type StoredGroup = {
  id: string;
  name?: string;
  members?: string[] | string | null;
  imageUri?: string | null;
};

type LoadedGroup = {
  id: string;
  name: string;
  members: string[];
  imageUri?: string | null;
};

export default function Grupo() {
  const navigation = useNavigation<GrupoNav>();
  const route = useRoute<GrupoRoute>();
  const { groupId, name: routeName } = route.params;

  const [group, setGroup] = useState<LoadedGroup | null>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleChangePhoto = () => {
    Alert.alert(
      'Foto do grupo',
      'Funcionalidade para alterar a foto do grupo pode ser adicionada aqui.'
    );
  };

  const handleDeleteGroup = () => {
    if (!group || group.id === 'default-trabalho-odonto') return;

    Alert.alert(
      'Excluir grupo',
      'Tem certeza que deseja excluir este grupo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              const json = await AsyncStorage.getItem(GRUPOS_KEY);
              const parsed: StoredGroup[] = json ? JSON.parse(json) : [];
              const filtered = parsed.filter((g) => g.id !== group.id);
              await AsyncStorage.setItem(GRUPOS_KEY, JSON.stringify(filtered));
              navigation.goBack();
            } catch (e) {
              console.log('Erro ao excluir grupo', e);
              Alert.alert(
                'Erro',
                'Não foi possível excluir o grupo. Tente novamente.'
              );
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const loadGroup = async () => {
    try {
      const json = await AsyncStorage.getItem(GRUPOS_KEY);
      const parsed: StoredGroup[] = json ? JSON.parse(json) : [];

      const found = parsed.find((g) => g.id === groupId);

      if (found) {
        const name = (found.name || routeName || 'Grupo').trim() || 'Grupo';

        let members: string[] = [];
        if (Array.isArray(found.members)) {
          members = found.members
            .map((m) => String(m).trim())
            .filter(Boolean);
        } else if (typeof found.members === 'string') {
          members = found.members
            .split(',')
            .map((m) => m.trim())
            .filter(Boolean);
        }

        setGroup({
          id: found.id,
          name,
          members,
          imageUri: found.imageUri ?? null,
        });
        return;
      }

      if (groupId === 'default-trabalho-odonto') {
        setGroup({
          id: 'default-trabalho-odonto',
          name: 'Trabalho Odonto',
          members: ['Luis Henrique', 'Sabrina Café', 'Matheus Duarte'],
          imageUri: undefined,
        });
        return;
      }

      setGroup(null);
    } catch (e) {
      console.log('Erro ao carregar grupo', e);
      setGroup(null);
    }
  };

  useEffect(() => {
    const unsub = navigation.addListener('focus', loadGroup);
    loadGroup();
    return unsub;
  }, [navigation, groupId]);

  const renderMember = ({ item }: { item: string }) => {
    let avatarSource: any = null;

    if (item.toLowerCase().includes('luis')) {
      avatarSource = require('../../assets/luis.png');
    } else if (item.toLowerCase().includes('sabrina')) {
      avatarSource = require('../../assets/sabrina.png');
    } else if (item.toLowerCase().includes('matheus')) {
      avatarSource = require('../../assets/matheus.png');
    }

    return (
      <View style={styles.memberCard}>
        {avatarSource ? (
          <Image source={avatarSource} style={styles.memberAvatarImg} />
        ) : (
          <View style={styles.memberAvatar} />
        )}
        <Text style={styles.memberName}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* HEADER AZUL ESCURO */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Grupo</Text>

        {/* Espaço direito (mantém alinhamento) */}
        <View style={{ width: 22 }} />
      </View>

      {/* AVATAR DO GRUPO SOBREPOSTO */}
      <View style={styles.avatarWrapper}>
        <TouchableOpacity onPress={handleChangePhoto} activeOpacity={0.8}>
          {group?.id === 'default-trabalho-odonto' ? (
            <Image
              source={require('../../assets/grupo.png')}
              style={styles.groupAvatarImg}
            />
          ) : group?.imageUri ? (
            <Image
              source={{ uri: group.imageUri }}
              style={styles.groupAvatarImg}
            />
          ) : (
            <View style={styles.groupAvatarPlaceholder} />
          )}
        </TouchableOpacity>
      </View>

      {/* TÍTULO + BOTÃO EXCLUIR ABAIXO (CENTRADO) */}
      <View style={styles.headerBlock}>
        <Text style={styles.groupNameTitle}>
          {group?.name || 'Grupo'}
        </Text>

        {group && group.id !== 'default-trabalho-odonto' && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeleteGroup}
            activeOpacity={0.9}
          >
            <Text style={styles.deleteButtonText}>Excluir grupo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* LISTA DE MEMBROS */}
      <View style={styles.membersContainer}>
        {group && group.members.length > 0 ? (
          <FlatList
            data={group.members}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={renderMember}
            contentContainerStyle={styles.membersList}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.emptyText}>
            Nenhum membro encontrado para este grupo.
          </Text>
        )}
      </View>
    </View>
  );
}
