import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Card from './card';
import * as dummyData from '../dummyData';

export default function StaticList({
  showHeader = true,
  listData = dummyData.jeepAccessories,
  navigation,
}) {
  const items = listData.data;
  const title = listData.title;
  return (
    <ScrollView style={styles.container}>
      {showHeader && <Text style={styles.title}>{title}</Text>}
      {showHeader && (
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.8,
            marginBottom: 24,
          }}
        />
      )}

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {items.map(item => {
          return (
            <Card
              key={item.key}
              imageUrl={item.imageUrl}
              title={item.title}
              customStyle={{marginBottom: 16}}
              navigation={navigation}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    marginBottom: 4,
  },
});
