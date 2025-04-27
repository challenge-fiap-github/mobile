import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  header: {
    width: '100%',
    backgroundColor: '#0066FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: '#FFF',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchBox: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    width: 37,
    height: 37,
    marginRight: 10,
  },
  searchTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  inputLabel: {
    fontSize: 14,
    color: '#4D4D4D',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#9A9A9A',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
  },
  buttonBuscar: {
    backgroundColor: '#A2A2A2',
    marginTop: 30,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonBuscarText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
