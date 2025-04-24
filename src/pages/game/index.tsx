// index.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';

export default function OdontoGame() {
  return (
    <View style={styles.container}>
      {/* Header com ícones de navegação */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Odonto Game</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/homeIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Pontuação */}
      <Text style={styles.scoreText}>Pontuação: <Text style={styles.scoreX}>X X X</Text></Text>

      {/* Botões principais */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/tarefaIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Tarefas diárias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/consultaIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/indiqueIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Indique e ganhe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/premioIcon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Premiações</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Tutorial */}
      <TouchableOpacity style={styles.tutorialButton}>
        <Text style={styles.tutorialText}>Tutorial</Text>
      </TouchableOpacity>
    </View>
  );
}
