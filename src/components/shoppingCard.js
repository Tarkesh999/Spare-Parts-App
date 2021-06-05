import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
// import { AntDesign } from "@expo/vector-icons"

export default function ShoppingCard({
  numOfItems = 1,
  price = 2999,
  item = {
    title: 'Engine Spare Part ',
    imageUrl: require('../images/engine.jpeg'),
  },
}) {
  const [itemsCount, setItemsCount] = React.useState(numOfItems);

  const incrementHandler = () => {
    setItemsCount(itemsCount + 1);
  };

  const decrementHandler = () => {
    itemsCount > 0 && setItemsCount(itemsCount - 1);
  };

  return (
    <View style={{marginBottom: 16}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={[styles.title, {top: 48, fontSize: 20}]}>
        PKR {price * itemsCount}
      </Text>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={item.imageUrl}
            style={styles.image}
            resizeMode={'cover'}
          />
        </View>

        <View style={styles.cardDetails}>
          <View style={styles.itemsCount}>
            <TouchableOpacity onPress={decrementHandler} activeOpacity={0.6}>
              {/* <AntDesign name="minuscircle" size={20} color="#dd0000" /> */}
            </TouchableOpacity>
            <Text style={{fontSize: 18, marginHorizontal: 4}}>
              {itemsCount}
            </Text>
            <TouchableOpacity onPress={incrementHandler} activeOpacity={0.6}>
              {/* <AntDesign name="pluscircle" size={20} color="#dd0000" /> */}
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{color: '#ff0000', fontSize: 16, paddingLeft: 4}}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 220,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#dddddd',
    paddingHorizontal: 8,
  },
  title: {
    position: 'absolute',
    right: 16,
    top: 16,
    fontWeight: '400',
    fontSize: 24,
  },
  image: {
    height: undefined,
    width: undefined,
    flexGrow: 1,
  },
  imageContainer: {width: 196, height: 150},
  itemsCount: {
    marginTop: 64,
    flexDirection: 'row',
    marginBottom: 5,
  },
  cardDetails: {
    marginLeft: 'auto',
    paddingRight: 16,
  },
});
