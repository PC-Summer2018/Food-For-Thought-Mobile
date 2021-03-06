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
import { createStackNavigator } from 'react-navigation'
import MapView, { Marker } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'

const GOOGLE_MAPS_APIKEY = 'AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U'

class Map extends Component {
	static navigationOptions = {
		title:'Map',
	}

	state = {
		region: {
			latitude: 36.1699412,
      longitude: -115.1398295,
      latitudeDelta: 0.5,
      longitudeDelta: 0.0421
		},
		markers: [{
	    coordinates: {
	      latitude: 3.148561,
	      longitude: 101.652778
	    },
  	}]
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
				zoomEnabled={true}
				minZoomLevel={10}
				initialRegion={this.state.region}
			   >

				{this.state.markers.map(marker => (
					<MapView.Marker
						key={marker}
						coordinate={marker.coordinates}
						title={'Current location'}
					/>
				))}
				 	<Marker
						coordinate={{
						latitude: 36.042454,
    					longitude: -115.1550967
						}}
						title={"Bachi Burger"}
						description={'The food of the people.'}
					/>
			  	</MapView>
				<View style={styles.individualPickupContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.restaurant}>Bachi Burger</Text>
						<Text style={styles.address}>470 Windmill Lane</Text>
						<Text style={styles.trays}>3 trays of Bahn-Mi Burger</Text>
					</View>
					<View style={styles.iconContainer1}>
						<Entypo style={styles.icon1} name='check' color='white' />
					</View>
					<View style={styles.iconContainer2}>
						<Entypo style={styles.icon2} name='trash' color='white' />
					</View>
				</View>
			</View>
		)
	}
}

export default Map

const styles = StyleSheet.create({
	container: {
	    flex: 1,
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
	    bottom: 0,
	    right: 0
  },
	individualPickupContainer: {
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	restaurant: {
		fontWeight: 'bold',
		marginHorizontal: 10,
		marginVertical: 5,
		fontSize: 18,
	},
	address: {
		fontSize: 14,
		marginHorizontal: 10
	},
	trays: {
		fontSize: 14,
		margin: 10
	},
	textContainer: {
		flexDirection: 'column',
		width: 285
	},
	iconContainer1: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(89,182,85)',
		borderRadius: 20,
		height: 55,
		width: 55
	},
	iconContainer2: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(202,59,51)',
		borderRadius: 20,
		height: 55,
		margin: 5,
		width: 55
	},
	icon1: {
		fontSize: 20
	},
	icon2: {
		fontSize: 20
	}
})