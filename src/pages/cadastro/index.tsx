import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleBack = () => {
    navigation.navigate('Login');
  };

  const handleCadastro = async () => {
    if (!nome || !cpf || !email || !dataNascimento || !telefone || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      await AsyncStorage.setItem('usuarioNome', nome);
      await AsyncStorage.setItem('usuarioCPF', cpf);
      await AsyncStorage.setItem('usuarioSenha', senha);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
      return;
    }

    Alert.alert('Sucesso', 'Cadastrado com sucesso!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Primeiro Acesso</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Faça seu cadastro inicial{"\n"}como Cliente Odontoprev</Text>

        <Text style={styles.sectionTitle}>Preencha com seus dados pessoais</Text>

        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          placeholder="Seu nome completo"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>CPF</Text>
        <TextInputMask
          type={'cpf'}
          value={cpf}
          onChangeText={setCpf}
          style={styles.input}
          placeholder="000.000.000-00"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Data de nascimento</Text>
        <TextInputMask
          type={'datetime'}
          options={{ format: 'DD/MM/YYYY' }}
          value={dataNascimento}
          onChangeText={setDataNascimento}
          style={styles.input}
          placeholder="00/00/0000"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99)',
          }}
          value={telefone}
          onChangeText={setTelefone}
          style={styles.input}
          placeholder="(00)00000-0000"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />

        <Text style={styles.sectionTitle}>Escolha sua Senha</Text>

        <View style={styles.alertRow}>
          <Image
            source={require('../../assets/senhaIcon.png')}
            style={styles.alertIcon}
          />
          <Text style={styles.alertText}>A sua senha de acesso deve ter entre 8 a 15 caracteres</Text>
        </View>

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity style={styles.buttonCadastrar} onPress={handleCadastro}>
          <Text style={styles.textButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}