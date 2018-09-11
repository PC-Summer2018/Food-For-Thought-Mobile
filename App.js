import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import LoginScreen from './components/LoginScreen.js'
import HomeScreen from './components/HomeScreen.js'
import MapScreen from './components/MapScreen.js'
import ReportsScreen from './components/ReportsScreen.js'
import PickupsScreen from './components/PickupsScreen.js'
import ProfileScreen from './components/ProfileScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Login:LoginScreen,
    Home:HomeScreen,
    Map:MapScreen,
    Reports:ReportsScreen,
    Pickups:PickupsScreen,
    Profile:ProfileScreen,
  },
  {
    initialRouteName:'Login',
    navigationOptions: ({navigate, navigation}) => ({
      headerRight: (
        <Button onPress={() => navigation.navigate('Login')} title='Logout' color='white' />
      ),
      headerStyle: {
        backgroundColor:'black',
      },
      headerTintColor:'white',
      headerTitleStyle: {
        fontWeight:'bold',
      },
    }),
  }
)
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:10,
    backgroundColor:'#ebfbec',
    alignItems:'center',
    justifyContent:'center',
  },
})
