import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

// Components
import handleIcon from '../../../components/Icon/Icon';
import BackIcon from '../../../components/Back-Icon/BackIcon';
import Form from '../../../components/Form/Form';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../constants/constants';

const EditPlace = ({navigation}) => {
  // Handle
  const navigateBack = () => {
    navigation.goBack();
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
          Edit Address
        </Text>
      </View>
    );
  };
  //   EditForm
  const renderEditForm = () => {
    return (
      <View>
        <Form
          iconBrand="MaterialCommunityIcons"
          iconName="office-building-marker"
          title="Name"
          placeholder="Work"></Form>
        <Form
          onPressIn={() => {
            navigation.navigate('Address');
          }}
          iconBrand="Entypo"
          iconName="address"
          title="Address"
          placeholder="e.g. Floor, unit number"></Form>
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
        {renderEditForm()}
      </ScrollView>
    </View>
  );
};

export default EditPlace;
