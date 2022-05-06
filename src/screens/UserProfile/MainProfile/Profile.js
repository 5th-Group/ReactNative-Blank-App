import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../constants/constants';
import {Reset} from '../../../features/User/UserSlice';
import {useDispatch, useSelector} from 'react-redux';

// Component
import handleIcon from '../../../components/Icon/Icon';

const Option = ({title, iconName, iconBrand, onPress, color}) => {
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
        {handleIcon(
          iconBrand,
          iconName,
          SIZES.h1Half,
          color ? color : COLORS.primary,
        )}
        <Text
          style={{
            ...FONTS.body1,
            fontSize: SIZES.body2,
            marginLeft: SIZES.padding,
            fontFamily: FONTS.bold,
            color: color ? color : null,
          }}>
          {title}
        </Text>
      </View>

      {/* Right */}
      <View>
        {handleIcon(
          'MaterialIcons',
          'navigate-next',
          SIZES.body1,
          color ? color : COLORS.primary,
        )}
      </View>
    </TouchableOpacity>
  );
};

// Main
const Profile = ({navigation}) => {
  // Const
  const disPatch = useDispatch();
  const user = useSelector(state => state.user.userInfo);
  const token = useSelector(state => state.user.accessToken);
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
  // SavedPlace
  const savedPlaceNavigate = () => {
    navigation.navigate('SavedPlace');
  };
  // Log out
  const handleLogout = () => {
    disPatch(Reset());
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
          <Text
            onPress={() => {
              navigation.navigate('FindMap');
            }}
            style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
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
            alignItems: 'center',
            borderWidth: 5,
            borderColor: COLORS.lightGray,
          }}>
          {/* <Image
            style={{width: 100, height: 100, alignSelf: 'center'}}
            resizeMode="contain"
            source={IMAGES.avt}></Image> */}
          {handleIcon(
            'FontAwesome',
            'user',
            SIZES.h1Hyper + 20,
            COLORS.lightGray,
          )}
        </View>
        {/* Detail */}

        <View
          style={{
            justifyContent: 'flex-start',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h1}}>{user && user.lastName}</Text>
          <Text style={{...FONTS.body2}}>{`+${user && user.phoneNumber}`}</Text>
          <Text style={{...FONTS.body2}}>{user && user.email}</Text>
        </View>
        {/* Edit Button */}

        <View
          style={{
            paddingRight: SIZES.padding,
          }}>
          <TouchableOpacity onPress={editUserNavigate}>
            {handleIcon('FontAwesome5', 'edit', SIZES.h1Half, COLORS.primary)}
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
            onPress={savedPlaceNavigate}
            iconBrand="Entypo"
            title="My Address"
            iconName="location"></Option>
          <Option
            onPress={handleLogout}
            iconBrand="Ionicons"
            title="Log Out"
            iconName="log-out-outline"
            color={COLORS.red}></Option>
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
