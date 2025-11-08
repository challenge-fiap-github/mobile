import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUS = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
const BLUE_H = Math.round(height * 0.22);
const AVATAR = 180;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },

  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: BLUE_H + STATUS,
    paddingTop: STATUS + 14,
    paddingHorizontal: 16,
    backgroundColor: '#0066FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    zIndex: 10,
  },
  navIcon: {
    width: 22,
    height: 22,
    tintColor: '#FFFFFF',
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  avatarWrapper: {
    position: 'absolute',
    top: BLUE_H - AVATAR / 2,
    width,
    alignItems: 'center',
    zIndex: 20,
  },

  groupAvatarPlaceholder: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: '#D9D9D9',
  },

  groupAvatarImg: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    resizeMode: 'cover',
    backgroundColor: '#D9D9D9',
  },

  headerBlock: {
    marginTop: BLUE_H + AVATAR / 2 - 24,
    paddingTop: 18,
    paddingBottom: 8,
    alignItems: 'center',
  },

  groupNameTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },


  deleteButton: {
    marginTop: 4,
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#FFB3A7',
    alignSelf: 'center',
  },
  deleteButtonText: {
    color: '#7A1E1E',
    fontSize: 12,
    fontWeight: '600',
  },

  membersContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 4,
  },

  membersList: {
    paddingBottom: 24,
  },

  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DDE7FF',
    marginRight: 14,
  },
  memberAvatarImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 14,
    resizeMode: 'cover',
  },

  memberName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },

  emptyText: {
    marginTop: 40,
    textAlign: 'center',
    color: '#777777',
    fontSize: 13,
  },
});
