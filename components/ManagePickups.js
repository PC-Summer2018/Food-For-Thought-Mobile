import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default class ManagePickups extends React.Component {
	render() {
		return (
			<View style={styles.managePickupsContainer}>
				<View style={styles.individualPickupContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.restaurant}>Mike's Kitchen</Text>
						<Text style={styles.address}>640 Autumn Moon Drive</Text>
						<Text style={styles.trays}>3 trays of Meatballs</Text>
					</View>
					<View style={styles.iconContainer}>
						<Entypo style={styles.icon} name='location-pin' color='white' />
					</View>
				</View>
				<View style={styles.individualPickupContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.restaurant}>Testaurant</Text>
						<Text style={styles.address}>2740 Fountain Vista Lane</Text>
						<Text style={styles.trays}>4 trays of Pasta</Text>
					</View>
					<View style={styles.iconContainer}>
						<Entypo style={styles.icon} name='location-pin' color='white' />
					</View>
				</View>
				<View style={styles.individualPickupContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.restaurant}>Austin's Restaurant</Text>
						<Text style={styles.address}>220 Hanley Way</Text>
						<Text style={styles.trays}>20 trays of Wings</Text>
					</View>
					<View style={styles.iconContainer}>
						<Entypo style={styles.icon} name='location-pin' color='white' />
					</View>
				</View>
				<View style={styles.individualPickupContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.restaurant}>Surfin' Tacos</Text>
						<Text style={styles.address}>1113 Casino Center Dr</Text>
						<Text style={styles.trays}>5 trays of Tacos</Text>
					</View>
					<View style={styles.iconContainer}>
						<Entypo style={styles.icon} name='location-pin' color='white' />
					</View>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	managePickupsContainer: {
		
	},
	individualPickupContainer: {
		borderBottomWidth: 2,
		flexDirection: 'row',
		alignItems: 'center'
	},
	restaurant: {
		fontWeight: 'bold',
		marginHorizontal: 10,
		marginVertical: 5,
		fontSize: 22,
	},
	address: {
		fontSize: 20,
		marginHorizontal: 10,
		marginBottom: 5
	},
	trays: {
		fontSize: 22,
		margin: 10
	},
	textContainer: {
		flexDirection: 'column',
		width: 300
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1569C7',
		borderRadius: 10,
		height: 55,
		width: 55
	},
	icon: {
		fontSize: 35
	}
})