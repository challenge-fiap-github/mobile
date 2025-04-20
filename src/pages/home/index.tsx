import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';

const acessoRapidoData = [
  { id: '1', label: 'Rede Credenciada', icon: require('../../../assets/redeIcon.png') },
  { id: '2', label: 'Odonto Game', icon: require('../../../assets/gameIcon.png') },
  { id: '3', label: 'Agendamento', icon: require('../../../assets/agendamentoIcon.png') },
];

const menuItems = [
  { id: '1', label: 'Início', icon: require('../../../assets/inicioIcon.png') },
  { id: '2', label: 'Plano', icon: require('../../../assets/planoIcon.png') },
  { id: '3', label: 'Token', icon: require('../../../assets/tokenIcon.png') },
];

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState('1');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../../assets/inicioIcon.png')} style={styles.hamburgerIcon} />
        <Text style={styles.headerTitle}>odontoprev</Text>
      </View>

      {/* Card de Usuário */}
      <View style={styles.userCard}>
        <Text style={styles.userTitle}>Olá, Nome</Text>
        <Text style={styles.userSubtitle}>PLANO DENTAL{'\n'}DENTAL XXX XX XXXXX</Text>
        <Text style={styles.cardNumber}>nº carteirinha</Text>
      </View>

      {/* Acesso Rápido */}
      <Text style={styles.acessoRapidoTitle}>Acesso Rápido</Text>
      <View style={styles.acessoRapidoContainer}>
        {acessoRapidoData.map(item => (
          <View key={item.id} style={styles.acessoRapidoItem}>
            <Image source={item.icon} style={styles.acessoRapidoIcon} />
            <Text style={styles.acessoRapidoText}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Menu de Navegação */}
      <View style={styles.navBar}>
        {menuItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.navItem,
              selectedMenu === item.id && styles.navItemSelected,
            ]}
            onPress={() => setSelectedMenu(item.id)}
          >
            <Image source={item.icon} style={styles.navIcon} />
            <Text
              style={[
                styles.navText,
                selectedMenu === item.id && styles.navTextSelected,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
