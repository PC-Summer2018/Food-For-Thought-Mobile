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
	static navigationOptions = {
		title:'Map',
	}

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
				minZoomLevel={10}
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
		}
	})