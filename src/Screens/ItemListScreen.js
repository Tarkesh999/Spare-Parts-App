import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../components/header';
import StaticList from '../components/staticList';

export default function ItemListScreen({navigation, listData}) {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Header navigation={navigation} />
      <StaticList navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
