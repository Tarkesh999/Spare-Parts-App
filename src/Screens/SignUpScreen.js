import React, {Component, setState} from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
// import { createDrawerNavigator } from "@react-navigation/drawer"
// import { NavigationContainer } from "@react-navigation/native"

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullname: '',
      password: '',
      contactno: '',
      email: '',
      address: '',
    };
  }

  onPressHandler = () => {
    this.props.navigation.navigate('drawerFlow');
  };
  api_call = () => {
    console.log(this.state.Fullname);
    fetch('http://192.168.1.3/Webapidemo1/api/AutoPart/Registercustomers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        cfullname: this.state.Fullname,
        cpass: this.state.password,
        caddress: this.state.address,
        cemail: this.state.email,
        ccontactno: this.state.contactno,
      }),
    })
      .then(response => {
        response.json();
        console.log('response', response);
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Account SignUp</Text>
        <TextInput
          value={this.state.Fullname}
          onChangeText={Fullname => this.setState({Fullname})}
          placeholder={'Fullname'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.contactno}
          onChangeText={contactno => this.setState({contactno})}
          placeholder={'Contact Number'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.address}
          onChangeText={address => this.setState({address})}
          placeholder={'Address'}
          style={styles.input}
        />
        <Button
          title={'SignUp'}
          style={styles.input}
          onPress={() => this.onPressHandler()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
});
