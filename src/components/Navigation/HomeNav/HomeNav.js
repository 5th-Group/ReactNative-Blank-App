import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Components
import Home from '../../../screens/Home/Home';
import Cart from '../../../screens/Cart/Cart';
import ProfileNavigate from '../ProfileNav/ProfileNav';
import SearchScreen from '../../../screens/SearchScreen/SearchScreen';

// CONST
import {COLORS, SIZES} from '../../../constants/constants';
const HomeNav = createBottomTabNavigator();

const HomeNavigate = () => {
  // Const
  const HomeComp = 'Home';
  const CartComp = 'Cart';
  const ProfileComp = 'ProfileNavigate';
  const SearchScreenComp = 'SearchScreen';
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
        bottom: 20,
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
        } else if (rn === SearchScreenComp) {
          iconName = focused ? 'search' : 'search-outline';
        }

        return (
          <Ionicons
            name={iconName}
            size={SIZES.h1p}
            color={focused ? COLORS.primary : color}
          />
        );
      },
    };
  };

  return (
    <HomeNav.Navigator
      initialRouteName={HomeComp}
      screenOptions={({route}) => {
        return handleIcon(route);
      }}>
      <HomeNav.Screen name={HomeComp} component={Home} />
      <HomeNav.Screen name={SearchScreenComp} component={SearchScreen} />
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
