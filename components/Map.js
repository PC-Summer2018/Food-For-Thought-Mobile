import React, { Component } from 'react'
import { View,  Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

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
    bottom: 0,
    right: 0
  }
})
class Map extends Component {
	// state = {
	// 	currentLatLng: {
	// 		lat: 0,
	// 		lng: 0
	// 	}
	// }

	render() {
		return (
			<View style={styles.container}>
				<MapView style={styles.map}
			    initialRegion={{
			      latitude: 36.1699,
			      longitude: -115.1398,
			      latitudeDelta: 0.0922,
			      longitudeDelta: 0.0421,
			    }}
			  />
		  </View>
		)
	}
}

export default Map