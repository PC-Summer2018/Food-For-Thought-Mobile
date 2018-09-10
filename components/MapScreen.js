import React, { Component } from 'react'
import { 
	AppRegistry, 
	StyleSheet, 
	Dimensions, 
	Image, 
	View, 
	Text,
	Button,
	StatusBar, 
	TouchableOpacity 
} from "react-native";
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import Pickups from './PickupsScreen.js'

const GOOGLE_MAPS_APIKEY = 'AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U'

class Map extends Component {
	state = {
		region: {
			latitude: 36.1699412,
      longitude: -115.1398295,
      latitudeDelta: 0.5,
      longitudeDelta: 0.0421
		}
	}

	renderMarkers() {
		return this.props.map((place, i) => (
			<Marker key={i} title={place.name} coordinate={place.coords} />
		))
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
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchId)
	}

	render() {

		return (
			<View style={styles.container}>
				<MapView style={styles.map}
			    region={this.state.region}
			    provider='google'
			    showsUserLocation
					showsMyLocationButton
					showsTraffic
			   >
					
					{this.renderMarkers}
				  <MapView.Marker
						coordinate={{
							latitude: this.state.latitude,
							longitude: this.state.longitude
						}}
						title={'Current location'}
						
				  />
				  <MapView.Marker
						coordinate={{
							latitude: 36.117388,
    					longitude: -115.169968
						}}
						title={'El Diner'}
						description={'The food of the people.'}
				  />

				  <MapViewDirections 
				  	origin={{
				  		latitude: this.state.latitude,
							longitude: this.state.longitude
				  	}}
				  	destination={{
				  		latitude: 36.117388,
    					longitude: -115.169968
				  	}}
				  	apikey={GOOGLE_MAPS_APIKEY}
				  	strokeWidth={3}
				  	strokeColor='blue'
				  	language='en'
				  />
		  	</MapView>
				
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
  	top: 0,
  	left: 0,
    bottom: 180,
    right: 0
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