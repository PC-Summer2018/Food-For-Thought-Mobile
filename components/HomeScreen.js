import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title:'Home',
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Pickups available for today: #</Text>
				<Button title='My Pickups Map' />
				<Button title='Manage Reports' />
				<Button title='View All Available Pickups' />
				<Button title='Edit Profile' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:10,
		backgroundColor:'#fff',
		alignItems:'center',
	},
	header:{
		paddingBottom:10,
		fontSize:18,
		fontWeight:'bold',
	},
})
