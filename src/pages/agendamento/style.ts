import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  header: {
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
  content: {
    padding: 20,
  },
title: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 40,
  marginBottom: 40,
  textAlign: 'center',
},
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
     minHeight: 110,
    width: width - 40,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
cardLeft: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
},
iconContainer: {
  marginRight: 16,
  justifyContent: 'center',
  alignItems: 'center',  
},
cardIcon: {
  width: 50, 
  height: 50, 
  resizeMode: 'contain',
},
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 13,
    
    color: '#4D4D4D',
    flexWrap: 'wrap',
  },
});

export default styles;
