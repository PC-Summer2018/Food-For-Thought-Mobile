import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import Map from './Map'

class Home extends Component {
	render() {
		return (
			<View>
				<Text>This is the Home Page.</Text>
				<Button
					title="View Map"
					onPress={() => {
						this.props.navigation.navigate('Map')
					}}
				/>
			</View>
		)
	}
}

export default Home