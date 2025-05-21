// src/pages/pontuacao/index.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function PontuacaoConsulta() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      const uri = await AsyncStorage.getItem('profileImage');
      if (uri) setProfileImage(uri);
    };
    loadImage();
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pontos de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Card do usuário */}
      <View style={styles.userCard}>
        <View>
          <Text style={styles.userName}>Nome</Text>
          <Text style={styles.userScore}>Pontuação: xxxxx</Text>
        </View>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Image source={require('../../assets/fotoPerfil.png')} style={styles.profileImage} />
        )}
      </View>

      {/* Lista de Pontuação (simulado) */}
      <ScrollView style={styles.scrollArea}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.pointCard}>
            <View>
              <Text style={styles.doctorName}>Dr. nome do doutor</Text>
              <Text style={styles.procedure}>Consulta limpeza</Text>
            </View>
            <View style={styles.pointRight}>
              <Text style={styles.points}>+200</Text>
              <Text style={styles.date}>24/02/2025</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
