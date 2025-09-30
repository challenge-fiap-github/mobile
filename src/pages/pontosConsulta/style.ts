import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
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
  consultaList: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  consultaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
  },
  consultaInfo: {
    flex: 1,
  },
  doutor: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  tipo: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  data: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  pontosBox: {
    marginLeft: 16,
  },
  pontos: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
});

export default styles;
