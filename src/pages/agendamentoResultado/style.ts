import { StyleSheet } from 'react-native';

const AZUL = '#0066FF';
const BRANCO = '#FFF';
const CINZA = '#B8C0CC';

export default StyleSheet.create({
  /* ===== Layout base ===== */
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  /* ===== Header ===== */
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

  /* ===== Card de informação (perfil/clinica) ===== */
  boxInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BRANCO,
    paddingHorizontal: 20,
    padding: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    zIndex: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  perfil: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  nomeUnidade: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  tipoConsulta: {
    fontSize: 13,
    color: '#666',
  },

  /* ===== Título da seção ===== */
  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 40,
    color: '#333',
  },

  /* ===== Filtros (Todos/Manhã/Tarde/Noite) ===== */
  filtros: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  filtroBtnBase: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: 90,
    gap: 6,
  },
  filtroBtnTodos: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  filtroBtnSelected: {
    backgroundColor: BRANCO,
    borderWidth: 2,
    borderColor: AZUL,
    elevation: 2,
  },
  filtroBtnUnselected: {
    backgroundColor: AZUL,
    borderWidth: 0,
  },

  filtroIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  filtroIconSelected: { tintColor: AZUL },
  filtroIconUnselected: { tintColor: BRANCO },

  filtroTextSelected: {
    fontSize: 13,
    fontWeight: 'bold',
    color: AZUL,
  },
  filtroTextUnselected: {
    fontSize: 13,
    fontWeight: 'bold',
    color: BRANCO,
  },

  /* ===== Lista e cards de datas ===== */
  listaDatas: {
    paddingHorizontal: 20,
    paddingBottom: 160,
  },
  dataCard: {
    backgroundColor: BRANCO,
    height: 120,
    width: 160,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  dataCardSelected: {
    borderColor: AZUL,
    shadowOpacity: 0.15,
    transform: [{ scale: 1.02 }],
  },
  semana: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
    textAlign: 'center',
  },
  semanaSelected: { color: AZUL },
  dia: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  diaSelected: { color: AZUL },
  turno: { marginTop: 6, fontSize: 12, color: '#666' },
  turnoSelected: { color: AZUL, fontWeight: 'bold' },


  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60,
    paddingHorizontal: 20,
  },
  cta: {
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaEnabled: { backgroundColor: AZUL, elevation: 2 },
  ctaDisabled: { backgroundColor: CINZA },
  ctaText: { fontSize: 16, fontWeight: 'bold' },
  ctaTextEnabled: { color: BRANCO },
  ctaTextDisabled: { color: '#EEE' },
});
