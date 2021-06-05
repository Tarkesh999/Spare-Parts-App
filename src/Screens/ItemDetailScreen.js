import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
} from 'react-native';
// import { Entypo, EvilIcons } from "@expo/vector-icons"

import {DescriptionCard} from '../components/descriptionCard';
import * as dummyData from '../dummyData';
import Footer from '../components/footer';

export default function ItemDetailScreen({
  items = dummyData.carAccessories.data,
  titleHeader = 'Brand: Ferrari Spares',
  titleSub = 'Engine 14000Hp',
  numOfRatings = 23,
  price = 2999,
  aboutTheItem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non semper purus. Nulla quis ullamcorper dolor. Praesent et semper libero. Quisque elementum nisi sapien, vel sodales tellus lacinia eget. Nullam hendrerit purus vitae risus malesuada, sit amet eleifend ex commodo. Proin accumsan molestie faucibus. Aliquam magna velit, accumsan non enim sed, faucibus dictum magna. Integer porta et elit id vulputate. Phasellus in felis ante. Proin at sapien dapibus, pulvinar tortor at, rutrum eros. Donec vitae rhoncus augue, et pretium urna. Donec eu facilisis quam, in cursus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  navigation,
}) {
  const buyNowPressHandler = () => {
    navigation.navigate('cart');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.title}>
          <Text style={styles.titleHeader}>{titleHeader}</Text>
          <Text style={styles.titleSub}>{titleSub}</Text>

          <View style={styles.starsContainer}>
            {/* <Entypo name="star" size={18} color="red" />
          <Entypo name="star" size={18} color="red" />
          <Entypo name="star" size={18} color="red" />
          <EvilIcons name="star" size={20} color="red" />
          <EvilIcons name="star" size={20} color="red" /> */}
            <Text style={styles.numOfRatings}>{numOfRatings}</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {items.map(item => (
            <Image
              key={item.key}
              source={item.imageUrl}
              style={styles.imageItem}
            />
          ))}
        </ScrollView>
        <View style={styles.details}>
          <Text style={{fontWeight: '400', fontSize: 30}}>PKR {price}</Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 15,
              marginTop: 4,
              marginBottom: 20,
            }}>
            Inclusive of all taxes
          </Text>

          <Button title="Buy Now" color="red" onPress={buyNowPressHandler} />
          <Button title="Add to Cart" color="red" />

          <DescriptionCard text={aboutTheItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: '500',
    color: '#dd0000',
  },
  titleSub: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 8,
  },
  imageItem: {
    height: 300,
    width: dummyData.DEVICE_WIDTH,
  },
  scrollView: {
    height: '40%',
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 0.3,
    borderColor: '#dddddd',
    marginTop: 16,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  numOfRatings: {marginLeft: 4, fontWeight: '200'},

  details: {
    marginHorizontal: 8,
    marginBottom: 16,
    marginTop: 40,
  },
});
