// index.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from './style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Azul com Ícone Drawer e Logo */}
      <View style={styles.header}>
        <Image source={require('../../assets/DrawerIcon.png')} style={styles.drawerIcon} />
        <Image source={require('../../assets/logoPequeno.png')} style={styles.logoPequeno} />
      </View>

      {/* Bloco Branco com Informações do Usuário */}
      <View style={styles.userCard}>
        <Text style={styles.userName}>Olá, Nome</Text>
        <Text style={styles.userPlan}>PLANO DENTAL</Text>
        <Text style={styles.userPlanNumber}>DENTAL XXX XX XXXXX</Text>
        <Text style={styles.cardNumber}>n° carteirinha</Text>
        <View style={styles.profileCircle} />
      </View>

      {/* Acesso Rápido */}
      <Text style={styles.accessText}>Acesso Rápido</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.quickAccessContainer}
      >
        <View style={styles.quickItem}>
          <View style={styles.quickButton}>
            <Image source={require('../../assets/redeIcon.png')} style={styles.quickIcon} />
          </View>
          <Text style={styles.quickText}>Rede Credenciada</Text>
        </View>

        <View style={styles.quickItem}>
          <View style={styles.quickButton}>
            <Image source={require('../../assets/gameIcon.png')} style={styles.quickIcon} />
          </View>
          <Text style={styles.quickText}>Odonto{'\n'}Game</Text>
        </View>

        <View style={styles.quickItem}>
          <View style={styles.quickButton}>
            <Image source={require('../../assets/agendamentoIcon.png')} style={styles.quickIcon} />
          </View>
          <Text style={styles.quickText}>Agendamento</Text>
        </View>
      </ScrollView>
    </View>
  );
}
