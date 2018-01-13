import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import ViewContainer from '../../content/ViewContainer'
import StatusbarBackground from '../../content/StatusbarBackground'
import _ from 'lodash'
import { firebaseRef } from '../../services/Firebase'
import { styles } from './styles'
import { Actions, ActionConst } from 'react-native-router-flux'
import FBSDK, { LoginMaster, LoginManager, AccessToken } from 'react-native-fbsdk'
import { firebase } from '@firebase/app';
import autobind from 'autobind-decorator'

export default class Login extends Component<{}> {
    constructor(props) {
      super(props)

      this.state = {
        email: 'mads.p@icloud.com',
        password: 'madxz123'
      }

      this._login = this._login.bind(this)
      this._register = this._register.bind(this)
      this._fbAuth = this._fbAuth.bind(this)

    }

    _login() {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
				Actions.people()
      })
      .catch(function(e) {
        alert(e)
        console.log(e.code)
        console.log(e.message)
      })
    }

    _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(
        function(result) {
          if (result.isCancelled) {
            alert('Login cancelled')
          } else {

            AccessToken.getCurrentAccessToken().then((accessTokenData) => {
              const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
              firebase.auth().signInWithCredential(credential).then((result) => {
                //Promise was successful
              }, (e) => {
                //Promise was rejected
                console.log(e)
              })
            }, (e) => {
              console.log('some error occurred: ' + e)              
            })
          }
        },
        function(e) {
          alert('Login fail with error: ' + e)
        }
      )
    }
    
   
    _register() {
      Actions.register()
    }

    _discover() {
      Actions.discover()
    }

    _onFocus() {

    }

  render() {
    return (
      <ViewContainer>
        <View style={styles.view}>
          <StatusbarBackground />
          <View style={styles.logo}>
            <Image style={styles.image} source={require('../../resources/Logo.png')} resizeMode="center" />
          </View>
          <View>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholder="EMAIL"
              placeholderTextColor="black"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              placeholder="PASSWORD"
              placeholderTextColor="black"          
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.fbLogin} onPress={this._fbAuth}>
              <Image style={styles.fbImage} source={require('../../resources/fbLogin.png')} resizeMode="center" />
            </TouchableOpacity>
          </View>
          <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton} onPress={this._login}>
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.register}>
            <TouchableOpacity style={styles.registerButton} onPress={this._register}>
              <Text style={styles.registerButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>      
      </ViewContainer>
    );
  }
}

