import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
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
				<TouchableHighlight onPress={() => alert('Info Changed!')}>
          			<View style={styles.button}>
            			<Text style={styles.buttontext}>Save Changes</Text>
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
	    borderWidth: 0,
	    shadowOffset: {width: 2, height: 2},
	    shadowRadius: 4
 	},
	buttontext: {
	    color: 'white',
	    padding: 15,
	    backgroundColor: 'rgb(63,132,202)',
	    borderRadius: 20,
	    fontSize: 20,
	    fontFamily: 'sans-serif'
  }
})
