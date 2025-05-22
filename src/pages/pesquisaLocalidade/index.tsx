import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from './style';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type BuscarLocalidadeRouteProp = RouteProp<RootStackParamList, 'BuscarLocalidade'>;

export default function BuscarLocalidade() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<BuscarLocalidadeRouteProp>();

  const { estadoSelecionado, cidadeSelecionada, bairroSelecionado } = route.params || {};

  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');

  useEffect(() => {
    if (estadoSelecionado) setEstado(estadoSelecionado);
    if (cidadeSelecionada) setCidade(cidadeSelecionada);
    if (bairroSelecionado) setBairro(bairroSelecionado);
  }, [estadoSelecionado, cidadeSelecionada, bairroSelecionado]);

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  const handleSelectEstado = () => {
    navigation.navigate('SelecionarEstado');
  };

  const handleSelectCidade = () => {
    if (estado) {
      navigation.navigate('SelecionarCidade', { estadoSelecionado: estado });
    }
  };

  const handleSelectBairro = () => {
    if (estado && cidade) {
      navigation.navigate('SelecionarBairro', {
        estadoSelecionado: estado,
        cidadeSelecionada: cidade,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pesquisar por localidade</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.searchBox}>
        <View style={styles.searchHeader}>
          <Image source={require('../../assets/pesquisaLocalidade.png')} style={styles.searchIcon} />
          <Text style={styles.searchTitle}>Selecione a localidade desejada nos campos abaixo</Text>
        </View>

        <Text style={styles.inputLabel}>Estado</Text>
        <TouchableOpacity onPress={handleSelectEstado}>
          <TextInput
            placeholder="Selecione o Estado"
            placeholderTextColor="#9A9A9A"
            style={styles.input}
            value={estado}
            editable={false}
          />
        </TouchableOpacity>

        <Text style={styles.inputLabel}>Cidade</Text>
        <TouchableOpacity onPress={handleSelectCidade}>
          <TextInput
            placeholder="Selecione a Cidade"
            placeholderTextColor="#9A9A9A"
            style={styles.input}
            value={cidade}
            editable={false}
          />
        </TouchableOpacity>

        <Text style={styles.inputLabel}>Bairro</Text>
        <TouchableOpacity onPress={handleSelectBairro}>
          <TextInput
            placeholder="Selecione o Bairro"
            placeholderTextColor="#9A9A9A"
            style={styles.input}
            value={bairro}
            editable={false}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBuscar}>
          <Text style={styles.buttonBuscarText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
