import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

const STATUS = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;

/** Proporções para dar a sensação de “quase metade da tela” */
const BLUE_H  = Math.round(height * 0.28);
const LIGHT_H = Math.round(height * 0.32);
const AVATAR  = 180;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },

  /** FAIXA AZUL ESCURO — absoluta e alta */
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
  navIcon: { width: 22, height: 22, tintColor: '#FFFFFF' },
  appTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },

  /** AVATAR SOBREPOSTO ENTRE AS FAIXAS */
  avatarWrapper: {
    position: 'absolute',
    top: BLUE_H - AVATAR / 2,
    width,
    alignItems: 'center',
    zIndex: 20,
  },

  // Versão "placeholder" (sem imagem)
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: '#D9D9D9',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  // Versão com imagem vinda do AsyncStorage (profileImage)
  avatarImg: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    resizeMode: 'cover',
    backgroundColor: '#D9D9D9', // fallback enquanto carrega
  },

  /** BLOCO AZUL-CLARO logo abaixo do azul escuro */
  headerBlock: {
    marginTop: 160,
    height: LIGHT_H,
    backgroundColor: '#C0D9FF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },

  /** TEXTO E MOEDAS centralizados */
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

  /** MENU mais próximo do header */
  menuList: {
    marginTop: 0,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C9CDD5',
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { width: 38, height: 38, marginRight: 14, resizeMode: 'contain' },
  menuLabel: { fontSize: 17, color: '#121212', fontWeight: '600' },
  chev: { fontSize: 18, color: '#94A3B8' },
});
