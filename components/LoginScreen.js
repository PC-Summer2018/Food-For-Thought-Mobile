import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default class LoginScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerStyle: {
        backgroundColor:'white',
      },
    }
  }

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.email !== '' && this.state.password !== '') {
    }
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <FontAwesome style={styles.titleTextIcon} name='cutlery' />
          <Text style={styles.titleText}>Login</Text>
        </View>
        <TextInput style={styles.loginInputs} name='email' onChange={this.handleChange} value={this.state.email} placeholder='Email'/>
        <TextInput style={styles.loginInputs} name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>
        <Button style={styles.button} onPress={this.handleSubmit} title='Login' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 30
  },
  titleTextIcon: {
    fontSize: 30,
    margin: 20
  },
  loginInputs: {
    width: 280,
    height: 50,
    borderWidth: 1.5,
    borderColor: 'grey',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    fontSize: 20
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'blue',
    color: 'white'
  },
})