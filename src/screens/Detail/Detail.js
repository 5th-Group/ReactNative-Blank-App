import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// Components
import Button from '../../components/Button/Button';
import BackIcon from '../../components/Back-Icon/BackIcon';
import {Divider} from '../../constants/constants';
import handleIcon from '../../components/Icon/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';

// CONST
import style from './styles';
import {COLORS, FONTS, SIZES, UTILS} from '../../constants/constants';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../features/Cart/cartSlice';

export const Detail = ({navigation, route}) => {
  // Const
  const [quantity, setQuantity] = useState(1);
  const {item} = route.params;
  const {detail} = item;
  const disPatch = useDispatch();

  // Handle

  // Quantity
  const handleQuantity = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Add Item
  const handleAddItem = () => {
    disPatch(addProduct({...item, quantity}));
  };

  // Navigate
  const navigateBack = () => {
    navigation.goBack();
  };

  // Renders
  // Book detail
  const renderBookDetailUpper = () => {
    return (
      <>
        {/* Book cover */}
        <View
          style={{
            ...UTILS.shadow,
            borderRadius: SIZES.radius,
            overflow: 'hidden',
          }}>
          <Image
            resizeMode="cover"
            style={style.image}
            source={detail.icon ? {uri: detail.icon} : ''}
          />
        </View>

        {/* Book name and Author */}
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.h1,
            color: COLORS.white,
            marginTop: SIZES.padding,
            fontSize: SIZES.h1p,
            textAlign: 'center',
            textShadowColor: COLORS.lightGray4,
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 2,
          }}>
          {detail.title}
        </Text>
        <Text
          style={{
            ...FONTS.body2,
            marginBottom: SIZES.padding - 10,
            fontFamily: FONTS.bold,
            color: COLORS.primary,
          }}>
          {detail.author.length > 1 ? item.author[0].firstName : ''}
        </Text>
      </>
    );
  };

  // Book Rating
  const renderBookRating = () => {
    const shortLangApi = detail.language.code.toUpperCase();
    return (
      <>
        <View style={style.ratingItem}>
          {/* Rating */}
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>4</Text>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>Rating</Text>
        </View>
        <Divider></Divider>

        {/* Page count */}
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
            {detail.pageCount}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>Page Count</Text>
        </View>
        <Divider></Divider>

        {/* Lang */}
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
            {shortLangApi}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>Language</Text>
        </View>
      </>
    );
  };
  //
  // Bottom
  const renderButtons = () => {
    return (
      <>
        <View style={style.count}>
          {/* Quantity */}
          <View style={style.quantity}>
            <TouchableOpacity
              disabled={quantity == 1 ? true : false}
              onPress={() => {
                handleQuantity('dec');
              }}>
              {handleIcon(
                'FontAwesome',
                'minus-circle',
                SIZES.h1Half,
                quantity != 1 ? COLORS.primary : COLORS.lightGray4,
              )}
            </TouchableOpacity>
            <View>
              <Text style={{...FONTS.h2}}>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleQuantity('inc');
              }}>
              {handleIcon(
                'FontAwesome',
                'minus-circle',
                SIZES.h1Half,
                COLORS.primary,
              )}
            </TouchableOpacity>
          </View>
          {/* Quantity */}
          {/* Total */}
          <View style={style.total}>
            <Text style={{...FONTS.body2}}>Total: </Text>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}>{`$${item.price * quantity}`}</Text>
          </View>
          {/* Total */}
        </View>
        {/* Add to cart Button */}
        <View style={style.button}>
          <Button
            onPress={handleAddItem}
            title="Add to Cart"
            color={true}
            size={{w: 'full', h: 70}}
          />
        </View>
        {/* Add to cart Button */}
      </>
    );
  };

  return (
    <SafeAreaView style={style.wrap}>
      {/* Book's info */}
      <ScrollView>
        {/* Book Upper */}
        <View style={style.cover}>
          {/* Linear */}
          <LinearGradient
            style={{
              position: 'absolute',
              ...UTILS.absolute,
              zIndex: 2,
            }}
            colors={['transparent', COLORS.backgroun]}></LinearGradient>
          {/* Background */}
          <ImageBackground
            blurRadius={2}
            source={detail.icon ? {uri: detail.icon} : ''}
            resizeMode="cover"
            style={{
              position: 'absolute',
              ...UTILS.absolute,
              zIndex: 1,
            }}
          />
          {/* Color overlay */}
          <View
            style={{
              position: 'absolute',
              ...UTILS.absolute,
              backgroundColor: COLORS.overlay(0.5),
              zIndex: 1,
            }}></View>
          {/* Color overlay */}
          {/* Back button */}
          <View
            style={{
              alignSelf: 'flex-start',
              margin: SIZES.padding,
              zIndex: 20,
            }}>
            <BackIcon onPress={navigateBack}></BackIcon>
          </View>
          {/* Back button */}
          <View style={style.Detail}>
            {/* DetailUpper */}
            {renderBookDetailUpper()}
            {/* DetailUpper */}
          </View>
          {/* Book rating */}
          <View style={{zIndex: 10}}>
            <Shadow>
              <View style={style.Rating}>
                {/* BookRating */}
                {renderBookRating()}
                {/* BookRating */}
              </View>
            </Shadow>
          </View>
        </View>
        {/* Book Upper */}
        <View style={style.Description}>
          {/* Box 3 */}
          <View style={style.author}>
            <Text style={{...FONTS.h1, color: COLORS.primary}}>
              About the author
            </Text>
            <Text style={{...FONTS.body2}}>
              An homage to what it means to be Korean American with delectable
              recipes that explore how new culinary traditions can be forged to
              honor both your past and your present. "This is such an important
              book. I savored every word and want to cook every
              recipe!"--Nigella Lawson, author of Cook, Eat, Repeat
            </Text>
          </View>
          {/* Box 4 */}
          <View style={style.overview}>
            <Text style={{...FONTS.h1, color: COLORS.primary}}>Overview</Text>
            <Text style={{...FONTS.body2}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={{...FONTS.body2}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={{...FONTS.body2}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
          </View>
        </View>
        {/* Somthing else */}
        <View style={{flex: 1, ...UTILS.center, height: 300}}>
          <Text style={{...FONTS.largeTitleBold}}>PlaceHolder</Text>
        </View>
      </ScrollView>

      {/* Bottom */}
      <Shadow
        distance={SIZES.padding}
        offset={[0, 0]}
        viewStyle={{alignSelf: 'stretch'}}
        safeRender={true}>
        {/* Buttons */}
        <View style={style.bottomButton}>
          {/* RenderButton */}
          {renderButtons()}
          {/* RenderButton */}
        </View>
      </Shadow>
    </SafeAreaView>
  );
};

export default Detail;
