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
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    marginRight: 24,
  },

  // LISTA
  listContent: {
    paddingHorizontal: 12,
    paddingTop: 24,
    paddingBottom: 24,
  },

  // CARD DO GRUPO
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    width: width - 24,
    alignSelf: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },


  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#D9D9D9',
    marginRight: 16,
  },


  groupAvatarImg: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
    resizeMode: 'cover',
  },

  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  groupName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },

  membersText: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'right',
  },


  emptyText: {
    marginTop: 40,
    textAlign: 'center',
    color: '#777777',
    fontSize: 13,
  },
});

export default styles;
