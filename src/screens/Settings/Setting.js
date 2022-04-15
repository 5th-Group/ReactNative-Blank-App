import React from 'react';
import {View, Text} from 'react-native';
// CONST
import style from './styles';
import {COLORS, SIZES, FONTS} from '../../constants/constants';

const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{...FONTS.h1}}>Setting Page</Text>
    </View>
  );
};

export default Settings;
