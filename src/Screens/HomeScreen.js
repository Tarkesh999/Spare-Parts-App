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
// import { AntDesign } from "@expo/vector-icons"
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
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <ScrollView
          ref={scrollview => {
            this.scrollview = scrollview;
          }}
          onScroll={event => this.handleOnScroll(event)}
          scrollEventThrottle={0}
          style={styles.scrollView}>
          <DynamicList
            listData={dummyData.bikeAccessories}
            navigation={navigation}
          />
          <DynamicList
            listData={dummyData.carAccessories}
            navigation={navigation}
          />
          <DynamicList
            listData={dummyData.jeepAccessories}
            navigation={navigation}
          />
          <DynamicList listData={dummyData.gadgets} navigation={navigation} />
          <DynamicList
            listData={dummyData.newArrival}
            navigation={navigation}
          />

          <YoutubePlayer height={250} videoId={dummyData.YOUTUBE_VIDEO_ID} />

          <Footer />
        </ScrollView>

        {/* <ScrollUp
          refView="ScrollView"
          root={this.scrollview}
          type="icon"
          // icon={<AntDesign name="totop" size={24} color="black" />}
          backgroundColor="#dd0000"
          visible={this.state.visible}
          bottom={8}
        /> */}
      </SafeAreaView>
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
    // paddingBottom: 100,
  },
});
