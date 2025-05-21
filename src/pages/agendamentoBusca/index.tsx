import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const especialidades = ['Dentista Geral', 'Ortodontista', 'Implantodontista', 'Endodontista'];
const procedimentos = ['Limpeza', 'Canal', 'Aparelho', 'Implante'];
const unidades = ['Clínica Centro', 'Clínica Norte', 'Clínica Sul'];

export default function AgendamentoBusca() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<string[]>([]);
  const [campoSelecionado, setCampoSelecionado] = useState<'especialidade' | 'procedimento' | 'unidade' | null>(null);

  const [endereco, setEndereco] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [procedimento, setProcedimento] = useState('');
  const [unidade, setUnidade] = useState('');

  const abrirModal = (tipo: typeof campoSelecionado) => {
    setCampoSelecionado(tipo);
    if (tipo === 'especialidade') setModalData(especialidades);
    else if (tipo === 'procedimento') setModalData(procedimentos);
    else if (tipo === 'unidade') setModalData(unidades);
    setModalVisible(true);
  };

  const selecionarItem = (item: string) => {
    if (campoSelecionado === 'especialidade') setEspecialidade(item);
    if (campoSelecionado === 'procedimento') setProcedimento(item);
    if (campoSelecionado === 'unidade') setUnidade(item);
    setModalVisible(false);
  };

  const handleBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agendamento de consulta</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.card}>
        <View style={styles.headerBusca}>
          <Image source={require('../../assets/proximosIcon.png')} style={styles.iconHeader} />
          <Text style={styles.title}>Onde deseja fazer a busca?</Text>
        </View>

        <Text style={styles.label}>Próximo à</Text>
        <View style={styles.inputBox}>
          <Image source={require('../../assets/enderecoIcon.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.inputText}
            placeholder="Digite seu endereço"
            placeholderTextColor="#888"
            value={endereco}
            onChangeText={setEndereco}
          />
        </View>

        <Text style={styles.label}>Especialidade</Text>
        <TouchableOpacity style={styles.inputBox} onPress={() => abrirModal('especialidade')}>
          <Image source={require('../../assets/especialidadeIcon.png')} style={styles.inputIcon} />
          <Text style={styles.inputText}>
            {especialidade || 'Selecione a especialidade'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Procedimento</Text>
        <TouchableOpacity style={styles.inputBox} onPress={() => abrirModal('procedimento')}>
          <Image source={require('../../assets/plusIcon.png')} style={styles.inputIcon} />
          <Text style={styles.inputText}>
            {procedimento || 'Escolha o procedimento'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Unidades</Text>
        <TouchableOpacity style={styles.inputBox} onPress={() => abrirModal('unidade')}>
          <Image source={require('../../assets/plusIcon.png')} style={styles.inputIcon} />
          <Text style={styles.inputText}>
            {unidade || 'Selecione a Unidade'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonContinuar}>
        <Text style={styles.textContinuar}>Continuar</Text>
        <Text style={styles.seta}>→</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <FlatList
              data={modalData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => selecionarItem(item)}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
