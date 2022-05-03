import React from 'react';
import {View} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#0fc2c0',
  secondary: '#E9412B',
  third: '#7e90b0',
  fadeColor: 'rgba(15,194,192, 0.3)',
  success: '#40e6a3',
  backgroun: '#f2f2f2',
  primaryRGBA: opacity => {
    return `rgba(15,194,192, ${opacity})`;
  },
  overlay: opacity => {
    return `rgba(0,0,0,${opacity})`;
  },
  // colors
  shadow: '#000',
  red: '#fc3d03',
  black: '#1E1B26',
  white: '#FFFFFF',
  lightGray: '#64676D',
  lightGray2: '#EFEFF0',
  lightGray3: '#D4D5D6',
  lightGray4: '#7D7E84',
  gray: '#2D3038',
  gray1: '#282C35',
  darkRed: '#31262F',
  lightRed: '#C5505E',
  darkBlue: '#22273B',
  lightBlue: '#424BAF',
  darkGreen: '#213432',
  lightGreen: '#31Ad66',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 20,
  padding2: 30,
  padding3: 40,

  // font sizes
  largeTitle: 50,
  h1Hyper: 45,
  h1p: 40,
  h1Half: 35,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  bold: 'Metropolis-Bold',
  regular: 'Metropolis-Regular',
  largeTitle: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  largeTitleBold: {
    fontFamily: 'Metropolis-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  hSpec: {fontFamily: 'Metropolis-Black', fontSize: SIZES.h1p, lineHeight: 40},
  h1: {fontFamily: 'Metropolis-Black', fontSize: SIZES.h1, lineHeight: 36},
  h1thin: {fontFamily: 'Metropolis-Light', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Metropolis-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h2thin: {fontFamily: 'Metropolis-Light', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Metropolis-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Metropolis-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Metropolis-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

export const UTILS = {
  absolute: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  shadow2: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

export const Divider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 2,
        }}></View>
    </View>
  );
};
