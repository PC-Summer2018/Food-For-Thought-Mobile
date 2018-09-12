import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class ReportsScreen extends React.Component {
	static navigationOptions = {
		title:'Reports',
	}
	
	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.header}>Receipt Report</Text>
					<Text style={styles.subheader}>2018-09-01 - 2018-09-07</Text>
					<Text style={styles.subheader}>501c3 ID: 67890</Text>
					<View style={styles.table}>
						<View style={styles.tableRow}>
					        <Text>Date: 2018-09-06</Text>
					        <Text>Dish: Sandwiches</Text>
					        <Text>Trays: 1</Text>
					        <Text>Value: $36</Text>
					    </View>
					    <View style={styles.tableRow}>
					        <Text>Date: 2018-09-06</Text>
					        <Text>Dish: Chips</Text>
					        <Text>Trays: 1</Text>
					        <Text>Value: $12</Text>
					    </View>
					    <View style={styles.tableRow}>
					        <Text>Date: 2018-09-06</Text>
					        <Text>Dish: Cookies</Text>
					        <Text>Trays: 1</Text>
					        <Text>Value: $24</Text>
					    </View>
					    <View style={styles.tableRow}>
					        <Text>Date: 2018-09-06</Text>
					        <Text>Dish: Brownies</Text>
					        <Text>Trays: 1</Text>
					        <Text>Value: $24</Text>
					    </View>
					</View>
					<TouchableHighlight onPress={() => alert('Report Printed!')}>
						<View style={styles.button}>
							<Text style={styles.buttontext} title='Print Report'>Print Report</Text>
						</View>
					</TouchableHighlight>
				</View>
			</ScrollView>
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
		fontSize:18,
		fontWeight:'bold',
	},
	subheader:{
		fontSize:15,
		fontWeight:'bold',
	},
	reportInputs: {
		width:280,
		height:50,
		margin:10,
		paddingHorizontal:10,
		borderWidth:1.5,
		borderColor:'grey',
		borderRadius:10,
	},
	button: {
	    borderWidth: 0,
	    shadowOffset: {width: 2, height: 2},
	    margin: 10,
	    backgroundColor: '#ebfbec'
 	},
	buttontext: {
	    color: 'white',
	    padding: 15,
	    backgroundColor: 'rgb(63,132,202)',
	    borderRadius: 20,
	    fontSize: 20,
  	},
	table: {
		margin:10,
	},
	tableRow: {
		width:280,
		height:114,
		margin:5,
		padding:10,
		borderWidth:1,
		borderColor:'grey',
		borderRadius:10,
		backgroundColor: '#fff'
	},
})
