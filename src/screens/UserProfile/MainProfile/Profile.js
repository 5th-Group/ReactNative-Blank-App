import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// CONST
import {
  FONTS,
  SIZES,
  COLORS,
  IMAGES,
  UTILS,
} from '../../../constants/constants';

// Component
import handleIcon from '../../../components/Icon/Icon';

const Option = ({title, iconName, iconBrand, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : null}
      style={{
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        padding: SIZES.padding,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.lightGray3,
      }}>
      {/* Left */}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {handleIcon(iconBrand, iconName, SIZES.h1Half, COLORS.primary)}
        <Text
          style={{
            ...FONTS.body1,
            fontSize: SIZES.body2,
            marginLeft: SIZES.padding,
            fontFamily: FONTS.bold,
          }}>
          {title}
        </Text>
      </View>

      {/* Right */}
      <View>
        <MaterialIcons
          name="navigate-next"
          size={SIZES.body1}
          color={COLORS.primary}></MaterialIcons>
      </View>
    </TouchableOpacity>
  );
};

// Main
const Profile = ({navigation}) => {
  // Handle
  // Setting
  const settingNavigate = () => {
    navigation.navigate('Settings');
  };
  // OrderHistory
  const orderNavigate = () => {
    navigation.navigate('OrderHistory');
  };
  // EditUser
  const editUserNavigate = () => {
    navigation.navigate('EditUser');
  };

  // Render

  // Header
  const renderHeader = () => {
    return (
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          width: '100%',
          marginBottom: SIZES.padding,
        }}>
        <View>
          <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
            My Profile
          </Text>
        </View>
      </View>
    );
  };

  // UserInfo
  const renderUserInfo = () => {
    return (
      // Container
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 135,
          padding: SIZES.base,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          ...UTILS.shadow,
          marginBottom: SIZES.padding,
        }}>
        {/* Avatar */}

        <View
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            overflow: 'hidden',
            marginRight: SIZES.padding,
            borderRadius: 50,
          }}>
          <Image
            style={{width: 100, height: 100, alignSelf: 'center'}}
            resizeMode="contain"
            source={IMAGES.avt}></Image>
        </View>
        {/* Detail */}

        <View
          style={{
            justifyContent: 'flex-start',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h1}}>bi</Text>
          <Text style={{...FONTS.body2}}>+0944565607</Text>
          <Text style={{...FONTS.body2}}>nbi6731@gmail.com</Text>
        </View>
        {/* Edit Button */}

        <View
          style={{
            paddingRight: SIZES.padding,
          }}>
          <TouchableOpacity onPress={editUserNavigate}>
            <FontAwesome5
              name="edit"
              size={SIZES.h1Half}
              color={COLORS.primary}></FontAwesome5>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // Options
  const renderOptions = () => {
    return (
      <>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.primary,
            alignSelf: 'flex-start',
            marginBottom: SIZES.padding - 10,
          }}>
          Account
        </Text>
        <View
          style={{
            justifyContent: 'flex-start',
            width: '100%',
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            ...UTILS.shadow,
            overflow: 'hidden',
          }}>
          <Option
            onPress={orderNavigate}
            iconBrand="Octicons"
            title="My Orders"
            iconName="checklist"></Option>
          <Option
            onPress={settingNavigate}
            iconBrand="Ionicons"
            title="Settings"
            iconName="settings-outline"></Option>
          <Option
            iconBrand="Entypo"
            title="Saved Addresses"
            iconName="location"></Option>
        </View>
      </>
    );
  };
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: SIZES.padding,
      }}>
      {renderHeader()}
      {renderUserInfo()}
      {renderOptions()}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
