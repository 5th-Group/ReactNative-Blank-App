import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';

// CONST
import style from './styles';
import {COLORS, FONTS, IMAGES} from '../../constants/constants';

const Cart = () => {
  return (
    <View style={style.wrap}>
      {/* Header */}
      <View style={style.header}>
        <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
          My Cart
        </Text>
        <Text style={{...FONTS.body2}}>3 items</Text>
      </View>

      {/* Body */}
      <View style={style.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItem
            price={300}
            title="Catcher in the Rye"
            image={IMAGES.post1}></CartItem>
          <CartItem
            price={400}
            title="Catcher in the Rye"
            image={IMAGES.post2}></CartItem>
          <CartItem
            price={500}
            title="Catcher in the Rye"
            image={IMAGES.post3}></CartItem>
          <CartItem
            price={500}
            title="Catcher in the Rye"
            image={IMAGES.post3}></CartItem>
          <CartItem
            price={500}
            title="Catcher in the Rye"
            image={IMAGES.post3}></CartItem>
          <CartItem
            price={500}
            title="Catcher in the Rye"
            image={IMAGES.post3}></CartItem>
        </ScrollView>
      </View>
      {/* Bottom */}
      <View style={style.bottom}>
        <View style={style.total}>
          <Text
            style={{
              ...FONTS.h2,
            }}>
            Total
          </Text>
          <Text style={{...FONTS.h2}}>$2000</Text>
        </View>
        <View style={{flex: 3}}>
          <Button
            title="Checkout"
            color={true}
            size={{w: 'full', h: 70}}></Button>
        </View>
      </View>
    </View>
  );
};

export default Cart;
