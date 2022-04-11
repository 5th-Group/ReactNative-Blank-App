import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, Image} from 'react-native';

// CONST
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import styles from './styles';

const CartItem = ({title, image, price}) => {
  return (
    <View style={styles.wrap}>
      {/* Left */}
      <View style={styles.left}>
        <Image resizeMode="contain" style={styles.image} source={image} />
      </View>
      {/* Mid */}
      <View style={styles.mid}>
        <Text style={{...FONTS.h2, color: COLORS.primary}}>{title}</Text>
        <Text
          style={{
            ...FONTS.body2,
          }}>
          {`$${price}`}
        </Text>
        <View style={styles.count}>
          <AntDesign
            name="minuscircle"
            size={SIZES.h1}
            color={COLORS.primary}></AntDesign>
          <Text style={{...FONTS.h2}}>2</Text>
          <AntDesign
            name="pluscircle"
            size={SIZES.h1}
            color={COLORS.primary}></AntDesign>
        </View>
      </View>
      {/* Right */}
      <View style={styles.right}>
        <FontAwesome5
          style={{position: 'relative', left: 30}}
          name="trash"
          size={30}
          color={COLORS.primary}></FontAwesome5>
      </View>
    </View>
  );
};

export default CartItem;
