import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const shortcuts = [
  { icon: require('../../assets/redeIcon.png'), label: 'Rede Credenciada', route: 'BuscaRede' },
  { icon: require('../../assets/gameIcon.png'), label: 'OdontoGame', route: 'Game' },
  { icon: require('../../assets/agendamentoIcon.png'), label: 'Agendamento', customSize: 22, route: 'Agendamento' },
  { icon: require('../../assets/coberturaIcon.png'), label: 'Cobertura', route: 'Cobertura' },
  { icon: require('../../assets/faleConoscoIcon.png'), label: 'Fale Conosco', route: 'FaleConosco' },
  { icon: require('../../assets/usuarioAcessoIcon.png'), label: 'Usuário', route: 'DadosPessoais' },
];

const bottomTabs = [
  { key: 'Inicio', icon: require('../../assets/inicioIcon.png'), label: 'Início' },
  { key: 'Plano', icon: require('../../assets/planoIcon.png'), label: 'Plano' },
  { key: 'Token', icon: require('../../assets/tokenIcon.png'), label: 'Token' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState('Inicio');
  const scale = useRef(new Animated.Value(1)).current;

  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      const uri = await AsyncStorage.getItem('profileImage');
      if (uri) setProfileImage(uri);
    };
    loadImage();
  }, []);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('Permissão negada para acessar fotos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setProfileImage(uri);
      await AsyncStorage.setItem('profileImage', uri);
    }
  };

  const handleEditProfileImage = () => {
    Alert.alert('Imagem de Perfil', 'O que deseja fazer?', [
      { text: 'Selecionar nova foto', onPress: pickImage },
{
  text: 'Remover foto',
  onPress: async () => {
    setProfileImage(null); // Remove imagem
    await AsyncStorage.removeItem('profileImage');
  },
  style: 'destructive',
},
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const carouselImages = [
    require('../../assets/homeImage1.png'),
    require('../../assets/homeImage2.png'),
    require('../../assets/homeImage3.png'),
  ];

  const scrollRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselImages.length;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

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

  const handlePress = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  const renderShortcut = ({ item }: any) => (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => handlePress(item.route)}
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

      {/* Card do usuário */}
      <View style={styles.userCard}>
        <Text style={styles.userName}>Olá, Nome</Text>
        <Text style={styles.userPlan}>PLANO DENTAL</Text>
        <Text style={styles.userPlanNumber}>DENTAL XXX XX XXXXX</Text>
        <Text style={styles.cardNumber}>n° carteirinha</Text>

        <TouchableOpacity style={styles.profileCircle} onPress={handleEditProfileImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image
              source={require('../../assets/fotoPerfil.png')}
              style={styles.cameraIconOnly}
            />
          )}
        </TouchableOpacity>
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
        decelerationRate="fast"
        snapToInterval={100}
      />

      {/* Carrossel */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 20 }}
      >
        {carouselImages.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{
              width: width - 40,
              height: 160,
              marginHorizontal: 20,
              borderRadius: 16,
              resizeMode: 'cover',
            }}
          />
        ))}
      </ScrollView>

      {/* Bottom Tab */}
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
