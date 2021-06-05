/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaViewComponent,
  SafeAreaViewBase,
} from 'react-native';
import Header from './src/components/header';
import Card from './src/components/card';
import {DescriptionCard} from './src/components/descriptionCard';
import DynamicList from './src/components/dynamicList';
import Footer from './src/components/footer';
import ShopAccount from './src/components/shopAccount';
import ShoppingCard from './src/components/shoppingCard';
import StaticList from './src/components/staticList';
import UploadItem from './src/components/uploadItem';
import LoginScreen from './src/Screens/LoginScreen';
import CartScreen from './src/Screens/CartScreen';
import HomeScreen from './src/Screens/HomeScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ItemDetailScreen from './src/Screens/ItemDetailScreen';
import ItemListScreen from './src/Screens/ItemListScreen';
import SellerScreen from './src/Screens/SellerScreen';
import {AppNavigator} from './src/AppNavigator';

const App = () => {
  const AndroidSafeArea = {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  };
  return (
    <AppNavigator />
    // <SafeAreaView forceInset={{top: 'always'}}>

    // <Header />
    // </SafeAreaView>
    // <SafeAreaView>
    //   {/* <Header /> */}
    //   {/* <Card /> */}
    //   {/* <DescriptionCard text="Sample" /> */}
    //   {/* <DynamicList /> */}
    //   {/* <Footer /> */}
    //   {/* <ShopAccount /> */}
    //   {/* <ShoppingCard /> */}
    //   {/* <StaticList /> */}
    //   {/* <UploadItem /> */}
    //   {/* <LoginScreen /> */}
    //   {/* <CartScreen /> */}
    //   {/* <HomeScreen /> */}
    //   {/* <SignUpScreen /> */}
    //   {/* <ItemDetailScreen /> */}
    //   {/* <ItemListScreen /> */}
    //   <AppNavigator />
    // </SafeAreaView>
  );
};

export default App;
