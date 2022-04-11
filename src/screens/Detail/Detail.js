import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Shadow} from 'react-native-shadow-2';

// Components
import Button from '../../components/Button/Button';

// CONST
import style from './styles';
import {COLORS, constants, FONTS, UTILS} from '../../constants/constants';

export const Detail = ({navigation, route}) => {
  // Handle
  const {item} = route.params;
  // Renders
  const renderBookDetailUpper = item => {
    return (
      <>
        {/* Book cover */}
        <View style={{...UTILS.shadow, borderRadius: 20, overflow: 'hidden'}}>
          <Image resizeMode="cover" style={style.image} source={item.image} />
        </View>
        {/* Book name and Author */}
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.primary,
            marginTop: 20,
          }}>
          {item.title}
        </Text>
        <Text style={{...FONTS.body2, marginBottom: 20}}>{item.author}</Text>
      </>
    );
  };
  // BookRating
  const renderBookRating = () => {
    const shortLang = item.lange.substring(0, 3).toUpperCase();
    return (
      <>
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.white}}>
            {item.Rating}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.white}}>Rating</Text>
        </View>
        <View style={{width: 1, paddingVertical: 5}}>
          <View
            style={{
              flex: 1,
              borderLeftColor: 'white',
              borderLeftWidth: 2.5,
            }}></View>
        </View>
        {/*  */}
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.white}}>
            {item.pageCount}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.white}}>Page Count</Text>
        </View>
        <View style={{width: 1, paddingVertical: 5}}>
          <View
            style={{
              flex: 1,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
            }}></View>
        </View>
        {/*  */}
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.white}}>{shortLang}</Text>
          <Text style={{...FONTS.h2, color: COLORS.white}}>Language</Text>
        </View>
        {/*  */}
      </>
    );
  };
  //
  // Bottom
  const renderButtons = () => {
    return (
      <>
        <View style={style.count}>
          <View style={style.quantity}>
            <AntDesign
              name="minuscircleo"
              size={30}
              color={constants.primaryColor}></AntDesign>
            <View>
              <Text style={{...FONTS.body1}}>2</Text>
            </View>
            <AntDesign
              name="pluscircleo"
              size={30}
              color={constants.primaryColor}></AntDesign>
          </View>
          <View style={style.total}>
            <Text style={{...FONTS.body2}}>Total: </Text>
            <Text style={{...FONTS.h2, color: COLORS.primary}}> $300.99</Text>
          </View>
        </View>
        <View style={style.button}>
          <Button title="Add to Cart" color={true} size={{w: 'full', h: 70}} />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={style.wrap}>
      {/* Book's info */}
      <View style={style.cover}>
        {/* Background */}
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        {/* Color overlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(240,240,232,0.9)',
          }}></View>
        {/* Color overlay */}
        <View style={style.Detail}>
          {/* DetailUpper */}
          {renderBookDetailUpper(item)}
          {/* DetailUpper */}
        </View>
        {/* Book rating */}
        <Shadow>
          <View style={style.Rating}>
            {/* BookRating */}
            {renderBookRating()}
            {/* BookRating */}
          </View>
        </Shadow>
      </View>
      <ScrollView>
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
      </ScrollView>

      {/* Bottom */}
      <Shadow
        distance={20}
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
