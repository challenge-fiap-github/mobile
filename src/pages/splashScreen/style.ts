import { StyleSheet } from 'react-native';

const TOP_OFFSET = 80; 
const LOGO_SIZE  = 200;
const GAP        = 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
  },

  logo: {
    position: 'absolute',
    top: TOP_OFFSET,
    alignSelf: 'center',
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },

  brand: {
    position: 'absolute',
    top: TOP_OFFSET + LOGO_SIZE + GAP,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'lowercase',
  },
});
