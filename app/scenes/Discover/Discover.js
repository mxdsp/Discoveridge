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
import { Col, Row, Grid } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'
import ViewContainer from '../../content/ViewContainer'
import StatusbarBackground from '../../content/StatusbarBackground'
import { styles } from './styles'
import Modal from './Modal'
import Users from './Users'
import People from './People'
import { firebaseRef } from '../../services/Firebase'

export default class Discover extends Component<{}> {
  
  _profile() {
    Actions.profile()
  }
  render() {
    return (
      <ViewContainer>
          <StatusbarBackground />
          <ScrollView style={styles.grid} showsVerticalScrollIndicator = {false}>        
            <Grid>
              <Row style={styles.row1}>
                <Col size={3} style={styles.profileBox}  onPress={this._profile}>
                  <Image style={styles.profilePicture} source={{uri: Users.userInfo.imgUri}} />
                  <Text style={styles.profileNameText} autoCapitalize='words'>{Users.userInfo.name}</Text>
                  <Text style={styles.profileEducationText} >{Users.userInfo.education}</Text>
                  <Text style={styles.profileOccupationText} >{Users.userInfo.occupation}</Text>
                </Col>
                <Col size={2} style={styles.col3}>
									<Row size={40} style={styles.row3}>
									</Row>	
									<Row size={60} style={styles.row4}>	
									</Row>
                </Col>
              </Row>
              <Row style={styles.row2}>
								<Col size={1} style={styles.col1}>
								</Col>
								<Col size={3} style={styles.col2}>
									<Modal />
								</Col>
              </Row>
              
            </Grid>
            <Grid>
              <Col size={2} style={styles.col4}>
                <Row size={30} style={styles.row3}>
                  <ScrollView style={styles.skillsSV} showsVerticalScrollIndicator = {false}>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                  </ScrollView>
                </Row>
								<Row size={20} style={styles.row4}>
								</Row>
								<Row size={50} style={styles.row4}>
								</Row>
              </Col>
              <Col size={1} style={styles.col5}>
								<Row size={40} style={styles.row3}>
								</Row>
								<Row size={30} style={styles.row4}>
								</Row>
								<Row size={30} style={styles.row4}>
								</Row>
              </Col>
            </Grid>
          </ScrollView>
          
        
      </ViewContainer>
    );
  }
}
