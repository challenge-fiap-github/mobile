import { StyleSheet } from 'react-native';

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
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    elevation: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#9A9A9A',
  },
  inputSearch: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: '#333',
  },
  cidadeContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C6C6C6',
  },
  cidadeText: {
    fontSize: 14,
    color: '#333',
  },
});

export default styles;
