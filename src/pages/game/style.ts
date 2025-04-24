import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    paddingTop: 0,
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
  },
  scoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066FF',
    marginTop: 20,
    marginLeft: 20,
  },
  scoreX: {
    color: '#4CAF50',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 30,
    gap: 20,
  },
  menuButton: {
    width: (width - 80) / 2,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  menuIcon: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  tutorialButton: {
    backgroundColor: '#FFF',
    marginHorizontal: 60,
    marginTop: 40,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  tutorialText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
