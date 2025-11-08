import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'CadastrarGrupo'>;

// chave única usada também em MeusGrupos
const GROUPS_KEY = 'GruposOdontoGame';

export default function CadastrarGrupo() {
  const navigation = useNavigation<Nav>();

  const [nomeGrupo, setNomeGrupo] = useState('');
  const [carteirinha, setCarteirinha] = useState('');
  const [members, setMembers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddMember = () => {
    const trimmed = carteirinha.trim();

    if (!trimmed) {
      Alert.alert('Atenção', 'Informe o número da carteirinha para adicionar.');
      return;
    }

    if (members.includes(trimmed)) {
      Alert.alert('Aviso', 'Este membro já foi adicionado.');
      return;
    }

    setMembers((prev) => [...prev, trimmed]);
    setCarteirinha('');
  };

  const handleRemoveMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m !== id));
  };

  const salvarGrupo = async () => {
    const nomeTrim = nomeGrupo.trim();

    if (!nomeTrim) {
      Alert.alert('Atenção', 'Preencha o nome do grupo.');
      return;
    }

    if (members.length === 0) {
      Alert.alert('Atenção', 'Adicione pelo menos um membro ao grupo.');
      return;
    }

    try {
      setLoading(true);

      const novoGrupo = {
        id: Date.now().toString(),
        name: nomeTrim,          // <- padronizado
        members: members,        // <- padronizado
        createdAt: new Date().toISOString(),
      };

      const existing = await AsyncStorage.getItem(GROUPS_KEY);
      const lista = existing ? JSON.parse(existing) : [];
      lista.push(novoGrupo);

      await AsyncStorage.setItem(GROUPS_KEY, JSON.stringify(lista));

      Alert.alert(
        'Sucesso',
        'Grupo cadastrado com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: false }
      );

      setNomeGrupo('');
      setCarteirinha('');
      setMembers([]);
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Erro',
        'Não foi possível salvar o grupo. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Cadastro de grupo</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* CONTEÚDO */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>
            Faça o cadastro do grupo{'\n'}
            e adicione os seus amigos
          </Text>

          <Text style={styles.subtitle}>
            Preencha para criação do grupo
          </Text>

          {/* Nome do grupo */}
          <Text style={styles.label}>Nome do grupo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#B8B8B8"
            value={nomeGrupo}
            onChangeText={setNomeGrupo}
          />

          {/* Adicionar membros */}
          <Text style={[styles.label, { marginTop: 22 }]}>
            Adicionar membros
          </Text>

          <View style={styles.memberRow}>
            <TextInput
              style={styles.memberInput}
              placeholder="Carteirinha"
              placeholderTextColor="#B8B8B8"
              value={carteirinha}
              onChangeText={setCarteirinha}
              keyboardType="number-pad"
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddMember}
              activeOpacity={0.9}
            >
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>

          {/* Dica */}
          <View style={styles.hintContainer}>
            <Image
              source={require('../../assets/alarmIcon.png')}
              style={styles.hintIcon}
            />
            <Text style={styles.hintText}>
              Coloque o ID da carteirinha sem pontos.
              {'\n'}Confirme cada membro clicando em "Adicionar".
            </Text>
          </View>

          {/* Lista de membros */}
          {members.length > 0 && (
            <View style={styles.membersList}>
              <Text style={styles.membersTitle}>Membros adicionados:</Text>
              {members.map((m) => (
                <View key={m} style={styles.memberItemRow}>
                  <Text style={styles.memberItemText}>• {m}</Text>
                  <TouchableOpacity
                    onPress={() => handleRemoveMember(m)}
                    style={styles.removeButton}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          {/* BOTÃO CADASTRAR */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={salvarGrupo}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Salvando...' : 'Cadastrar grupo'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
