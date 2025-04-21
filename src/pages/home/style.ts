// style.ts
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
    paddingBottom: 15,
  },
  drawerIcon: {
    width: 25,
    height: 18,
    marginTop: -10,
  },
  logoPequeno: {
    width: 140,        // aumentei o tamanho
    height: 50,        // aumentei um pouco a altura
    resizeMode: 'contain',
    alignSelf: 'center', // centraliza horizontalmente
    marginTop: -10,
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
    marginTop: -10,
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
    width: width,
    height: 180,
    alignSelf: 'center',
    position: 'relative',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userPlan: {
    fontSize: 14,
    color: '#444',
  },
  userPlanNumber: {
    fontSize: 14,
    color: '#444',
  },
  cardNumber: {
    fontSize: 13,
    color: '#666',
    marginTop: 8,
  },
  profileCircle: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DDD',
  },
  accessText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  quickAccessContainer: {
    paddingLeft: 20,
    paddingRight: 10,
    gap: 25
  },
  quickItem: {
    alignItems: 'center',
    marginRight: 30, // antes era 20
  },
  quickButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 5,
  },

  
  quickIcon: {
    width: 30,
    height: 30,
  },
  quickText: {
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 80,
  },
});

export default styles;
