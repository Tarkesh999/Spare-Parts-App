import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import * as dummyData from '../dummyData';

export default function Footer() {
  return (
    <React.Fragment>
      <View style={styles.footer}>
        <View style={styles.details}>
          <Text style={styles.text}>Phone</Text>
          <Text style={[styles.text, {marginBottom: 16}]}>
            {dummyData.MOBILE_NUM}
          </Text>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>{dummyData.EMAIL}</Text>
        </View>

        <View style={styles.icons}>
          {/* <FontAwesome name="facebook-square" size={24} color="red" />
          <FontAwesome name="youtube-square" size={24} color="red" />
          <FontAwesome5 name="instagram-square" size={24} color="red" /> */}
        </View>
      </View>

      <View style={styles.copyRightContainer}>
        <Text style={styles.copyRightText}>
          @copyright {dummyData.COPYRIGHT_TEXT}
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 128,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  details: {flex: 3, paddingLeft: 16, paddingTop: 16},
  icons: {
    height: '80%',
    marginRight: 16,
    marginTop: 8,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    marginBottom: 4,
  },
  copyRightContainer: {
    height: 32,
    backgroundColor: '#dd0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyRightText: {
    fontWeight: '600',
  },
});
