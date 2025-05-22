import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ContainerCentral: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: height * 0.75,
    padding: 20,
    paddingTop: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: width * 0.9,
    height: width * 0.3,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#555',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#0066FF',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 60,
  },
  footerText: {
    color: '#FFF',
    marginBottom: 10,
  },
  primeiroAcesso: {
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primeiroAcessoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  label: {
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default styles;
