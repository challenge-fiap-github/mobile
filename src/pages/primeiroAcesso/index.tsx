import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default function PrimeiroAcesso() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        <Text style={styles.headerTitle}>Primeiro Acesso</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          Faça seu cadastro inicial{"\n"}como Cliente Odontoprev
        </Text>

        <Text style={styles.section}>Preencha com seus dados pessoais</Text>

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          placeholderTextColor="#9A9A9A"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#9A9A9A"
        />

        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="00/00/0000"
          placeholderTextColor="#9A9A9A"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(00)00000-0000"
          placeholderTextColor="#9A9A9A"
        />

        <Text style={styles.section}>Escolha sua Senha</Text>

        <View style={styles.warningBox}>
          <Image source={require('../../assets/alarmIcon.png')} style={styles.warningIcon} />
          <Text style={styles.warningText}>
            A sua senha de acesso deve ter entre 8 a 15 caracteres
          </Text>
        </View>

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#9A9A9A"
          secureTextEntry
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#9A9A9A"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
