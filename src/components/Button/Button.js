import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

// Components
import LottieView from 'lottie-react-native';

// CONST
import styles from './styles';
import {FONTS, SIZES, COLORS, UTILS} from '../../constants/constants';

const Button = ({
  title,
  color,
  navigate,
  size,
  margin,
  onPress,
  disable,
  danger,
}) => {
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

  // Renders
  const navigateButton = () => {
    return (
      <TouchableOpacity
        onPress={navigate}
        style={
          !disable
            ? [styles.buttonWrap, bgColor, Size, Margin]
            : {...styles.buttonWrap, ...Size, backgroundColor: COLORS.lightGray}
        }>
        <Text style={[titleColor, FONTS.h2]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const normalButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress ? onPress() : null;
        }}
        style={
          !disable
            ? {
                ...styles.buttonWrap,
                ...bgColor,
                borderColor: danger
                  ? COLORS.secondary
                  : bgColor.backgroundColor,
                ...Size,
                ...Margin,
              }
            : {
                ...styles.buttonWrap,
                ...Size,
                backgroundColor: COLORS.lightGray3,
                ...Margin,
              }
        }>
        {!disable ? (
          <Text
            style={{
              ...titleColor,
              ...FONTS.h2,
              color: danger ? COLORS.secondary : titleColor.color,
            }}>
            {title}
          </Text>
        ) : (
          <View style={{...UTILS.center, width: 200, height: 200}}>
            <LottieView
              autoPlay
              loop
              source={require('../../assets/animation/loader/dotLoader.json')}></LottieView>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return <View>{navigate ? navigateButton() : normalButton()}</View>;
};

export default Button;
