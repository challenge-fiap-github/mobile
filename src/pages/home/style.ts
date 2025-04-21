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
    width: 140,
    height: 45,
    resizeMode: 'contain',
    marginLeft: -15,
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
  },
  quickItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginRight: 25,
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
bottomTabContainer: {
  flexDirection: 'row',
  backgroundColor: '#002255',
  borderRadius: 50,
  marginHorizontal: 30,
  marginBottom: 25,
  paddingVertical: 16, // antes era 10
  justifyContent: 'space-between',
  paddingHorizontal: 25,
  alignItems: 'center',
},
tabItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,  // aumentamos
  paddingVertical: 10,    // aumentamos
  borderRadius: 30,
},
tabItemActive: {
  backgroundColor: '#0066FF',
  paddingHorizontal: 20,  // reforçamos o espaço lateral
  paddingVertical: 12,    // e vertical
},
tabIcon: {
  width: 24,  // aumentamos levemente
  height: 24,
  tintColor: '#FFF',
},
tabLabel: {
  color: '#FFF',
  marginLeft: 8,
  fontSize: 14,
},
  
});

export default styles;
