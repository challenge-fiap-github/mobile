import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  header: {
    width: '100%',
    backgroundColor: '#0066FF',
    paddingTop: 40,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 24,
  },

  content: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },

  doctorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#DDD',
    marginBottom: 12,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    marginBottom: 18,
    textAlign: 'center',
  },

  separator: {
    width: width - 48,
    height: 1,
    backgroundColor: '#333',
    marginBottom: 18,
  },

  question: {
    width: '100%',
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    marginBottom: 8,
  },

  /** Linha dos botões (alinhados com o texto) */
  reactionRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  /** Botões Gostei / Não gostei */
  reactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    marginRight: 10,
  },
  reactionButtonSelectedPositive: {
    backgroundColor: '#E0F8E9',
    borderColor: '#22C55E',
  },
  reactionButtonSelectedNegative: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },

  reactionIconSmall: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 6,
  },
  reactionText: {
    fontSize: 13,
    color: '#222',
    fontWeight: '500',
  },

  label: {
    width: '100%',
    fontSize: 14,
    color: '#222',
    marginBottom: 6,
  },

  feedbackInput: {
    width: '100%',
    minHeight: 110,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#000',
    marginBottom: 22,
  },

  starsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    fontSize: 36, // maior
    marginHorizontal: 6,
  },
  starActive: {
    color: '#FFD700',
  },
  starInactive: {
    color: '#CCCCCC',
  },

  confirmButton: {
    marginTop: 4,
    width: '100%',
    backgroundColor: '#0066FF',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
