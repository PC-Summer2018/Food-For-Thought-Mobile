import React, { Component } from 'react'
import { 
	StyleSheet,
	Text, 
	Button, 
	Keyboard 
} from 'react-native'

const styles = StyleSheet.create({
	container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
})

class Login extends Component {
	state = {
		name: '',
		password: ''
	}

	handleSubmit = () => {
		fetch('http://', {
			method: 'POST',
			headers: {

			},
			body
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
			</View>
		)
	}
}

export default Login