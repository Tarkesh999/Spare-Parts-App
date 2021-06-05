import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

export default function ShopAccount() {
  return (
    <View>
      <Text style={styles.logoText}>CREATE SHOP ACCOUNT</Text>
      <Text style={styles.inputHeader}>Owner Name</Text>
      <TextInput
        placeholder="Username"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />

      <Text style={styles.inputHeader}>Shop Name</Text>
      <TextInput
        placeholder="Shop Name"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />

      <Text style={styles.inputHeader}>Shop Address</Text>
      <TextInput
        placeholder="Shop Address"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />

      <Text style={styles.inputHeader}>Contact Number</Text>
      <TextInput
        placeholder="Enter your contact number"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />

      <Text style={styles.inputHeader}>Email</Text>
      <TextInput
        placeholder="Enter your email address"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />

      <Text style={styles.inputHeader}>Password</Text>
      <TextInput
        placeholder="Enter Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />

      <Button title="Upload Shop Image" />
      <Button title="Create Shop Account" />
    </View>
  );
}

const styles = StyleSheet.create({
  logoText: {
    fontSize: 32,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputHeader: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 16,
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
    marginBottom: 20,
  },
});
