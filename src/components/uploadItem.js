import React from "react"
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native"

export default function UploadItem() {
  return (
    <View>
      <Text style={styles.logoText}>UPLOAD SPARE PART</Text>
      <Text style={styles.inputHeader}>Owner Name</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Text style={styles.inputHeader}>Spare Part Name</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Text style={styles.inputHeader}>Brand</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Text style={styles.inputHeader}>Model</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Text style={styles.inputHeader}>Description</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Text style={styles.inputHeader}>Price</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Text style={styles.inputHeader}>Quantity</Text>
      <TextInput placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

      <Button title="Choose Image" />
      <Button title="Upload" />
    </View>
  )
}

const styles = StyleSheet.create({
  logoText: {
    fontSize: 32,
    fontWeight: "500",
    marginTop: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  inputHeader: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 16,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 20,
  },
})
