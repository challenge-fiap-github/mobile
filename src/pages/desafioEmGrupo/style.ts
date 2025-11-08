import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// MESMA BASE DO GAME
const STATUS = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;
const BLUE_H  = Math.round(height * 0.28);
const AVATAR  = 180;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },

  /** HEADER AZUL ESCURO - igual Game */
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: BLUE_H + STATUS,
    paddingTop: STATUS + 14,
    paddingHorizontal: 16,
    backgroundColor: '#0A62FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    zIndex: 10,
  },
  navIcon: {
    width: 22,
    height: 22,
    tintColor: '#FFFFFF',
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  /** AVATAR SOBREPOSTO - igual Game */
  avatarWrapper: {
    position: 'absolute',
    top: BLUE_H - AVATAR / 2,
    width,
    alignItems: 'center',
    zIndex: 20,
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: '#D9D9D9',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarImg: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    resizeMode: 'cover',
    backgroundColor: '#D9D9D9',
  },

  /** CARDS ABAIXO DO AVATAR */
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    // empurra os cards para começar depois do avatar sobreposto
    paddingTop: BLUE_H + AVATAR / 2 + 24,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 20,

    minHeight: 110,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 13,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 18,
  },
});
