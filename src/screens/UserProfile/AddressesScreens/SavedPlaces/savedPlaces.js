import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Components
import handleIcon from '../../../../components/Icon/Icon';
import BackIcon from '../../../../components/Back-Icon/BackIcon';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../../constants/constants';

const SavedPlace = ({navigation}) => {
  // Handle
  const navigateBack = () => {
    navigation.goBack();
  };
  // Navigate
  const navigateEditPlace = () => {
    navigation.navigate('EditPlace');
  };
  // Render
  // Header
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginVertical: SIZES.padding - 10,
          marginBottom: SIZES.padding + 10,
        }}>
        {/* Back icon */}
        <BackIcon onPress={navigateBack}></BackIcon>
        {/* Title */}
        <Text
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
          }}>
          My Address
        </Text>
      </View>
    );
  };
  // Address
  const renderAddress = () => {
    return (
      <View style={{width: SIZES.width - 40}}>
        <Place
          onPress={navigateEditPlace}
          title="Home"
          address="262/20, Lạc Long Quân, Phường 10, Quận 11, TP.HCM"></Place>
        <Place
          title="Home"
          address="262/20, Lạc Long Quân, Phường 10, Quận 11, TP.HCM"></Place>
        <Place
          title="Home"
          address="262/20, Lạc Long Quân, Phường 10, Quận 11, TP.HCM"></Place>
        <Place
          title="Home"
          address="262/20, Lạc Long Quân, Phường 10, Quận 11, TP.HCM"></Place>
        <Place
          title="Home"
          address="262/20, Lạc Long Quân, Phường 10, Quận 11, TP.HCM"></Place>
        <Place
          title="Home"
          address="262/20, Lạc Long Quân, Phường 10, Quận 11, TP.HCM"></Place>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: SIZES.padding,
        }}
        showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderAddress()}
      </ScrollView>
    </View>
  );
};

export default SavedPlace;

const Place = ({title, address, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress ? onPress() : null;
        }}
        style={{
          padding: SIZES.padding - 10,
          marginVertical: SIZES.padding - 12,
          flexDirection: 'row',
          width: '100%',
          height: 120,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignContent: 'center',
          ...UTILS.shadow,
        }}>
        {/* Icon */}
        <View
          style={{
            flex: 1,
            marginRight: 10,
            ...UTILS.center,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: COLORS.fadeColor,
              borderRadius: 50,
              ...UTILS.center,
            }}>
            {handleIcon(
              'MaterialIcons',
              'my-location',
              SIZES.h1Half,
              COLORS.primary,
            )}
          </View>
        </View>
        {/* Icon */}
        {/* Address */}
        <View style={{flex: 5}}>
          <Text style={{...FONTS.h1, fontSize: SIZES.h1 - 3}}>{title}</Text>
          <Text
            numberOfLines={2}
            style={{
              ...FONTS.body,
              fontSize: SIZES.h2 - 2,
            }}>
            {address}
          </Text>
        </View>
        {/* Address */}
        {/* Arrow */}
        <View style={{flex: 1, ...UTILS.center}}>
          {handleIcon(
            'MaterialIcons',
            'arrow-forward-ios',
            SIZES.h1,
            COLORS.primary,
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
