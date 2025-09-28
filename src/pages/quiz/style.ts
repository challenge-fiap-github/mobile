import { StyleSheet } from 'react-native';

const CARD_PAD = 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0D9FF',
  },

  // === SEU MODELO DE HEADER (copiado) ===
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066FF',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
    marginRight: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginRight: 30,
  },

  // CONTEÚDO
  content: {
    padding: 20,
    alignItems: 'center',
  },

  // PERGUNTA
  question: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: '#0A0A0A',
    marginBottom: 20,
  },

  // CARTÃO BRANCO DAS OPÇÕES
  optionsCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: CARD_PAD,

    // sombra suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },

  // OPÇÃO (pílula cinza)
  option: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },

  // RESULTADO
  resultCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: CARD_PAD,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  resultLine: {
    fontSize: 18,
    marginTop: 6,
  },
  primaryBtn: {
    marginTop: 16,
    backgroundColor: '#0A62FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  primaryBtnText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
