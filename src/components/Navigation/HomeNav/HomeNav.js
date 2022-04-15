import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Components
import Home from '../../../screens/Home/Home';
import Settings from '../../../screens/Settings/Setting';
import Profile from '../../../screens/Profile/Profile';
import Cart from '../../../screens/Cart/Cart';

// CONST
import {COLORS} from '../../../constants/constants';
const homeName = 'Home';
const cartName = 'Cart';
const settingsName = 'Settings';
const profileName = 'Profile';

const HomeNav = createBottomTabNavigator();

const HomeNavigate = () => {
  // Const
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <HomeNav.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        return {
          headerShown: false,
          initialRouteName: 'Login',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 80,
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

            return (
              <Ionicons
                name={iconName}
                size={35}
                color={focused ? COLORS.primary : color}
              />
            );
          },
        };
      }}>
      <HomeNav.Screen name="Home" component={Home} />
      <HomeNav.Screen name="Profile" component={Profile} />
      <HomeNav.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: quantity >= 1 ? quantity : null,
          tabBarBadgeStyle: {
            marginTop: 15,
            borderWidth: 1,
            borderColor: 'white',
          },
        }}
      />
      <HomeNav.Screen name="Settings" component={Settings} />
    </HomeNav.Navigator>
  );
};

export default HomeNavigate;
