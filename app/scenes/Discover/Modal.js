import React, { Component } from 'react';
import { Button, TouchableOpacity, Image, Text, View, Modal, StyleSheet } from 'react-native';
import Users from './Users'
import { styles } from './styles'

export default class MyComponent extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
				<View style={styles.container}>
					<Modal
            visible={this.state.modalVisible}
						animationType={'fade'}
						transparent={true}
            onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
								<Button 
										style={styles.button}
										title="x"
                    onPress={() => this.closeModal()}
								>
									<Text>x</Text>
                </Button>
              </View>
            </View>
					</Modal>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.openModal()}
						>
							<Image 
								style={styles.imageBox} 
								source={require('../../resources/bord1.jpg')}
								resizeMode="center"
							/>
						</TouchableOpacity>
					</View>
				</View>
    );
  }
}
