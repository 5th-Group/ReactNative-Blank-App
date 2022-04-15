import React from 'react';
import {View, Text} from 'react-native';

// CONST
import {FONTS, COLORS, SIZES} from '../../constants/constants';

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{...FONTS.h1}}>Profile Page</Text>
    </View>
  );
};

export default Profile;
