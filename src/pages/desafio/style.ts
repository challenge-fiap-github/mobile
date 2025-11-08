import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUS = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
const BLUE_H = Math.round(height * 0.22);
const AVATAR = 160;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  /** HEADER AZUL ESCURO (padrão Odonto Game) */
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: BLUE_H + STATUS,
    paddingTop: STATUS + 14,
    paddingHorizontal: 16,
    backgroundColor: '#0066FF',
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
    textAlign: 'center',
  },

  /** AVATAR SOBREPOSTO */
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
  },
  avatarImg: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    resizeMode: 'cover',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    backgroundColor: '#D9D9D9',
  },

  /** CONTAINER DOS CARDS */
  cardsContainer: {
    flex: 1,
    paddingTop: BLUE_H + AVATAR / 2 + 12,
    paddingHorizontal: 16,
  },

  cardWrapper: {
    marginBottom: 18,
    borderRadius: 24,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageRadius: {
    borderRadius: 24,
  },

  cardOverlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.18)', // leve escurecida pra destacar o texto
  },

  cardTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fdfdfdff',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
  },
});
