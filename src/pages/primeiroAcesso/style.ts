// style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  content: {
    padding: 20,
  },
title: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 20,      
  marginBottom: 30,
},
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
    marginBottom: 15,
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  warningIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  warningText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
  fontSize: 14,
  color: '#000',
  marginBottom: 5,
  marginTop: 10,
},

});

export default styles;
