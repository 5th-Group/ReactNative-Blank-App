import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

// Components
import handleIcon from '../../../components/Icon/Icon';
import BackIcon from '../../../components/Back-Icon/BackIcon';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../constants/constants';

const OrderHistory = ({navigation}) => {
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
          marginVertical: 10,
          marginBottom: 30,
        }}>
        {/* Back icon */}
        <BackIcon onPress={navigateBack}></BackIcon>
        {/* Title */}
        <Text
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
          }}>
          My Orders
        </Text>
      </View>
    );
  };

  // Orders
  const renderOrders = () => {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
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
        {renderOrders()}
      </ScrollView>
    </View>
  );
};

const OrderItem = () => {
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: COLORS.lightGray3,
        marginBottom: SIZES.padding,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        ...UTILS.shadow,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 2,
          paddingBottom: 20,
          borderColor: COLORS.lightGray3,
        }}>
        <View>
          <View style={{marginBottom: 10}}>
            <Text style={{...FONTS.h2}}>#12381283712836</Text>
          </View>
          <View>
            <Text style={{...FONTS.h2}}>4 items</Text>
            <Text style={{...FONTS.body2}}>Test item x2</Text>
            <Text style={{...FONTS.body2}}>Test item x4</Text>
            <Text style={{...FONTS.body2}}>Test item x5</Text>
          </View>
        </View>
        <Text style={{...FONTS.h1, color: COLORS.primary}}>$20</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.success,
            fontFamily: FONTS.bold,
          }}>
          Delivered
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            {handleIcon('Ionicons', 'reload', SIZES.h1Half, COLORS.primary)}
          </View>
          <Text style={{...FONTS.h2, marginLeft: 10, color: COLORS.primary}}>
            Re-Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderHistory;
