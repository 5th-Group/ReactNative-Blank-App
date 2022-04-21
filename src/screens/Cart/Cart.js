import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTotal} from '../../features/Cart/cartSlice';

// Components
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';

// CONST
import style from './styles';
import {COLORS, FONTS} from '../../constants/constants';

const Cart = () => {
  // const
  const cart = useSelector(state => state.cart);
  const items = useSelector(state => state.cart.item);
  const total = useSelector(state => state.cart.total);
  const quantity = useSelector(state => state.cart.quantity);
  const disPatch = useDispatch();
  // Handle
  useEffect(() => {
    disPatch(getTotal());
  }, [cart]);
  return (
    <View style={style.wrap}>
      <View style={style.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}>
          <View style={{...style.header, paddingTop: 20}}>
            <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
              My Cart
            </Text>
            <Text style={{...FONTS.body2}}>{`${quantity} ${
              quantity <= 1 ? 'item' : 'items'
            } `}</Text>
          </View>
          {items.map((item, index) => {
            return (
              <CartItem
                key={index}
                item={item}
                price={item.price}
                title={item.title}
                image={item.image}></CartItem>
            );
          })}
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
          <Text
            style={{...FONTS.h2, color: COLORS.primary}}>{`$${total}`}</Text>
        </View>
        <View>
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
