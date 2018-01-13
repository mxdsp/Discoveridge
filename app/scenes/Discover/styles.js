import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  profilePicture:{
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    marginTop: 15
  },
  profileNameText: {
    color: 'white',
    fontSize: 18
  },
  profileEducationText: {
    color: 'white',
    fontSize: 14
  },
  profileOccupationText: {
    color: 'white',
    fontSize: 12
  },
  profileBox: { 
    backgroundColor: '#96A48D', 
    height: 180,
    width: 216,
    alignItems: 'center',
    borderRadius: 5,
  },
  skillsBox: {
    backgroundColor: '#96A48D', 
    height: 180,
    borderRadius: 5,
  },
  skillsSV: {
    margin: 10,
  },
	imageBox: {
    flex: 1,
    borderRadius: 5,
    
	},
  col1: { 
    backgroundColor: '#635DB7', 
    height: 180,
    borderRadius: 5,
  },
  col2: { 
    backgroundColor: '#00CE9F', 
    height: 180,
    marginLeft: 5,
    borderRadius: 5,
  },

  col3: { 
    height: 180,
    marginLeft: 5,
    borderRadius: 5,
  },

  col4: { 
    height: 520,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  col5: { 
    height: 520,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 5,
  },

  row1: { 
    height: 180,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  row2: { 
    height: 180,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  row3: { 
    backgroundColor: '#00CE9F', 
    height: 180,
    borderRadius: 5,
    
  },
  row4: { 
    backgroundColor: '#635DB7', 
    height: 180,
    marginTop: 5,
    borderRadius: 5,
  },
  flatList: {
    fontSize: 40
  },
  container: {
    flex: 1,
		justifyContent: 'center',
	},
	modalContainer: {
		flex: 1,
    justifyContent: 'center',
		backgroundColor: 'grey',
		marginTop: 45,
		marginBottom: 15,
		marginLeft: 15,
		marginRight: 15,
		shadowColor: 'black',
		shadowOffset: {width: 0,height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 2
  },
  innerContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1
    
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  grid: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,

  }
})

