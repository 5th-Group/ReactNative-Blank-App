import React from 'react';

import {Image, Text, View} from 'react-native';
import style from './styles';

const Poster = ({image, title, author}) => {
  return (
    <View style={style.posterWrap}>
      <Image style={style.poster} source={image} />
      <View style={style.posterTitle}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.textSmall}>{author}</Text>
      </View>
    </View>
  );
};

export default Poster;
