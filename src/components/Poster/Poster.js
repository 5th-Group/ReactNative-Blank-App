import React from 'react';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './styles';

// CONST
import {FONTS, COLORS} from '../../constants/constants';

const Poster = ({image, title, author, navigation, item}) => {
  return (
    <View>
      <TouchableOpacity
        style={style.posterWrap}
        onPress={() => {
          navigation.navigate('Detail', {item: item});
        }}>
        <Image resizeMode="cover" style={style.poster} source={image} />
        <View style={style.posterTitle}>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>{title}</Text>
          <Text style={{...FONTS.body2}}>{author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Poster;
