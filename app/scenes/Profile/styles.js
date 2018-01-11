import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  profilePictureView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 40,
    
  },
  profilePicture:{
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
    borderColor: 'white'
  },
  profileName: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  profileNameText: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
  },
  profileOccupation: {
    alignItems: 'center'
  },
  profileSettingsButton: {
    
  },
  box: {
    paddingLeft: 20,
    width: 100,
    height: 15,
    backgroundColor: 'white',
    marginBottom: 15
  },
  skillsText: {
    paddingRight: 20,
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  skills: {
    flexDirection: 'row'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  skillsContainer: {
    backgroundColor: '#434C3F',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    margin: 5,
    flex: 1
  },
  starIcon: {
    alignItems: 'center',
    height: 60,
    width: 60,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  logoutButton: {
    height: 30,
    width: 30,
  }
})