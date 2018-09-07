import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Alert, Platform } from 'react-native';
import { Constants, MapView } from 'expo';

// Using a local version here because we need it to import MapView from 'expo'
import MapViewDirections from './src/MapViewDirections';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			coordinates: [
				{
					latitude: 37.3317876,
					longitude: -122.0054812,
				},
				{
					latitude: 37.771707,
					longitude: -122.4053769,
				},
			],
		};

		this.mapView = null;
	}

	onMapPress = (e) => {
		if (this.state.coordinates.length == 2) {
			this.setState({
				coordinates: [
					e.nativeEvent.coordinate,
				],
			});
		} else {
			this.setState({
				coordinates: [
					...this.state.coordinates,
					e.nativeEvent.coordinate,
				],
			});
		}
	}

	onReady = (result) => {
		this.mapView.fitToCoordinates(result.coordinates, {
			edgePadding: {
				right: (width / 20),
				bottom: (height / 20),
				left: (width / 20),
				top: (height / 20),
			}
		});
	}

	onError = (errorMessage) => {
		Alert.alert(errorMessage);
	}

	render() {
	  
	  if (Platform.OS === 'android') {
      return (
	      <View style={styles.container}>
	        <Text>
	          {"For some reason Android crashes here on Expo, so you'll have to test this with iOS … Sorry"}
	        </Text>
	      </View>
      );
	  }
	  
		return (
		  <View style={styles.container}>
  			<MapView
  				initialRegion={{
  					latitude: LATITUDE,
  					longitude: LONGITUDE,
  					latitudeDelta: LATITUDE_DELTA,
  					longitudeDelta: LONGITUDE_DELTA,
  				}}
  				style={StyleSheet.absoluteFill}
  				ref={c => this.mapView = c} // eslint-disable-line react/jsx-no-bind
  				onPress={this.onMapPress}
  				loadingEnabled={true}
  			>
  				{this.state.coordinates.map((coordinate, index) =>
  					<MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} /> // eslint-disable-line react/no-array-index-key
  				)}
  				{(this.state.coordinates.length === 2) && (
  					<MapViewDirections
  						origin={this.state.coordinates[0]}
  						destination={this.state.coordinates[1]}
  						apikey={GOOGLE_MAPS_APIKEY}
  						strokeWidth={3}
  						strokeColor="hotpink"
  						onReady={this.onReady}
  						onError={this.onError}
  					/>
  				)}
  			</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});