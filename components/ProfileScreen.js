import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class ProfileScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Profile</Text>
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
	title:{
		paddingBottom:10,
		fontSize:18,
		fontWeight:'bold',
	},
})
