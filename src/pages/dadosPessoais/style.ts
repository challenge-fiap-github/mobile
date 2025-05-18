// src/pages/dadosPessoais/style.ts
import { StyleSheet } from 'react-native';

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
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardIcon: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  planInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  planText: {
    fontSize: 14,
    color: '#000',
  },
  carteirinhaIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  carteirinhaBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carteirinhaText: {
    fontSize: 12,
    color: '#4D4D4D',
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
    marginBottom: 15,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#F9F4E5',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  warningIcon: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  warningText: {
    fontSize: 13,
    color: '#9A9A9A',
    flex: 1,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
