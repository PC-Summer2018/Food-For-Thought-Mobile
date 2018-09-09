import React, { Component } from 'react'
import { 
	AppRegistry, 
	StyleSheet, 
	Dimensions, 
	Image, 
	View, 
	Text,
	StatusBar, 
	TouchableOpacity 
} from "react-native";
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

// FOR TESTING ROUTE NAVIGATION
const coordinates = [
	{
		latitude: 36.1583869,
    longitude: -115.152501
	},
	{
		latitude: 36.117388,
    longitude: -115.169968
	}
]

const GOOGLE_MAPS_APIKEY = 'AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U'

class Map extends Component {
	state = {
		currentLatLng: {
			latitude: null,
			longitude: null,
			error: null
		}
	}

	showCurrentLocation() {
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					error: null
				})
			},
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
		)
	}

	componentDidMount() {
		this.showCurrentLocation()
		
		// TEST: Using getCurrentPosition
		// navigator.geolocation.getCurrentPosition(
		// 	(position) => {
		// 		this.setState({
		// 			latitude: position.coords.latitude,
		// 			longitude: position.coords.longitude,
		// 			error: null
		// 		})
		// 	},
		// 	(error) => this.setState({ error: error.message }),
		// 	{ enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
		// )

		// TEST: Using watchPosition
		// this.watchId = navigator.geolocation.watchPosition(
		// 	(position) => {
		// 		this.setState({
		// 			latitude: position.coords.latitude,
		// 			longitude: position.coords.longitude,
		// 			error: null
		// 		})
		// 	},
		// 	(error) => this.setState({ error: error.message }),
		// 	{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
		// )
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchId)
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView style={styles.map}
			    initialRegion={{
			      latitude: 36.1699,
			      longitude: -115.1398,
			      latitudeDelta: 0.0922,
			      longitudeDelta: 0.0421,
			    }}>

				  <MapView.Marker
						coordinate={coordinates[0]}
						title={'Current location'}
						description={'A school for gifted children.'}
				  />
				  <MapView.Marker
						coordinate={coordinates[1]}
						title={'In-N-Out Burger'}
						description={'The food of the people.'}
				  />

				  <MapViewDirections 
				  	origin={coordinates[0]}
				  	destination={coordinates[1]}
				  	apikey={GOOGLE_MAPS_APIKEY}
				  	strokeWidth={3}
				  	strokeColor='blue'
				  	language='en'
				  />
		  	</MapView>
				<Text>French Toast</Text>
				<Text>Potatoes</Text>
				<Text>French Fries</Text>
				<Text>Spaghetti</Text>
				<Text>French Bread</Text>
				<Text>Cheeseburger</Text>
		  </View>
		)
	}
}

export default Map

const styles = StyleSheet.create({
	container: {
    // flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
  	position: 'absolute',
  	top: 20,
  	left: 0,
    bottom: 180,
    right: 0
  }
})