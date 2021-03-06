import React from 'react';
import {View, Text} from 'react-native';

// Components
import handleIcon from '../../../components/Icon/Icon';

// CONST
import style from './styles';
import {FONTS, SIZES, COLORS} from '../../../constants/constants';

const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {handleIcon('FontAwesome5', 'hourglass-end', 30, 'blue')}
    </View>
  );
};

export default Settings;
