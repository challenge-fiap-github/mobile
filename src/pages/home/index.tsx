import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
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

export default function HomeScreen() {
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
      friction: 3,
      tension: 40,
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
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/DrawerIcon.png')} style={styles.drawerIcon} />
        <Image source={require('../../assets/logoPequeno.png')} style={styles.logoPequeno} />
      </View>

      {/* Card do Usuário */}
      <View style={styles.userCard}>
        <Text style={styles.userName}>Olá, Nome</Text>
        <Text style={styles.userPlan}>PLANO DENTAL</Text>
        <Text style={styles.userPlanNumber}>DENTAL XXX XX XXXXX</Text>
        <Text style={styles.cardNumber}>n° carteirinha</Text>
        <View style={styles.profileCircle} />
      </View>

      {/* Acesso Rápido */}
      <Text style={styles.accessText}>Acesso Rápido</Text>
      <FlatList
        data={shortcuts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderShortcut}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.quickAccessContainer}
        snapToAlignment="start"
        snapToInterval={100}
        decelerationRate="fast"
      />
    </View>
  );
}
