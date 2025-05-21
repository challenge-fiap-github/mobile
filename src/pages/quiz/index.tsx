import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const TODAS_PERGUNTAS = [
  {
    pergunta: 'Quantas vezes ao dia é recomendado escovar os dentes?',
    alternativas: ['1 vez', '2 a 3 vezes', '4 vezes', 'Apenas após o jantar'],
    resposta: '2 a 3 vezes',
  },
  {
    pergunta: 'Qual item é essencial para limpar entre os dentes?',
    alternativas: ['Fio dental', 'Escova de cabelo', 'Pasta de dente', 'Enxaguante'],
    resposta: 'Fio dental',
  },
  {
    pergunta: 'O que o enxaguante bucal combate?',
    alternativas: ['Cáries', 'Mau hálito', 'Placa bacteriana', 'Todas as anteriores'],
    resposta: 'Todas as anteriores',
  },
  {
    pergunta: 'Qual o tempo mínimo para uma escovação eficiente?',
    alternativas: ['30 segundos', '1 minuto', '2 minutos', '5 minutos'],
    resposta: '2 minutos',
  },
  {
    pergunta: 'A troca da escova deve ser feita a cada:',
    alternativas: ['1 mês', '3 meses', '6 meses', '1 ano'],
    resposta: '3 meses',
  },
  {
    pergunta: 'O excesso de açúcar pode causar:',
    alternativas: ['Gengivite', 'Cáries', 'Halitose', 'Bruxismo'],
    resposta: 'Cáries',
  },
  {
    pergunta: 'Qual profissional cuida da saúde bucal?',
    alternativas: ['Pediatra', 'Dentista', 'Fisioterapeuta', 'Nutricionista'],
    resposta: 'Dentista',
  },
  {
    pergunta: 'Qual destas ações NÃO é recomendada?',
    alternativas: ['Dormir sem escovar os dentes', 'Usar fio dental', 'Escovar após refeições', 'Visitar o dentista regularmente'],
    resposta: 'Dormir sem escovar os dentes',
  },
  {
    pergunta: 'Escovar a língua ajuda a evitar:',
    alternativas: ['Cáries', 'Placa', 'Mau hálito', 'Gengivite'],
    resposta: 'Mau hálito',
  },
  {
    pergunta: 'Qual a função da saliva?',
    alternativas: ['Hidratar', 'Proteger dentes', 'Iniciar digestão', 'Todas as anteriores'],
    resposta: 'Todas as anteriores',
  },
  {
    pergunta: 'Qual o impacto do cigarro na saúde bucal?',
    alternativas: ['Amarelece dentes', 'Causa câncer bucal', 'Mau hálito', 'Todas as anteriores'],
    resposta: 'Todas as anteriores',
  },
  {
    pergunta: 'Beber água ajuda na saúde bucal porque:',
    alternativas: ['Lubrifica', 'Limpa resíduos', 'Estimula saliva', 'Todas as anteriores'],
    resposta: 'Todas as anteriores',
  },
  {
    pergunta: 'Crianças devem ir ao dentista a partir de qual idade?',
    alternativas: ['1 ano', '3 anos', '5 anos', '7 anos'],
    resposta: '1 ano',
  },
  {
    pergunta: 'O uso frequente de balas pode causar:',
    alternativas: ['Alergia', 'Dor de barriga', 'Cáries', 'Gripe'],
    resposta: 'Cáries',
  },
  {
    pergunta: 'Alimentos ricos em cálcio são importantes para:',
    alternativas: ['Ossos e dentes', 'Cabelo', 'Olhos', 'Estômago'],
    resposta: 'Ossos e dentes',
  },
];

export default function Quiz() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [perguntasHoje, setPerguntasHoje] = useState<typeof TODAS_PERGUNTAS>([]);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    const embaralhadas = [...TODAS_PERGUNTAS].sort(() => 0.5 - Math.random());
    setPerguntasHoje(embaralhadas.slice(0, 3));
  }, []);

  const responder = (resposta: string) => {
    const correta = perguntasHoje[indice].resposta;
    if (resposta === correta) {
      setAcertos((prev) => prev + 1);
    } else {
      setErros((prev) => prev + 1);
    }

    if (indice + 1 < perguntasHoje.length) {
      setIndice(indice + 1);
    } else {
      setFinalizado(true);
    }
  };

  const handleBack = () => navigation.goBack();

  if (perguntasHoje.length === 0) return null;

  if (finalizado) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require('../../assets/backIcon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Quiz</Text>
          <View style={{ width: 22 }} />
        </View>
        <View style={styles.content}>
          <Text style={styles.question}>Quiz finalizado!</Text>
          <Text style={{ fontSize: 18, marginTop: 20 }}>✅ Acertos: {acertos}</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>❌ Erros: {erros}</Text>
        </View>
      </View>
    );
  }

  const perguntaAtual = perguntasHoje[indice];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.question}>{perguntaAtual.pergunta}</Text>
        {perguntaAtual.alternativas.map((alt, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => responder(alt)}
          >
            <Text style={styles.optionText}>
              {String.fromCharCode(65 + index)} -) {alt}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
