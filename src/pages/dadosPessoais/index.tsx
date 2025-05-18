// src/pages/dadosPessoais/index.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function DadosPessoais() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dados pessoais</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View style={styles.headerCard}>
            <Image source={require('../../assets/informacoesIcon.png')} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Informações pessoais</Text>
          </View>

          <View style={styles.planInfo}>
            <View>
              <Text style={styles.planText}>PLANO DENTAL</Text>
              <Text style={styles.planText}>DENTAL XXX XX XXXXX</Text>
            </View>
            <View style={styles.carteirinhaBox}>
              <Image source={require('../../assets/carteirinhaIcon.png')} style={styles.carteirinhaIcon} />
              <Text style={styles.carteirinhaText}>n° carteirinha</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da cliente"
            placeholderTextColor="#9A9A9A"
            editable={true}
          />

          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="20/08/1999"
            placeholderTextColor="#9A9A9A"
            editable={true}
          />

          <Text style={styles.label}>Sexo</Text>
          <TextInput
            style={styles.input}
            placeholder="Masculino"
            placeholderTextColor="#9A9A9A"
            editable={true}
          />

          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="111.555.555-55"
            placeholderTextColor="#9A9A9A"
            editable={true}
          />

          <View style={styles.infoBox}>
            <Image source={require('../../assets/dadosIcon.png')} style={styles.warningIcon} />
            <Text style={styles.warningText}>
              Se deseja atualizar dados de campos que não possibilitam a alteração, entre em contato.
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
