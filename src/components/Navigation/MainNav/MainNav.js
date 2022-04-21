import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeNavigate from '../HomeNav/HomeNav';
import LoginNavigate from '../LoginNav/LoginNav';
import Detail from '../../../screens/Detail/Detail';

const Nav = createNativeStackNavigator();

const Navigate = () => {
  // Const
  const LoginNav = 'LoginNavigate';
  const HomeNav = 'HomeNavigate';
  return (
    <Nav.Navigator
      initialRouteName={HomeNav}
      screenOptions={({route}) => {
        return {
          headerShown: false,
        };
      }}>
      <Nav.Screen name={LoginNav} component={LoginNavigate} />
      <Nav.Screen name={HomeNav} component={HomeNavigate} />
      <Nav.Screen name="Detail" component={Detail} />
    </Nav.Navigator>
  );
};

export default Navigate;
