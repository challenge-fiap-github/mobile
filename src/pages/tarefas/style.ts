import { StyleSheet, Dimensions, Platform, StatusBar as RNStatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUS = Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0;


const BLUE_H  = Math.round(height * 0.28);
const LIGHT_H = Math.round(height * 0.32);
const AVATAR  = 180;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0D9FF',
  },

  // topo azul escuro
  topBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
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
  navIcon: { width: 22, height: 22, tintColor: '#FFFFFF' },
  appTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },

  // avatar
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

  // bloco azul claro
  headerBlock: {
    marginTop: 160,
    height: LIGHT_H,
    backgroundColor: '#C0D9FF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },

  userInfo: {
    width: '100%',
    alignItems: 'center',
    paddingTop: AVATAR / 2 + 20,
    paddingBottom: 16,
  },
  greeting: { fontSize: 20, color: '#0A0A0A', textAlign: 'center' },
  greetingBold: { fontWeight: '700' },

  scoreRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  coinIcon: { width: 24, height: 24, marginRight: 6, resizeMode: 'contain' },
  scoreText: { fontSize: 18, fontWeight: '700', color: '#1C3B8B' },

  // cards
  cardsRow: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardButton: {
    width: (width - 16 * 2 - 12) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',

    // sombra suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  cardIcon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 16,
    color: '#0B1A3A',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 20,
  },
});
