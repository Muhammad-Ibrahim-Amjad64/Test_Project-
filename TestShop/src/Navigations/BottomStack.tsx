

import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import OrderHistory
    from '../screens/OrderHistory';
import Cart from '../screens/Cart';
import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import NavigationsStrings from './NavigationsStrings';
import { Dark } from '../../styles/theme';
import { images } from '../../utlies';

const Bottom = createBottomTabNavigator();

const BottomStack = () => {
    return (
        <Bottom.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: Dark.primaryColor, borderColor: Dark.primaryColor },
            tabBarInactiveTintColor: "#4E5053",
            tabBarActiveTintColor: Dark.secondaryColor,tabBarShowLabel:false
            // headerTintColor:Dark.primaryColor
            
        }}>
            <Bottom.Screen
                options={{    tabBarIcon: ({focused}) => (
                    <Image
                      source={images.bHome}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(3),
                          width: responsiveHeight(3),
                          tintColor: focused ? Dark.secondaryColor : "#4E5053",
                      
                      }}
                    />
                  ),}}
                name={NavigationsStrings.HOME} component={Home}></Bottom.Screen>
            <Bottom.Screen   options={{    tabBarIcon: ({focused}) => (
                    <Image
                      source={images.bBag}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(3),
                          width: responsiveHeight(3),
                          tintColor: focused ? Dark.secondaryColor : "#4E5053",
                      
                      }}
                    />
                  ),}} name={NavigationsStrings.CART} component={Cart}></Bottom.Screen>
            <Bottom.Screen   options={{    tabBarIcon: ({focused}) => (
                    <Image
                      source={images.heart}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(3),
                          width: responsiveHeight(3),
                          tintColor: focused ? Dark.secondaryColor : "#4E5053",
                      
                      }}
                    />
                  ),}} name={NavigationsStrings.FAVORITES} component={Favorites}></Bottom.Screen>
            <Bottom.Screen   options={{    tabBarIcon: ({focused}) => (
                    <Image
                      source={images.notification}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(3),
                          width: responsiveHeight(3),
                          tintColor: focused ? Dark.secondaryColor : "#4E5053",
                      
                      }}
                    />
                  ),}} name={NavigationsStrings.ORDER_HISTORY} component={OrderHistory}></Bottom.Screen>
        </Bottom.Navigator>
    )
}


export default BottomStack;