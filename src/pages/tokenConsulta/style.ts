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

  // Card
  card: {
    backgroundColor: BRANCO,
    marginTop: 24,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 18,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  tokenIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: AZUL,
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

  // Footer do card
  footerRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timerLabel: {
    fontSize: 13,
    color: '#555',
  },
  timerValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
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
