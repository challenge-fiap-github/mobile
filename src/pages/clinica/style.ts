// src/pages/clinica/style.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  // HEADER
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
  },

  // SEARCH
  searchContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#00B050',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
  },

  // LISTA
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 35, //
  },

  // CARD DO DENTISTA
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    width: width - 40,
    alignSelf: 'center',
    elevation: 2,
  },
  cardImage: {
    width: 54,
    height: 54,
    borderRadius: 12,
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardName: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222222',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE9A8',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  ratingStar: {
    fontSize: 12,
    marginRight: 2,
    color: '#F6B800',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardLocation: {
    fontSize: 12,
    color: '#555555',
    marginTop: 2,
  },
  cardSpecialty: {
    fontSize: 11,
    color: '#777777',
    marginTop: 2,
  },
});

export default styles;
