import React, {Component} from 'react';

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  SafeAreaView,
} from 'react-native';

import * as dummyData from '../dummyData';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <Text style={styles.logoText}>{dummyData.COMPANY_NAME}</Text>
                <TextInput
                  placeholder="Username"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                />
                <TextInput
                  placeholder="Password"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true}
                />
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() => this.onLoginPress()}
                  title="Login"
                />
                <Button
                  buttonStyle={styles.fbLoginButton}
                  onPress={() => this.onSignUpPress()}
                  title="Create your account"
                  color="#3897f1"
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.canGoBack() && navigation.popToTop();
  }

  componentWillUnmount() {}

  onLoginPress() {
    this.props.navigation.navigate('drawerFlow');
  }

  onSignUpPress() {
    this.props.navigation.navigate('signUp');
  }
}

const styles = StyleSheet.create({
  containerView: {
    flexGrow: 1,
  },
  loginScreenContainer: {
    flexGrow: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flexGrow: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
