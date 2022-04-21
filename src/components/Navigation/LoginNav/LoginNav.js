import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import StartPage from '../../../screens/StartPage/StartPage';
import Login from '../../../screens/Login/Login';
import Signup from '../../../screens/Signup/Signup';
import ForgotPassword from '../../../screens/ForgotPassword/ForgotPassword';

// Components
const LoginNav = createNativeStackNavigator();

// CONST

const LoginNavigate = () => {
  return (
    <LoginNav.Navigator
      initialRouteName="StartPage"
      screenOptions={({route}) => {
        return {
          headerShown: false,
        };
      }}>
      <LoginNav.Screen name="StartPage" component={StartPage} />
      <LoginNav.Screen name="Login" component={Login} />
      <LoginNav.Screen name="Signup" component={Signup} />
      <LoginNav.Screen name="ForgotPassword" component={ForgotPassword} />
    </LoginNav.Navigator>
  );
};

export default LoginNavigate;
