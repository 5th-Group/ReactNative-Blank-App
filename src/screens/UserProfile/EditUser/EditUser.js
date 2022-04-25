import React from 'react';
import {View, Text} from 'react-native';

// CONST
import {FONTS, SIZES, COLORS} from '../../../constants/constants';

const EditUser = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{...FONTS.h1}}>EditUser Page</Text>
    </View>
  );
};

export default EditUser;
