import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import Home from './components/Home.js'
import Map from './components/Map.js'
import Login from './components/Login.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <RootStack />
      </View>
    )
  }
}

const RootStack = createStackNavigator({
  Home: Home,
  Map: Map,
  Login: Login
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