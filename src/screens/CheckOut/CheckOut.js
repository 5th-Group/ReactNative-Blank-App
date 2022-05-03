import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

// Const
import {SIZES, FONTS, COLORS, UTILS} from '../../constants/constants';

// Components
import BackIcon from '../../components/Back-Icon/BackIcon';
import handleIcon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

const Checkout = ({navigation}) => {
  // Render

  //   Header
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginBottom: SIZES.padding,
          paddingTop: SIZES.padding,
        }}>
        <BackIcon
          onPress={() => {
            navigation.goBack();
          }}></BackIcon>
        <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
          Check Out
        </Text>
      </View>
    );
  };

  //   ShipAddress
  const renderShipAddress = () => {
    return (
      <View>
        <Text style={{...FONTS.h2, color: COLORS.primary}}>Deliver to</Text>
        <TouchableOpacity
          style={{
            padding: SIZES.padding - 10,
            marginVertical: SIZES.padding - 15,
            marginBottom: SIZES.padding,
            flexDirection: 'row',
            width: '100%',
            height: 100,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignContent: 'center',
            ...UTILS.shadow,
          }}>
          <View
            style={{
              flex: 1,
              marginRight: 10,
              ...UTILS.center,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLORS.fadeColor,
                borderRadius: 50,
                ...UTILS.center,
              }}>
              {handleIcon(
                'Ionicons',
                'location-outline',
                SIZES.h1Half,
                COLORS.primary,
              )}
            </View>
          </View>
          {/*  */}
          <Text
            numberOfLines={2}
            style={{
              flex: 5,
              ...FONTS.body,
              fontSize: SIZES.h2 - 2,
              alignSelf: 'center',
            }}>
            262/20, Lạc Long Quân, Phường 10, Quận 11, TP. Hồ Chí Minh
          </Text>
          {/*  */}
          <View style={{flex: 1, ...UTILS.center}}>
            {handleIcon(
              'MaterialIcons',
              'arrow-forward-ios',
              SIZES.h1,
              COLORS.primary,
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  //   Orders
  const renderOrder = () => {
    return (
      <View style={{backgroundColor: '#f2f2f2'}}>
        <Text style={{...FONTS.h2, color: COLORS.primary}}>Order Summary</Text>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.padding - 10,
            borderRadius: SIZES.radius,
            marginVertical: 10,
            ...UTILS.shadow,
          }}>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
          <CheckOutItem></CheckOutItem>
        </View>
      </View>
    );
  };

  //   Button
  const renderButton = () => {
    return (
      <View
        style={{
          height: '20%',
          width: SIZES.width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 5.5,
            width: '100%',
            ...UTILS.center,
          }}>
          <View
            style={{
              paddingVertical: 10,
              width: SIZES.width - 40,
              borderBottomWidth: 2,
              borderColor: COLORS.lightGray3,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...FONTS.body2}}>Item Total</Text>
              <Text style={{...FONTS.h2}}>$450</Text>
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...FONTS.body2}}>Taxes</Text>
              <Text style={{...FONTS.h2}}>$50</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 10,
            width: '100%',
            ...UTILS.center,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: SIZES.width - 40,
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{...FONTS.h2}}>Total</Text>
            <Text style={{...FONTS.h2}}>$500</Text>
          </View>
          <Button
            title="Submit"
            color={true}
            size={{h: 70, w: 'full'}}></Button>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <ScrollView
        contentContainerStyle={{
          width: SIZES.width,
          paddingHorizontal: SIZES.padding,
        }}>
        {renderHeader()}
        {renderShipAddress()}
        {renderOrder()}
      </ScrollView>
      {renderButton()}
    </View>
  );
};

export default Checkout;

const CheckOutItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: COLORS.lightGray3,
        paddingVertical: 10,
        ...UTILS.center,
      }}>
      <View
        style={{
          ...UTILS.center,
          flex: 1,
          height: 100,
        }}>
        <View
          style={{
            width: 80,
            height: 90,
            ...UTILS.center,
            backgroundColor: 'red',
            overflow: 'hidden',
            borderWidth: 2,
            borderColor: COLORS.primary,
            borderRadius: SIZES.radius - 5,
            ...UTILS.shadow2,
          }}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/Images/Poster/1.png')}></Image>
        </View>
      </View>
      <View
        style={{
          flex: 1,

          height: '100%',
          paddingVertical: SIZES.padding - 10,
        }}>
        <Text numberOfLines={1} style={{...FONTS.h2}}>
          Catcher in the Rye
        </Text>
        <Text numberOfLines={1} style={{...FONTS.body2}}>
          J.D Sterling
        </Text>
        <Text numberOfLines={1} style={{...FONTS.h2, fontSize: SIZES.h2 - 2}}>
          $30
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          ...UTILS.center,
        }}>
        <Text style={{...FONTS.h2, color: COLORS.primary}}>x2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
