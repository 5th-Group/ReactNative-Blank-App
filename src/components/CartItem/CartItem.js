import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../../features/Cart/cartSlice';
import {useDispatch} from 'react-redux';

// CONST
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import styles from './styles';

const CartItem = ({title, image, price, item}) => {
  // CONST
  const disPatch = useDispatch();
  // Handles
  // Increase
  const handleIncrease = () => {
    disPatch(increaseQuantity(item));
  };
  // Decrease
  const handleDecrease = () => {
    disPatch(decreaseQuantity(item));
  };
  // Remove
  const handleRemoveItem = () => {
    disPatch(removeItem(item));
  };
  return (
    <View style={styles.wrap}>
      {/* Left */}
      <View style={styles.left}>
        <View
          style={{
            width: 90,
            alignSelf: 'center',
            borderRadius: SIZES.radius,
            overflow: 'hidden',
          }}>
          <Image resizeMode="cover" style={styles.image} source={image} />
        </View>
      </View>
      {/* Mid */}
      <View style={styles.mid}>
        <Text style={{...FONTS.h2, color: COLORS.primary}}>{title}</Text>
        <Text
          style={{
            ...FONTS.body2,
          }}>
          {`$${price * item.quantity}`}
        </Text>
        <View style={[styles.count]}>
          <TouchableOpacity
            disabled={item.quantity == 1 ? true : false}
            onPress={() => {
              handleDecrease();
            }}>
            <FontAwesome
              name="minus-circle"
              color={item.quantity == 1 ? COLORS.lightGray4 : COLORS.primary}
              size={SIZES.h1 + 3}></FontAwesome>
          </TouchableOpacity>
          <Text style={{...FONTS.h2}}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              handleIncrease();
            }}>
            <FontAwesome
              name="plus-circle"
              color={COLORS.primary}
              size={SIZES.h1 + 3}></FontAwesome>
          </TouchableOpacity>
        </View>
      </View>
      {/* Right */}
      <View style={styles.right}>
        <TouchableOpacity
          onPress={() => {
            handleRemoveItem();
          }}>
          <FontAwesome5
            style={{position: 'relative', left: 30}}
            name="trash"
            size={30}
            color={COLORS.primary}></FontAwesome5>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
