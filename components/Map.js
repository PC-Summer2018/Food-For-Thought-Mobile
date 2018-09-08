import React, { Component } from 'react'
import { View,  Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
// import { compose, withProps, lifecycle } from 'recompose'

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
	// state = {
	// 	currentLatLng: {
	// 		lat: 0,
	// 		lng: 0
	// 	},
	// 	// rte: []
	// }

	// showCurrentLocation() {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(position => {
	// 			this.setState({
	// 				currentLatLng: {
	// 					lat: position.coords.latitude,
	// 					lng: position.coords.longitude
	// 				}
	// 			})
	// 		})
	// 	}
	// }

	componentDidMount() {
		// this.showCurrentLocation()
		// getAddresses(api.getProfile().id) 
	}

	render() {
		// const lat = this.state.currentLatLng.lat
		// const lng = this.state.currentLatLng.lng
		// const waypoint = this.props.address

		// const DirectionsComponent = compose(
		// 	withProps({
		// 		googleMapUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U',
		// 		loadingElement: <View style={{ height: `100%` }} />,
	 //      containerElement: <View style={{ width: `100%` }} />,
	 //      mapElement: <View style={{height: `600px`, width: `100%` }} />
	 //    })

		// 	// withScriptjs
		// 	// withGoogleMaps

		// 	lifecycle({
		// 		componentDidMount() {
		// 			const DirectionsService = new google.maps.Directions()

		// 			DirectionsService.route({
		// 				origin: new google.maps.LatLng({ lat: lat, lng: lng }),
		// 				destination: api.getProfile().locatoin,
		// 				waypoints: waypoint,
		// 				optimizeWWayPoints: true,
		// 				travelMode: google.maps.TravelMode.DRIVING
		// 			}, (result, status) => {
		// 				if (status === google.maps.DirectionsStatus.OK) {
		// 					this.setState({
		// 						directions: {...result}
		// 					})
		// 					rte = {...result.routes}
		// 				}
		// 			})
		// 		}
		// 	})
		// )(props =>
		// 	<GoogleMap defaultZoom={8} center={{ lat: 36.1699, lng: -115.1398 }}>
		// 		<TrafficLayer autoUpdate />
		// 	</GoogleMap>
		// )

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
						title={'PunchCode'}
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
				  	strokeColor='hotpink'
				  />

		  	</MapView>

			{/*<DirectionsComponent  />*/}
		  </View>
		)
	}
}

export default Map

const styles = StyleSheet.create({
	container: {
    // flex: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    bottom: 180,
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
  }
})