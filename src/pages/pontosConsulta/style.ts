import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  /* HEADER (igual antes) */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066FF',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
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

  /* CARD DO USUÁRIO (igual antes) */
  userCard: {
    backgroundColor: '#FFF',
    width: width,
    marginTop: -20,
    padding: 20,
    borderRadius: 20,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  userScore: {
    fontSize: 13,
    color: '#666',
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DDD',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  /* LISTA DE CONSULTAS (NOVA) */
  consultaList: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  consultaListContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 24,
    backgroundColor: '#E6E6E6',
  },

  consultaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  consultaTextBlock: {
    flex: 1,
  },
  doutor: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    marginBottom: 2,
  },
  tipo: {
    fontSize: 13,
    color: '#444',
  },
  data: {
    fontSize: 12,
    color: '#666',
  },

  avaliarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  avaliarText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  avaliarArrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 4,
  },

  /* DIVISOR ENTRE ITENS */
  divider: {
    height: 1,
    backgroundColor: '#CFCFCF',
    width: '100%',
  },
});

export default styles;
