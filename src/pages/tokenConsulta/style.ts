import { StyleSheet } from 'react-native';

const AZUL = '#0066FF';
const BRANCO = '#FFF';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AZUL,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 3,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: BRANCO,
    marginRight: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: BRANCO,
    textAlign: 'center',
    marginRight: 30,
  },

  /** CARTEIRINHA - CARTÃO FINO */
  cardCarteirinha: {
    backgroundColor: BRANCO,
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  cardTopRow: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 4,
  },
  cardLogoText: {
    fontSize: 22,
    fontWeight: '700',
    color: AZUL,
  },

  cardBlueStrip: {
    backgroundColor: AZUL,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: BRANCO,
    letterSpacing: 1,
  },

  cardInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 4,
  },
  cardLabel: {
    fontSize: 11.5,
    fontWeight: '700',
    color: AZUL,
    marginRight: 4,
  },
  cardValue: {
    fontSize: 11.5,
    color: '#111',
    flexShrink: 1,
  },

  /** CARD DO TOKEN */
  card: {
    backgroundColor: BRANCO,
    marginTop: 18,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tokenIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: AZUL,
    marginRight: 12,
  },
  tokenValue: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#111',
  },
  helperText: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },

  footerRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerLabel: {
    fontSize: 13,
    color: '#555',
  },
  timerValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
    marginLeft: 4,
  },
  refreshBtn: {
    marginLeft: 'auto',
    backgroundColor: AZUL,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  refreshText: {
    color: BRANCO,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
