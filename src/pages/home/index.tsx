// index.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './style';

const shortcuts = [
  { icon: require('../../assets/redeIcon.png'), label: 'Rede Credenciada' },
  { icon: require('../../assets/gameIcon.png'), label: 'Odonto\nGame' },
  { icon: require('../../assets/agendamentoIcon.png'), label: 'Agendamento', customSize: 22 },
  { icon: require('../../assets/coberturaIcon.png'), label: 'Cobertura\ne Carência' },
  { icon: require('../../assets/faleConoscoIcon.png'), label: 'Fale Conosco' },
  { icon: require('../../assets/usuarioAcessoIcon.png'), label: 'Usuário' },
];

const bottomTabs = [
  { key: 'Inicio', icon: require('../../assets/inicioIcon.png'), label: 'Início' },
  { key: 'Plano', icon: require('../../assets/planoIcon.png'), label: 'Plano' },
  { key: 'Token', icon: require('../../assets/tokenIcon.png'), label: 'Token' },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Inicio');
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.93,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = (label: string) => {
    console.log(`Clicou em: ${label}`);
  };

  const renderShortcut = ({ item }: any) => (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => handlePress(item.label)}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.quickItem, { transform: [{ scale }] }]}>
        <View style={styles.quickButton}>
          <Image
            source={item.icon}
            style={
              item.customSize
                ? { width: item.customSize, height: item.customSize }
                : styles.quickIcon
            }
          />
        </View>
        <Text style={styles.quickText}>{item.label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/DrawerIcon.png')} style={styles.drawerIcon} />
        <Image source={require('../../assets/logoPequeno.png')} style={styles.logoPequeno} />
      </View>

      <View style={styles.userCard}>
        <Text style={styles.userName}>Olá, Nome</Text>
        <Text style={styles.userPlan}>PLANO DENTAL</Text>
        <Text style={styles.userPlanNumber}>DENTAL XXX XX XXXXX</Text>
        <Text style={styles.cardNumber}>n° carteirinha</Text>
        <View style={styles.profileCircle} />
      </View>

      <Text style={styles.accessText}>Acesso Rápido</Text>
      <FlatList
        data={shortcuts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderShortcut}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.quickAccessContainer}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={100}
      />

      {/* Bottom Menu */}
      <View style={styles.bottomTabContainer}>
        {bottomTabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabItem, isActive && styles.tabItemActive]}
              onPress={() => setActiveTab(tab.key)}
              activeOpacity={0.8}
            >
              <Image source={tab.icon} style={styles.tabIcon} />
              {isActive && <Text style={styles.tabLabel}>{tab.label}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
