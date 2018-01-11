import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
// import { Button, Icon } from 'native-base'
import ViewContainer from '../../content/ViewContainer'
import StatusbarBackground from '../../content/StatusbarBackground'
import { styles } from './styles'
import { Icon, Button } from 'react-native-elements'
import { Actions, ActionConst } from 'react-native-router-flux'
import Users from '../Discover/Users'
import { firebaseRef } from '../../services/Firebase'

export default class Profile extends Component<{}> {
    constructor(props) {
      super(props)
      this.state = { 
        uri: require('../../resources/starIcon.png'),
        name: Users.userInfo.firstName,
        education: Users.userInfo.education,
        occupation: Users.userInfo.occupation,

      }
    }
    changeFavourite() {
      this.setState({
        uri: require('../../resources/starIconYellow.png')
      })
    }

    _logout() {
      firebaseRef.auth().signOut().then(function() {
        Actions.login()
      }).catch(function(e) {
        alert(e)
      })
    }
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View style={styles.profilePictureView}>
          <Image style={styles.profilePicture} source={{uri: Users.userInfo.imgUri}} />
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.profileName}>
              <View style={styles.logoutButton}></View>
              <Text style={styles.profileNameText}>{Users.userInfo.name}</Text>
              <Icon 
                style={styles.logoutButton}
                component={TouchableOpacity}
                name='log-in'
                type='feather'
                size={30}
                color='black'
                onPress={this._logout}
              /> 
            </View>
            <View style={styles.profileOccupation}>
              <Text style={styles.profileOccupationText}>{this.state.education}</Text>
              <Text style={styles.profileOccupationText}>{this.state.occupation}</Text>
            </View>
          </View>
          <View style={styles.skillsContainer}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => this.changeFavourite()}>
                <Image style={styles.starIcon} source={this.state.uri} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.starIcon} source={require('../../resources/chatIcon.png')} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Adobe Illustrator</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Adobe InDesign</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Networking</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Hand Drawing</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Prototyping</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Business Development</Text>
                <View style={styles.box}></View>
              </View>   
            </ScrollView>
          </View>
        </View>
      </ViewContainer>
    );
  }
}
