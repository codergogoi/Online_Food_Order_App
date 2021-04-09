import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { LandingScreen } from './src/screens/LandingScreen';

import { Provider } from 'react-redux'
import { store } from './src/redux'


import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { SearchScreen } from './src/screens/SearchScreen';
import { RestaurantScreen } from './src/screens/RestaurantScreen';
import { FoodDetailScreen } from './src/screens/FoodDetailScreen';
import { CartScreen } from './src/screens/CartScreen';
import { LoginScreen } from './src/screens/LoginScreen';


const switchNavigator = createSwitchNavigator({

    landingStack: {
      screen: createStackNavigator({
        Landing: LandingScreen,
        // search address screen
      },{
        defaultNavigationOptions: {
          headerShown: false
        }
      }),

    },

    homeStack:  createBottomTabNavigator({

      // Home tab Icon
      home: {
        screen: createStackNavigator({
          HomePage: HomeScreen,
          SearchPage: SearchScreen,
          RestaurantPage: RestaurantScreen,
          FoodDetailPage: FoodDetailScreen
        },{
          defaultNavigationOptions: {
            headerShown: false
          }
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

      // Home tab Icon
      Offer: {
        screen: createStackNavigator({
          OfferPage: HomeScreen //
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

       // Home tab Icon
       Cart: {
        screen: createStackNavigator({
          CartPage: CartScreen,
          LoginPage: LoginScreen
        }, {
          defaultNavigationOptions: {
            headerShown: false
          }
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },
       // Home tab Icon
       Account: {
        screen: createStackNavigator({
          AccountPage: HomeScreen,
          LoginPage: LoginScreen
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      }

     })

});


const AppNavigation = createAppContainer(switchNavigator);
 
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
   tabIcon: {
     width: 30,
     height: 30
   }
});
