import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import { Authentication } from './components/Authentication'

import LoginScreen from './components/LoginScreen.js'
import HomeScreen from './components/HomeScreen.js'
import MapScreen from './components/MapScreen.js'
import ReportsScreen from './components/ReportsScreen.js'
import PickupsScreen from './components/PickupsScreen.js'
import ProfileScreen from './components/ProfileScreen.js'


const App = props => (
  <NativeRouter>
  	<Authentication>
	    <View style={styles.safeArea}>
	      <Route exact path='/' component={LoginScreen} />
	      <Route path='/pickups' component={PickupsScreen} />
	      <Route path='/map' component={MapScreen} />
	    </View>
	  </Authentication>
  </NativeRouter>
)

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	}
})

export default App