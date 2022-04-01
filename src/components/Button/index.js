import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import styles from './styles';
const Button = ({title, color, navigate, size, margin, onPress}) => {
  // Hande Button Style
  const handleButtonStyle = color => {
    if (color) {
      return {
        bgColor: styles.color,
        titleColor: styles.noneColorTitle,
      };
    } else {
      return {
        bgColor: styles.noneColor,
        titleColor: styles.colorTitle,
      };
    }
  };
  // Handle Custome size
  const handleSize = size => {
    if (size && typeof size === 'object' && size.w == 'full') {
      return {
        width: fullWidth,
        height: size.h,
      };
    } else if (size && typeof size === 'object') {
      return {
        width: size.w,
        height: size.h,
      };
    } else {
      console.log('Input size as an object to customize the size');
    }
  };

  // Consts
  const fullWidth = Dimensions.get('window').width - 40;
  const Margin = margin ? {marginHorizontal: margin} : null;
  const {bgColor, titleColor} = handleButtonStyle(color);
  const Size = handleSize(size);

  return (
    <View>
      {navigate ? (
        <TouchableOpacity
          onPress={navigate}
          style={[styles.buttonWrap, bgColor, Size, Margin]}>
          <Text style={[titleColor, styles.title]}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          style={[styles.buttonWrap, bgColor, Size, Margin]}>
          <Text style={[titleColor, styles.title]}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Button;
