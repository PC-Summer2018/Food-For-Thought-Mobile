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
						latitude: 36.117388,
    					longitude: -115.169968
						}}
						title={'El Diner'}
						description={'The food of the people.'}
					/>
			  	</MapView>
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
    bottom: 180,
    right: 0
  }
})