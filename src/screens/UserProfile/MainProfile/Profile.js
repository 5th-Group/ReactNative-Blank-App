import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// CONST
import {FONTS, SIZES, COLORS, IMAGES} from '../../../constants/constants';

// Component
const Option = ({title, iconName, iconBrand, onPress}) => {
  // handleIcon
  const handleIcon = (icon, name) => {
    const components = {
      Octicons,
      MaterialCommunityIcons,
      Ionicons,
      Entypo,
      Feather,
      AntDesign,
      MaterialIcons,
    };
    const SpecificStory = components[icon];
    return (
      <SpecificStory name={name} size={SIZES.h1Half} color={COLORS.primary} />
    );
  };
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
        {handleIcon(iconBrand, iconName)}
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
  const settingNavigate = () => {
    navigation.navigate('Settings');
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
          // backgroundColor: 'blue',
          height: 135,
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
            // backgroundColor: 'red',
          }}>
          <Image
            style={{width: 100, height: 100, alignSelf: 'center'}}
            resizeMode="contain"
            source={IMAGES.avt}></Image>
        </View>
        {/* Detail */}

        <View
          style={{
            // backgroundColor: 'red',
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
          <TouchableOpacity>
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
      <View
        style={{
          justifyContent: 'flex-start',
          width: '100%',
        }}>
        <Text style={{...FONTS.h1, color: COLORS.primary}}>Account</Text>
        <Option
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
