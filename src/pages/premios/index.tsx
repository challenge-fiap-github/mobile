import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

export default function Premios() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

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
        <Text style={styles.headerTitle}>Prêmios</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Card do usuário */}
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Nome</Text>
          <View style={styles.moedaContainer}>
            <Image
              source={require('../../assets/odontoCoin.png')}
              style={styles.moedaIcon}
            />
            <Text style={styles.moedaTexto}>X X X</Text>
          </View>
        </View>
        <View style={styles.profileCircle}>
          <Image
            source={require('../../assets/fotoPerfil.png')}
            style={styles.profileImage}
          />
        </View>
      </View>

      <Text style={styles.infoText}>Aqui você troca seus pontos por prêmios</Text>
    </View>
  );
}
