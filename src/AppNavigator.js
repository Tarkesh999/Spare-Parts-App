import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import { StackViewStyleInterpolator } from "react-navigation-stack"
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Entypo} from '@expo/vector-icons';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import SellerScreen from './Screens/SellerScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ItemDetailScreen from './Screens/ItemDetailScreen';
import MenuIcon from './components/menuIcon';
import Header from './components/header';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from './Screens/CartScreen';
import StaticList from './components/staticList';
import ItemListScreen from './Screens/ItemListScreen';

const HomeStack = createStackNavigator();
const homeScreenFlow = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="homeScreen" component={HomeScreen} />
    <HomeStack.Screen name="itemList" component={ItemListScreen} />
    <HomeStack.Screen name="itemDetail" component={ItemDetailScreen} />
    <HomeStack.Screen name="staticList" component={StaticList} />
    <HomeStack.Screen name="cart" component={CartScreen} />
  </HomeStack.Navigator>
);

const Drawer = createDrawerNavigator();
const drawerFlow = () => (
  <Drawer.Navigator initialRouteName="HomeScreen" headerMode="none">
    <Drawer.Screen name="Switch to Buyer" component={homeScreenFlow} />
    <Drawer.Screen name="Switch to Seller" component={sellerScreenFlow} />
    <Drawer.Screen name="Log Out" component={LoginScreen} />
  </Drawer.Navigator>
);

const SellerStack = createStackNavigator();
const sellerScreenFlow = () => (
  <SellerStack.Navigator headerMode="none">
    <SellerStack.Screen name="sellerHomeScreen" component={SellerScreen} />
  </SellerStack.Navigator>
);

const Auth = createStackNavigator();
export const AppNavigator = () => (
  <NavigationContainer>
    <Auth.Navigator headerMode="none">
      <Auth.Screen name="login" component={LoginScreen} />
      <Auth.Screen name="signUp" component={SignUpScreen} />
      <Auth.Screen name="drawerFlow" component={drawerFlow} />
    </Auth.Navigator>
  </NavigationContainer>
);

// export default AppNavigator;
