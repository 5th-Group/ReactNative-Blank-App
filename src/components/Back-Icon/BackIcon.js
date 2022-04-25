import React from 'react';
import {View, TouchableOpacity} from 'react-native';

// Components

import handleIcon from '../Icon/Icon';

// CONST
import {SIZES, COLORS, UTILS} from '../../constants/constants';

const BackIcon = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('in');
        onPress ? onPress() : null;
      }}>
      <View
        style={{
          padding: SIZES.padding - 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          marginRight: SIZES.padding,
          borderRadius: 10,
          borderColor: COLORS.primary,
        }}>
        <View style={{position: 'relative', left: 5}}>
          {handleIcon(
            'MaterialIcons',
            'arrow-back-ios',
            SIZES.h1Half,
            COLORS.primary,
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BackIcon;
