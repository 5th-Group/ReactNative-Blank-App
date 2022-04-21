import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Components
import Home from '../../../screens/Home/Home';
import Cart from '../../../screens/Cart/Cart';
import ProfileNavigate from '../ProfileNav/ProfileNav';

// CONST
import {COLORS} from '../../../constants/constants';
const HomeNav = createBottomTabNavigator();

const HomeNavigate = () => {
  // Const
  const HomeComp = 'Home';
  const CartComp = 'Cart';
  const ProfileComp = 'ProfileNavigate';
  const quantity = useSelector(state => state.cart.quantity);

  // Handle

  const handleQuantity = {
    tabBarBadge: quantity >= 1 ? quantity : null,
    tabBarBadgeStyle: {
      marginTop: 15,
      borderWidth: 1,
      borderColor: 'white',
    },
  };

  // Handle Icon Tab Navigate

  const handleIcon = route => {
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

        if (rn === HomeComp) {
          iconName = focused ? 'home' : 'home-outline';
        } else if (rn === CartComp) {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (rn === ProfileComp) {
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
  };

  return (
    <HomeNav.Navigator
      initialRouteName={ProfileComp}
      screenOptions={({route}) => {
        return handleIcon(route);
      }}>
      <HomeNav.Screen name={HomeComp} component={Home} />
      <HomeNav.Screen name={ProfileComp} component={ProfileNavigate} />
      <HomeNav.Screen
        name={CartComp}
        component={Cart}
        options={handleQuantity}
      />
    </HomeNav.Navigator>
  );
};

export default HomeNavigate;
