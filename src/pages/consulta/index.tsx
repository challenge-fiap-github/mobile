import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const consultas = [
  {
    doutor: 'Dr. nome do doutor',
    tipo: 'Consulta limpeza',
    pontos: 200,
    data: '24/02/2025',
  },
  {
    doutor: 'Dr. nome do doutor',
    tipo: 'Consulta limpeza',
    pontos: 200,
    data: '12/07/2024',
  },
  {
    doutor: 'Dr. nome do doutor',
    tipo: 'Consulta periódica',
    pontos: 150,
    data: '22/06/2024',
  },
];

export default function Consulta() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pontos de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Card do usuário */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Nome</Text>
          <Text style={styles.userScore}>Pontuação: xxxxx</Text>
        </View>
        <View style={styles.profileCircle}>
          <Image
            source={require('../../assets/fotoPerfil.png')}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Lista de pontos */}
      <FlatList
        data={consultas}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.consultaList}
        renderItem={({ item }) => (
          <View style={styles.consultaItem}>
            <View style={styles.consultaInfo}>
              <Text style={styles.doutor}>{item.doutor}</Text>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
            <View style={styles.pontosBox}>
              <Text style={styles.pontos}>Pontos: <Text style={{ color: 'green' }}>+{item.pontos}</Text></Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
