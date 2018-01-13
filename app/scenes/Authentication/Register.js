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
import { Actions } from 'react-native-router-flux'

export default class Register extends Component<{}> {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        verifyPassword: ''
      }

      this._register = this._register.bind(this)
    }

    _register() {
      if (this.state.password == this.state.verifyPassword) {
        firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then()  
        .catch(function(error) {
          // Handle errors here
          console.log(error.code)
          console.log(error.message)
        })
        Actions.profile()
      } else {
        console.log("Password did not match")
      }
    }
    _login() {
      Actions.login()
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
              returnKeyType="next"
            />
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({verifyPassword: text})}
              value={this.state.verifyPassword}
              placeholder="RE-ENTER PASSWORD"
              placeholderTextColor="black"          
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
            />
          </View>
          <View style={styles.loginReg}>
            <TouchableOpacity style={styles.loginButton} onPress={this._register}>
              <Text style={styles.loginButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.register}>
            <TouchableOpacity style={styles.registerButton} onPress={this._login}>
              <Text style={styles.registerButtonText}>Already have an account? Log In</Text>
            </TouchableOpacity>
          </View>
        </View>      
      </ViewContainer>
    );
  }
}

