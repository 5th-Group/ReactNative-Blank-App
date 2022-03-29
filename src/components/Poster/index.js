import React from 'react';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './styles';

const Poster = ({image, title, author, navigation}) => {
  return (
    <View style={style.posterWrap}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Image style={style.poster} source={image} />
      </TouchableOpacity>
      <View style={style.posterTitle}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.textSmall}>{author}</Text>
      </View>
    </View>
  );
};

export default Poster;
