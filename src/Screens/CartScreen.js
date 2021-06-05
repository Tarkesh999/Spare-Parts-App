import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/header';
import ShoppingCard from '../components/shoppingCard';
import * as dummyData from '../dummyData';

export default function CartScreen({
  itemsList = dummyData.bikeAccessories.data,
  buyOnPress = () => {},
  navigation,
}) {
  const buttonTitle = `Proceed to Buy(${itemsList.length} item(s))`;

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <ScrollView
        style={{marginTop: 16, marginBottom: 64, backgroundColor: 'white'}}>
        {itemsList.map(item => (
          <ShoppingCard key={item.key} item={item} />
        ))}
        <Button title={buttonTitle} onPress={buyOnPress} color="#dd0000" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
