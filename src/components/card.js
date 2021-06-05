import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import { Entypo } from "@expo/vector-icons"

export default function Card({imageUrl, title, navigation, customStyle = {}}) {
  const cardPressHandler = () => {
    navigation.navigate('itemDetail');
  };
  return (
    <TouchableOpacity
      onPress={cardPressHandler}
      activeOpacity={0.7}
      style={[styles.card, customStyle]}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>

      <View style={styles.title}>
        <View style={styles.starsContainer}>
          {/* <Entypo name="star" size={14} color="black" />
          <Entypo name="star" size={14} color="black" />
          <Entypo name="star" size={14} color="black" />
          <Entypo name="star" size={14} color="black" />
          <Entypo name="star" size={14} color="black" /> */}
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: 186,
    marginLeft: 12,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 2,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: '#dddddd',
  },
  starsContainer: {flexDirection: 'row', marginBottom: 8},
  title: {flex: 1, paddingTop: 16, alignItems: 'center'},
  text: {fontWeight: '700', color: 'grey'},
});
