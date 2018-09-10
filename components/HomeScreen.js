import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title:'Home',
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Pickups available for today: #</Text>
				<View style={[{margin: 5}]}><Button title='My Pickups Map' onPress={() => this.props.navigation.navigate('Map')} /></View>
				<View style={[{margin: 5}]}><Button title='Manage Reports' onPress={() => this.props.navigation.navigate('Reports')} /></View>
				<View style={[{margin: 5}]}><Button title='View All Available Pickups' onPress={() => this.props.navigation.navigate('Pickups')} /></View>
				<View style={[{margin: 5}]}><Button title='Edit Profile' onPress={() => this.props.navigation.navigate('Profile')} /></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:10,
		backgroundColor:'#ebfbec',
		alignItems:'center',
	},
	header:{
		paddingBottom:10,
		fontSize:18,
		fontWeight:'bold',
	}
})
