import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  hamburgerIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#fff',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userSubtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 14,
    color: '#0066FF',
  },
  acessoRapidoTitle: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  acessoRapidoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  acessoRapidoItem: {
    alignItems: 'center',
  },
  acessoRapidoIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  acessoRapidoText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#002255',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
  },
  navItemSelected: {
    borderColor: '#0066FF',
    borderWidth: 2,
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  navText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  navTextSelected: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
});
