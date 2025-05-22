import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    const cpfSalvo = await AsyncStorage.getItem('usuarioCPF');
    const senhaSalva = await AsyncStorage.getItem('usuarioSenha');

    if (cpf === cpfSalvo && senha === senhaSalva) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'CPF ou senha inválidos.');
    }
  };

  const handlePrimeiroAcesso = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.ContainerCentral}>
        <Image source={require('../../assets/logoLogin.png')} style={styles.logo} />

        <Text style={styles.label}>Acesso</Text>
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/userIcon.png')} style={styles.icon} />
          <TextInputMask
            type={'cpf'}
            value={cpf}
            onChangeText={setCpf}
            style={styles.input}
            placeholder="Digite seu CPF"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/passwordIcon.png')} style={styles.icon} />
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Nunca acessou nosso aplicativo?</Text>
        <TouchableOpacity style={styles.primeiroAcesso} onPress={handlePrimeiroAcesso}>
          <Text style={styles.primeiroAcessoTexto}>Faça seu primeiro acesso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
