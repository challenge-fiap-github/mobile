// src/pages/clinica/index.tsx

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ListRenderItem,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import type { ImageSourcePropType } from 'react-native';

type Dentist = {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  image: ImageSourcePropType;
};

const DENTISTS: Dentist[] = [
  {
    id: '1',
    name: 'Dr. Lucas Yamamoto',
    location: 'São Paulo - Tatuapé',
    specialty: 'Clínico, bucomaxilar, bruxismo, ATM',
    rating: 4.8,
    image: require('../../assets/doutorLucas.png'),
  },
  {
    id: '2',
    name: 'Dra. Juliana Costa',
    location: 'São Paulo - Carrão',
    specialty: 'Clínico, restauração, limpeza, cárie',
    rating: 4.7,
    image: require('../../assets/doutoraJuliana.png'),
  },
  {
    id: '3',
    name: 'Dr. Henrique Duarte',
    location: 'São Paulo - Moema',
    specialty: 'Cirurgião, especialista em maxilar',
    rating: 4.8,
    image: require('../../assets/doutorHenrique.png'),
  },
  {
    id: '4',
    name: 'Dr. Tiago Fernandes',
    location: 'São Paulo - Anália Franco',
    specialty: 'Implante dentário e reconstrução',
    rating: 4.5,
    image: require('../../assets/doutorTiago.png'),
  },
  {
    id: '5',
    name: 'Dr. Rafael Monteiro',
    location: 'São Paulo - Moema',
    specialty: 'Cirurgia ortognática',
    rating: 4.9,
    image: require('../../assets/doutorRafael.png'),
  },
  {
    id: '6',
    name: 'Dra. Marina Albuquerque',
    location: 'São Paulo - Moema',
    specialty: 'Especialista em câncer de boca',
    rating: 5.0,
    image: require('../../assets/doutoraMarina.png'),
  },
  {
    id: '7',
    name: 'Dra. Letícia Andrade',
    location: 'São Paulo - Penha',
    specialty: 'Ortodontia, alinhadores estéticos e estética do sorriso',
    rating: 4.6,
    image: require('../../assets/doutoraLeticia.png'),
  },
  {
    id: '8',
    name: 'Dr. Jaime Rocha',
    location: 'São Paulo - Itaquera',
    specialty: 'Endodontia, tratamento de canal e urgências',
    rating: 4.7,
    image: require('../../assets/doutorJaime.png'),
  },
];

export default function Clinica() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [search, setSearch] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const filteredDentists = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return DENTISTS;
    return DENTISTS.filter((d) => {
      const text = `${d.name} ${d.location} ${d.specialty}`.toLowerCase();
      return text.includes(term);
    });
  }, [search]);

  const renderItem: ListRenderItem<Dentist> = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardName}>{item.name}</Text>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingStar}>★</Text>
            <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
          </View>
        </View>
        <Text style={styles.cardLocation}>{item.location}</Text>
        <Text style={styles.cardSpecialty}>{item.specialty}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Clínicas</Text>

        {/* Espaçador */}
        <View style={{ width: 24 }} />
      </View>

      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/searchIcon.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Busca"
          placeholderTextColor="#A0A0A0"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Lista de profissionais */}
      <FlatList
        data={filteredDentists}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
