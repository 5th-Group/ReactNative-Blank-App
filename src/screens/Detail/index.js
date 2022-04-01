import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import style from './styles';
import {constants, LineDivider} from '../../constants/index';
import Button from '../../components/Button';

export const Detail = ({navigation}) => {
  // handle
  const handleVisileModal = () => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={style.wrap}>
      {/* Book's info */}
      <View style={style.cover}>
        {/* Background */}
        <ImageBackground
          source={require('../../assets/Images/Poster/1.png')}
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
        <View style={style.Detail}>
          {/* Book cover */}
          <Image
            resizeMode="contain"
            style={style.image}
            source={require('../../assets/Images/Poster/1.png')}
          />
          {/* Book name and Author */}
          <Text
            style={{
              fontSize: constants.h1,
              fontFamily: constants.FontExtraBold,
              color: constants.primaryColor,
            }}>
            {' '}
            Catcher in the Rye
          </Text>
          <Text style={style.text}>J.D Stalinger</Text>
        </View>
        {/* Book rating */}
        <View style={style.Rating}>
          <View style={style.ratingItem}>
            <Text style={style.itemText}>4.5</Text>
            <Text style={style.itemTitle}>Rating</Text>
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
            <Text style={style.itemText}>360</Text>
            <Text style={style.itemTitle}>Page Count</Text>
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
            <Text style={style.itemText}>Eng</Text>
            <Text style={style.itemTitle}>Language</Text>
          </View>

          {/*  */}
        </View>
      </View>
      <ScrollView>
        <View style={style.Description}>
          {/* Box 3 */}
          <View style={style.author}>
            <Text style={style.title}>About the author</Text>
            <Text style={style.text}>
              An homage to what it means to be Korean American with delectable
              recipes that explore how new culinary traditions can be forged to
              honor both your past and your present. "This is such an important
              book. I savored every word and want to cook every
              recipe!"--Nigella Lawson, author of Cook, Eat, Repeat
            </Text>
          </View>
          {/* Box 4 */}
          <View style={style.overview}>
            <Text style={style.title}>Overview</Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?
            </Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              autem, ipsum voluptates dignissimos soluta vero itaque eveniet
              repudiandae ducimus nihil ut magni iusto odio cumque sed
              temporibus, in ad officia?1
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Buttons */}
      <View style={style.bottomButton}>
        <View style={style.count}>
          <View style={style.quantity}>
            <AntDesign
              name="minuscircleo"
              size={30}
              color={constants.primaryColor}></AntDesign>
            <View>
              <Text style={{fontSize: 30}}>2</Text>
            </View>
            <AntDesign
              name="pluscircleo"
              size={30}
              color={constants.primaryColor}></AntDesign>
          </View>
          <View style={style.total}>
            <Text style={{fontSize: 20}}>Total:</Text>
            <Text style={{fontSize: 20, fontFamily: constants.FontBold}}>
              $300.99
            </Text>
          </View>
        </View>
        <View style={style.button}>
          <Button
            onPress={handleVisileModal}
            title="Add To Cart"
            color={true}
            size={{w: 'full', h: 70}}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
