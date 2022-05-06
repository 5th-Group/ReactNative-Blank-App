import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

// Components
import handleIcon from '../../../components/Icon/Icon';
import BackIcon from '../../../components/Back-Icon/BackIcon';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../constants/constants';
import {getOrder} from '../../../api/apiFixPost';
import {useSelector} from 'react-redux';

const OrderHistory = ({navigation}) => {
  // States
  const [orderHistory, setOrderHistory] = useState([]);

  // Redux
  const token = useSelector(state => state.user.accessToken);

  // Effect
  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        const response = await getOrder(token);
        console.log(response);
        setOrderHistory(response);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderHistory();
  }, []);
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
          My Orders
        </Text>
      </View>
    );
  };

  // Orders
  const renderOrders = () => {
    return (
      <View style={{flex: 1, width: '100%'}}>
        {orderHistory.map((order, index) => {
          return (
            <OrderItem
              key={index}
              total={order.totalPrice}
              orderId={order._id}
              product={order.products}
              status={order.status}></OrderItem>
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

const OrderItem = ({orderId, total, status, product}) => {
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
            <Text style={{...FONTS.h2}}>{orderId}</Text>
          </View>
          <View>
            <Text style={{...FONTS.h2}}>{`${product.length} items`}</Text>
            {product.map(({productDetail, quantity}) => {
              return (
                <Text
                  style={{
                    ...FONTS.body2,
                  }}>{`${productDetail.detail.title} x${quantity}`}</Text>
              );
            })}
          </View>
        </View>
        <Text style={{...FONTS.h1, color: COLORS.primary}}>{`${total}đ`}</Text>
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
            color: COLORS.secondary,
            fontFamily: FONTS.bold,
          }}>
          {status}
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
