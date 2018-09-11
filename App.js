import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'

import LoginScreen from './components/LoginScreen.js'
import HomeScreen from './components/HomeScreen.js'
import MapScreen from './components/MapScreen.js'
import ReportsScreen from './components/ReportsScreen.js'
import PickupsScreen from './components/PickupsScreen.js'
import ProfileScreen from './components/ProfileScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path='/' component={LoginScreen} />
          <Route path='/home' component={HomeScreen} />
          <Route path='/map' component={MapScreen} />
          <Route path='/reports' component={ReportsScreen} />
          <Route path='/pickups' component={PickupsScreen} />
          <Route path='/profile' component={ProfileScreen} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:10,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
})

/*
<View style={styles.container}>
  <Link to="/home"><Text>Home</Text></Link>
</View>
*/
