import React from 'react';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './styles';

const Poster = ({image, title, author, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={style.posterWrap}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Image resizeMode="cover" style={style.poster} source={image} />
        <View style={style.posterTitle}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.textSmall}>{author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Poster;
