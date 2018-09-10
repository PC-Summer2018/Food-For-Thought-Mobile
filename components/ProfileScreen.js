import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		title:'Profile',
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Edit Profile</Text>
				<TextInput style={styles.profileInputs} placeholder='Name' />
				<TextInput style={styles.profileInputs} placeholder='Email' />
				<TextInput style={styles.profileInputs} placeholder='Address' />
				<TextInput style={styles.profileInputs} placeholder='Phone' />
				<Button style={styles.button} onPress={() => alert('Info Changed!')} title='Change Info' />
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
	},
	profileInputs: {
		width:280,
		height:50,
		margin:10,
		paddingHorizontal:10,
		borderWidth:1.5,
		borderColor:'grey',
		borderRadius:10,
		backgroundColor: '#fff'
	},
	button: {
		backgroundColor:'blue',
		color:'white',
		borderWidth:1,
		borderColor:'black',
	},
})
