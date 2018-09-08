
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import ManagePickups from './components/ManagePickups.js'
import Map from './components/Map.js'
import Login from './components/Login.js'

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

const RootStack = createStackNavigator(
  {
    ManagePickups: {
      screen: ManagePickups
    },
    Map: {
      screen: Map
    },
    Login: {
      screen: Login
    },
  },
    {
      initialRouteName: 'Login'
    }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});