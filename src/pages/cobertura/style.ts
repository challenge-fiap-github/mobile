// style.ts
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  coberturaItem: {
    width: (width - 80) / 3,
    backgroundColor: '#FFF',
    borderRadius: 12,
    margin: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  coberturaIcon: {
    width: 28,
    height: 28,
    marginBottom: 8,
  },
  coberturaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0066FF',
    textAlign: 'center',
  },
});

export default styles;