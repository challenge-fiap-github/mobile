// style.ts
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  inputSearch: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  sectionHeader: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066FF',
  },
  estadoContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  estadoText: {
    fontSize: 14,
    color: '#000',
  },
});

export default styles;
