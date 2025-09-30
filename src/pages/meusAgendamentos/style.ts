import { StyleSheet } from 'react-native';

const AZUL = '#0066FF';
const BRANCO = '#FFF';
const CINZA = '#B8C0CC';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  /* Header igual às outras telas */
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

  /* Lista / vazio */
  listaConteudo: {
    padding: 20,
    paddingBottom: 20,
  },
  loadingBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyBox: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIcon: {
    width: 72,
    height: 72,
    opacity: 0.6,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 6,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 18,
    textAlign: 'center',
  },

  /* Card */
  card: {
    backgroundColor: BRANCO,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    elevation: 3,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardIcon: {
    width: 28,
    height: 28,
    tintColor: AZUL,
    resizeMode: 'contain',
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 2,
  },
  cardLinha: {
    fontSize: 13,
    color: '#333',
  },
  cardClinica: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  cardRodape: {
    marginTop: 10,
    fontSize: 11,
    color: '#666',
  },

  /* CTA padrão azul */
  cta: {
    height: 48,
    borderRadius: 14,
    paddingHorizontal: 18,
    backgroundColor: AZUL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    color: BRANCO,
    fontWeight: 'bold',
  },
});
