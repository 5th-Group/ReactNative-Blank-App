import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTotal} from '../../features/Cart/cartSlice';

// Components
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';

// CONST
import style from './styles';
import {COLORS, FONTS, SIZES} from '../../constants/constants';

const Cart = ({navigation}) => {
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
          contentContainerStyle={{
            paddingBottom: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          <View style={{...style.header, paddingTop: SIZES.padding}}>
            {/* Title */}
            <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
              My Cart
            </Text>
            {/* Title */}
            {/* Quantity */}
            <Text style={{...FONTS.body2}}>{`${quantity} ${
              quantity <= 1 ? 'item' : 'items'
            } `}</Text>
            {/* Quantity */}
            {/* Items  */}
          </View>
          {items && items.length >= 1 ? (
            items.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  price={item.price}
                  title={item.title}
                  image={item.image}></CartItem>
              );
            })
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 600, height: 600, marginTop: 100}}
                resizeMode="contain"
                source={require('../../assets/Images/States/NoItemsinCart.png')}></Image>
              <Text style={{...FONTS.largeTitle, fontFamily: FONTS.bold}}>
                No item in cart!
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      {/* Bottom */}
      {items && items.length >= 1 && (
        <View style={style.bottom}>
          <View style={style.total}>
            <Text
              style={{
                ...FONTS.h2,
              }}>
              Total
            </Text>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}>{`$${total}`}</Text>
          </View>
          <View>
            <Button
              onPress={() => {
                navigation.navigate('Checkout', {items: items});
              }}
              title="Checkout"
              color={true}
              size={{w: 'full', h: 70}}></Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;
