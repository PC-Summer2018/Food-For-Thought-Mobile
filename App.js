import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import Map from './components/Map.js'
import Home from './components/Home.js'

export default class App extends React.Component {
  render() {
    <View>
      <Text>Welcome, Soup Kitchen #23!</Text>
      <Button title='Go to map' onPress={ () => this.props.navigation.navigate('Map')} />
    </View>
  }
}

const RootStack = createStackNavigator({
  Home: Home,
  Map: Map
},{
  initialRouteName: 'Home'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
