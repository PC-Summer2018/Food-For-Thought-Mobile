import React, { Component } from 'react'
import { MapView } from 'expo'

class Map extends Component {
	state = {
		currentLocation: {
			latitude: 0,
			longitude: 0
		}
	}
	
	render() {
		return (
			<View>
				<MapView
					style={{ flex: 1 }}
					intitalRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
				/>
				<Text>This is the Home Page.</Text>
			</View>
		)
	}
}

export default Map