import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';

import Home from '../../screens/Home';
import Detail from '../../screens/Detail';
import Profile from '../../screens/Profile';
import Cart from '../../screens/Cart';
import Settings from '../../screens/Settings';
import {constants} from '../../constants';

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const cartName = 'Cart';
const settingsName = 'Settings';
const profileName = 'Profile';

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === cartName) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? constants.primaryColor : color}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
};

export default Tabs;
