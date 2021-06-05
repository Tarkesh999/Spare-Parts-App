import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Card from './card';
// import {AntDesign} from '@expo/vector-icons';

export default function DynamicList({listData, showHeader = true, navigation}) {
  const headerPressHandler = () => {
    navigation.navigate('itemList');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={headerPressHandler}>
        {showHeader && <Text style={styles.title}>{listData.title}</Text>}
        {/* {showHeader && (
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ position: "absolute", right: 8, bottom: 12 }}
          />
        )} */}
      </TouchableOpacity>
      {showHeader && (
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.8,
            marginBottom: 24,
          }}
        />
      )}
      <FlatList
        data={listData.data}
        pagingEnabled
        horizontal
        renderItem={({item}) => {
          return (
            <Card
              imageUrl={item.imageUrl}
              title={item.title}
              navigation={navigation}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    marginBottom: 4,
  },
});
