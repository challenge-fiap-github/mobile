import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#FFF',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    width: (width - 60) / 2,
    padding: 15,
    alignItems: 'center',
    elevation: 2,
  },
  optionIcon: {
    width: 30, //
    height: 30,
    marginBottom: 10,
  },
  optionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  optionDesc: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  footerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  footerButton: {
    borderWidth: 1,
    borderColor: '#A2A2A2',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  footerButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
});

export default styles;
