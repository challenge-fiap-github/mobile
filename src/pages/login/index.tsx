import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './style';

export default function login() {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerCentral}>
        <Image source={require('../../assets/logoLogin.png')} style={styles.logo} />

        {/* Label Acesso */}
        <Text style={styles.label}>Acesso</Text>
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/userIcon.png')} style={styles.icon} />
          <TextInput
            placeholder="Digite seu CPF"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        {/* Label Senha */}
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/passwordIcon.png')} style={styles.icon} />
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Nunca acessou nosso aplicativo?</Text>
        <TouchableOpacity style={styles.primeiroAcesso}>
          <Text style={styles.primeiroAcessoTexto}>Faça seu primeiro acesso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
