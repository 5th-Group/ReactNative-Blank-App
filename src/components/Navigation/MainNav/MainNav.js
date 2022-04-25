import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeNavigate from '../HomeNav/HomeNav';
import LoginNavigate from '../LoginNav/LoginNav';
import Detail from '../../../screens/Detail/Detail';
import OrderHistory from '../../../screens/UserProfile/OrderHistory/OrderHistory';
import Settings from '../../../screens/UserProfile/Settings/Setting';
import EditUser from '../../../screens/UserProfile/EditUser/EditUser';

const Nav = createNativeStackNavigator();

const Navigate = () => {
  // Const
  const LoginNav = 'LoginNavigate';
  const HomeNav = 'HomeNavigate';
  const DetailComp = 'Detail';
  const OrderHistoryComp = 'OrderHistory';
  const SettingsComp = 'Settings';
  const EditUserComp = 'EditUser';

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
      <Nav.Screen name={DetailComp} component={Detail} />
      <Nav.Screen name={OrderHistoryComp} component={OrderHistory} />
      <Nav.Screen name={SettingsComp} component={Settings} />
      <Nav.Screen name={EditUserComp} component={EditUser} />
    </Nav.Navigator>
  );
};

export default Navigate;
