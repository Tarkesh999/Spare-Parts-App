import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import DynamicList from '../components/dynamicList';

import Header from '../components/header';
import ScrollUp from 'react-native-scroll-up';
import * as dummyData from '../dummyData';
// import {AntDesign} from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import Footer from '../components/footer';
import {Actions} from 'react-native-router-flux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleOnScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 8) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Work in Progress</Text>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 8,
  },
});
