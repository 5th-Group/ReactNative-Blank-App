import React from 'react';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './styles';

// CONST
import {FONTS, COLORS, UTILS} from '../../constants/constants';

const Poster = ({image, title, author, navigation, item}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{...style.posterWrap}}
        onPress={() => {
          navigation.navigate('Detail', {item: item});
        }}>
        <Image resizeMode="cover" style={style.poster} source={image} />
        <View style={style.posterTitle}>
          <Text
            numberOfLines={1}
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
              width: '100%',
            }}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...FONTS.body2,
              width: '100%',
            }}>
            {author}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Poster;
