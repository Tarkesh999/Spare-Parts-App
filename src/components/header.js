import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
// import { MaterialCommunityIcons, FontAwesome, Entypo } from "@expo/vector-icons"

export default function Header({navigation}) {
  const logoPressHandler = () => {
    navigation.navigate('homeScreen');
  };

  const menuPressHandler = () => {
    navigation.openDrawer();
  };

  const cartPressHandler = () => {
    navigation.navigate('cart');
  };
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <TouchableWithoutFeedback onPress={logoPressHandler}>
          <Image
            source={require('../images/Logo.png')}
            style={styles.logoImage}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.icons}>
        <TouchableOpacity onPress={menuPressHandler}>
          {/* <Entypo name="menu" size={24} color="white" /> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <FontAwesome name="search" size={24} color="white" /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={cartPressHandler}>
          {/* <MaterialCommunityIcons
            name="shopping-outline"
            size={24}
            color="white"
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 72,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  logo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {height: 64, width: 96, marginLeft: 16},
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 8,
  },
});
