import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

// CONST
import {FONTS, COLORS, UTILS, SIZES} from '../../constants/constants';
import LottieView from 'lottie-react-native';
import style from './styles';
import handleIcon from '../Icon/Icon';

const Poster = ({image, title, author, navigation, id, score}) => {
  img = image ? image : '';
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{...style.posterWrap}}
        onPress={() => {
          navigation.navigate('Detail', {id: id});
        }}>
        {/* Rating score */}
        <View
          style={{
            position: 'absolute',
            top: 30,
            right: 35,
            paddingHorizontal: SIZES.padding - 10,
            paddingVertical: 3,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            zIndex: 10,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.lightGray, marginRight: 5}}>
            {score}
          </Text>
          {handleIcon('FontAwesome', 'star', SIZES.h2, COLORS.secondary)}
        </View>
        {/* Rating score */}
        {/* Book Cover */}
        <Image
          style={{...style.poster}}
          resizeMode="cover"
          source={img ? {uri: String(img)} : null}
        />
        {/* Book Cover */}
        {/* Book info */}
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
        {/* Book info */}
      </TouchableOpacity>
    </View>
  );
};

export default Poster;

export const LoadingPoster = () => {
  return (
    <View
      style={{
        width: 520,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: 520, height: 500}}>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/animation/loader/plane.json')}></LottieView>
      </View>
      <Text style={{...FONTS.h1, position: 'absolute', bottom: 50}}>
        Loading...
      </Text>
    </View>
  );
};
export const Loader = () => {
  return (
    <View
      style={{
        width: 70,
        height: 70,
        backgroundColor: COLORS.lightGray2,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...UTILS.shadow,
      }}>
      <View style={{width: 400, height: 200}}>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/animation/loader/infinite.json')}></LottieView>
      </View>
    </View>
  );
};
export const Error = () => {
  return (
    <View
      style={{
        width: 520,
        height: 500,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      <LottieView
        style={{
          width: 500,
          height: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop
        source={require('../../assets/animation/error/astronaut.json')}></LottieView>
      <Text
        style={{
          ...FONTS.largeTitleBold,
          fontSize: SIZES.h1,
          alignSelf: 'center',
          marginTop: 50,
        }}>
        Oops, Something went wrong!
      </Text>
    </View>
  );
};
export const LoginFail = () => {
  return (
    <View
      style={{
        width: 300,
        height: 300,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      <LottieView
        style={{
          width: 500,
          height: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop
        source={require('../../assets/animation/loginFailed/loginFailled.json')}></LottieView>
      <Text
        style={{
          ...FONTS.largeTitleBold,
          fontSize: SIZES.h1,
          alignSelf: 'center',
        }}>
        Login Failed!
      </Text>
    </View>
  );
};
export const Marker = () => {
  return (
    <LottieView
      style={{
        width: 70,
        height: 70,
        alignSelf: 'center',
      }}
      autoPlay
      loop
      source={require('../../assets/animation/marker/markerNew.json')}></LottieView>
  );
};
