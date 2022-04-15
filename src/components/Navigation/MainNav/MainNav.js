import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeNavigate from '../HomeNav/HomeNav';
import LoginNavigate from '../LoginNav/LoginNav';
import Detail from '../../../screens/Detail/Detail';

const Nav = createNativeStackNavigator();

const Navigate = () => {
  return (
    <Nav.Navigator
      initialRouteName="LoginNavigate"
      screenOptions={({route}) => {
        return {
          headerShown: false,
        };
      }}>
      <Nav.Screen name="LoginNavigate" component={LoginNavigate} />
      <Nav.Screen name="HomeNavigate" component={HomeNavigate} />
      <Nav.Screen name="Detail" component={Detail} />
    </Nav.Navigator>
  );
};

export default Navigate;
