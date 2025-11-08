import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const STATUS = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  // HEADER AZUL COM CANTO ARREDONDADO
  header: {
    width: '100%',
    backgroundColor: '#0066FF',
    paddingTop: STATUS + 14,
    paddingBottom: 16,
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

  // CONTEÚDO PRINCIPAL
  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#151515',
    textAlign: 'center',
    marginBottom: 28,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 6,
  },

  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000000',
  },

  // Linha de adicionar membros
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  memberInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
    marginRight: 10,
  },

  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#0066FF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  // Dica abaixo da linha
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },

  hintIcon: {
    width: 24,
    height: 24,
    marginRight: 6,
    resizeMode: 'contain',
  },

  hintText: {
    fontSize: 10,
    color: '#888888',
    lineHeight: 13,
    flex: 1,
  },

  // Lista de membros adicionados
  membersList: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  membersTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 4,
  },

  memberItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 4,
  },

  memberItemText: {
    fontSize: 12,
    color: '#333333',
  },

  removeButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF4D4D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  // BOTÃO
  button: {
    marginTop: 40,
    width: width - 48,
    alignSelf: 'center',
    backgroundColor: '#0066FF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
