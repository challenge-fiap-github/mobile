import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { RootStackParamList } from '../../navigation/types';

type AvaliacaoRouteProp = RouteProp<RootStackParamList, 'Avaliacao'>;
type Nav = NativeStackNavigationProp<RootStackParamList, 'Avaliacao'>;

const PONTOS_KEY = 'GamePoints';

export default function Avaliacao() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<AvaliacaoRouteProp>();

  const { doutor } = route.params;

  // Mapa de dados do doutor (foto + especialidade)
  const doctorMap: Record<
    string,
    { foto: any; especialidade: string }
  > = {
    'Dr. Thiago Fernandes': {
      foto: require('../../assets/doutorTiago.png'),
      especialidade: 'Implante dentário e reconstrução',
    },
  };

  const selected =
    doctorMap[doutor] || {
      foto: require('../../assets/doutorTiago.png'),
      especialidade: 'Especialista em odontologia',
    };

  const [satisfacao, setSatisfacao] = useState<
    'positivo' | 'negativo' | null
  >(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSetRating = (value: number) => {
    setRating(value);
  };

  const renderStars = () => (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => handleSetRating(star)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.star,
              star <= rating ? styles.starActive : styles.starInactive,
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const handleConfirm = async () => {
    if (!satisfacao || rating === 0) {
      Alert.alert(
        'Atenção',
        'Por favor, informe se gostou do atendimento e distribua as estrelinhas antes de confirmar.'
      );
      return;
    }

    if (submitting) return;
    setSubmitting(true);

    try {
      const storedPoints = await AsyncStorage.getItem(PONTOS_KEY);
      const current = storedPoints ? parseInt(storedPoints, 10) : 0;
      const safeCurrent = Number.isNaN(current) ? 0 : current;
      const newPoints = safeCurrent + 50;

      await AsyncStorage.setItem(PONTOS_KEY, String(newPoints));

      Alert.alert(
        'Obrigado!',
        'Sua avaliação foi registrada e você ganhou +50 moedas.',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch {
      Alert.alert(
        'Ops',
        'Não foi possível salvar sua avaliação agora. Tente novamente.'
      );
    } finally {
      setSubmitting(false);
    }
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
        <Text style={styles.headerTitle}>Avaliação de Consulta</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* FOTO + NOME DO DOUTOR */}
        <Image source={selected.foto} style={styles.doctorImage} />
        <Text style={styles.doctorName}>{doutor}</Text>
        <Text style={styles.doctorSpecialty}>{selected.especialidade}</Text>

        <View style={styles.separator} />

        {/* PERGUNTA */}
        <Text style={styles.question}>Gostou do atendimento?</Text>

        {/* BOTÕES GOSTEI / NÃO GOSTEI */}
        <View style={styles.reactionRow}>
          {/* Gostei */}
          <TouchableOpacity
            style={[
              styles.reactionButton,
              satisfacao === 'positivo' &&
                styles.reactionButtonSelectedPositive,
            ]}
            onPress={() => setSatisfacao('positivo')}
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/postivoIcon.png')}
              style={styles.reactionIconSmall}
            />
            <Text style={styles.reactionText}>Gostei</Text>
          </TouchableOpacity>

          {/* Não gostei */}
          <TouchableOpacity
            style={[
              styles.reactionButton,
              satisfacao === 'negativo' &&
                styles.reactionButtonSelectedNegative,
            ]}
            onPress={() => setSatisfacao('negativo')}
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/negativoIcon.png')}
              style={styles.reactionIconSmall}
            />
            <Text style={styles.reactionText}>Não gostei</Text>
          </TouchableOpacity>
        </View>

        {/* FEEDBACK (OPCIONAL) */}
        <Text style={styles.label}>Feedback:</Text>
        <TextInput
          style={styles.feedbackInput}
          placeholder="Conte pra gente como foi sua experiência..."
          placeholderTextColor="#B5B5B5"
          multiline
          value={feedback}
          onChangeText={setFeedback}
        />

        {/* ESTRELAS */}
        <Text style={styles.starsTitle}>Distribua estrelinhas!</Text>
        {renderStars()}

        {/* BOTÃO CONFIRMAR */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirm}
          activeOpacity={0.9}
        >
          <Text style={styles.confirmButtonText}>
            Confirmar avaliação
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
