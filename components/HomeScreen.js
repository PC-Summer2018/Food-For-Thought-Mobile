import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title:'Home',
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Pickups available for today: 4</Text>
				<TouchableHighlight onPress={() => this.props.navigation.navigate('Map')}>
          			<View style={styles.button}>
            			<Text style={styles.buttontext}>My Pickups Map</Text>
          			</View>
        		</TouchableHighlight>
        		<TouchableHighlight onPress={() => this.props.navigation.navigate('Reports')}>
          			<View style={styles.button}>
            			<Text style={styles.buttontext}>Manage Reports</Text>
          			</View>
        		</TouchableHighlight>
        		<TouchableHighlight onPress={() => this.props.navigation.navigate('Pickups')}>
          			<View style={styles.button}>
            			<Text style={styles.buttontext}>View All Available Pickups</Text>
          			</View>
        		</TouchableHighlight>
        		<TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')}>
          			<View style={styles.button}>
            			<Text style={styles.buttontext}>Edit Profile</Text>
          			</View>
        		</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:10,
		backgroundColor:'#ebfbec',
		alignItems:'center'
	},
	header:{
		paddingBottom:10,
		fontSize:18,
		fontWeight:'bold',
	},
	button: {
	    borderWidth: 0,
	    shadowOffset: {width: 2, height: 2},
	    backgroundColor: '#ebfbec',
	    margin: 5
 	},
	buttontext: {
	    color: 'white',
	    padding: 15,
	    backgroundColor: 'rgb(63,132,202)',
	    borderRadius: 20,
	    fontSize: 20
  }
})
