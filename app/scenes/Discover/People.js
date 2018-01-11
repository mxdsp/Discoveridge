import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Col, Row, Grid } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'
import ViewContainer from '../../content/ViewContainer'
import StatusbarBackground from '../../content/StatusbarBackground'
//import { styles } from './styles'
import { List, ListItem } from 'react-native-elements'
import Users from './Users'

export default class People extends Component<{}> {
  
  state = {
    data: [],
    page: 0,
    loading: false
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true })
    const response = await fetch(
      `https://randomuser.me/api?nat=dk&results=15&seed=hi&page=${this.state.page}`
    )
    const json = await response.json()
    this.setState(state => ({
      data: [...state.data, ...json.results],
      loading: false
    }))
  }

  handleEnd = () => {
    this.setState(state => ({ page: state.page + 1 }), () => this.fetchData())
  }
  

  _discover() {
    // Users.userInfo.name = ""
    // Users.userInfo.education = "AK Furniture Design"
    // Users.userInfo.occupation = "VIA University College"
    Actions.discover()
  }

  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View>
          <List>
            <FlatList
              showsVerticalScrollIndicator = {false}
              data={this.state.data}
              keyExtractor={(x, i) => i}
              onEndReached={() => this.handleEnd()}
              onEndReachedThreshold={0}
              ListFooterComponent={() =>
                this.state.loading
                  ? null
                  : <ActivityIndicator size="large" animating />}
              renderItem={({ item }) =>
                <ListItem
                  onPress={() => this._discover(
                    Users.userInfo.imgUri = item.picture.large, 
                    Users.userInfo.name = item.name.first + " " + item.name.last, 
                    Users.userInfo.education = item.email, 
                    Users.userInfo.occupation = item.cell) }
                  roundAvatar
                  avatar={{ uri: item.picture.thumbnail }}
                  title={item.name.first + " " + item.name.last}
                  subtitle={item.login.username}
                />}
            />
          </List>
        </View>
      </ViewContainer>    
    );
  }
}
