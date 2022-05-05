import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';

// Components
import handleIcon from '../../../../components/Icon/Icon';
import BackIcon from '../../../../components/Back-Icon/BackIcon';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../../constants/constants';

const SavedPlace = ({navigation}) => {
  // States
  const [isRefresh, setIsRefresh] = useState(false);

  // Const
  const address = useSelector(state => state.user.userInfo.address);
  // Handle
  // Refresh
  const handleRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => {
      setIsRefresh(false);
    }, 2000);
  };
  const navigateBack = () => {
    navigation.goBack();
  };
  // Navigate
  const navigateEditPlace = address => {
    navigation.navigate('EditPlace', {address: address});
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
        {address.map((address, index) => {
          return (
            <Place
              key={index}
              onPress={navigateEditPlace}
              address={address}></Place>
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={() => {
              handleRefresh();
            }}
          />
        }
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

const Place = ({title = 'Untitled', address, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress ? onPress(address) : null;
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
