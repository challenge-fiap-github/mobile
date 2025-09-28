import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  // Header (idêntico ao seu modelo)
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginRight: 30,
  },

  // Card do usuário
  userCard: {
    backgroundColor: '#FFF',
    width,
    marginTop: -15,
    height: 150,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  userInfo: { flex: 1 },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moedaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moedaIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  moedaTexto: {
    fontSize: 18,
    color: '#1C3B8B',
    fontWeight: 'bold',
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

  infoText: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
  },

  // Lista de prêmios
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  rewardItem: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rewardText: {
    fontSize: 15.5,
    color: '#0F172A',
    fontWeight: '600',
  },
  chev: {
    fontSize: 18,
    color: '#94A3B8',
    marginLeft: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#DADDE3',
    marginVertical: 10,
  },
});

export default styles;
