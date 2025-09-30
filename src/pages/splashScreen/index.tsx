import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const t = setTimeout(() => {
      // @ts-ignore
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#0066FF" barStyle="light-content" />

      {/* Ícone */}
      <Image
        source={require('../../assets/odontoIcon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.brand}>odontoprev</Text>
    </View>
  );
}
