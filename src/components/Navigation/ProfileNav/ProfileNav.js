import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Components
import Profile from '../../../screens/UserProfile/MainProfile/Profile';
import Settings from '../../../screens/UserProfile/Settings/Setting';

// CONST
const ProfileNav = createNativeStackNavigator();

const ProfileNavigate = () => {
  // Const
  const ProfileComp = 'Profile';
  const SettingsComp = 'Settings';
  //   Handle
  const handleOptions = route => {
    return {headerShown: false};
  };

  return (
    <ProfileNav.Navigator
      initialRouteName={ProfileComp}
      screenOptions={({route}) => {
        return handleOptions(route);
      }}>
      <ProfileNav.Screen name={ProfileComp} component={Profile} />
      <ProfileNav.Screen name={SettingsComp} component={Settings} />
    </ProfileNav.Navigator>
  );
};

export default ProfileNavigate;
