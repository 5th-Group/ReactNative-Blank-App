import React from 'react';
import {View, Text, Image} from 'react-native';

// Components
import style from './styles';
import Button from '../../components/Button/Button';
import {COLORS, FONTS, SIZES} from '../../constants/constants';

const StartPage = ({navigation}) => {
  // Handle
  const NavigateSignup = () => {
    navigation.navigate('Signup');
  };
  const NavigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={style.wrap}>
      {/* Image */}
      <View style={style.boxOne}>
        <Image
          resizeMode="contain"
          style={style.avt}
          source={require('../../assets/Images/1rep.png')}
        />
      </View>
      {/* Title */}
      <View style={style.boxTwo}>
        <Text
          style={{
            ...FONTS.largeTitleBold,
            textAlign: 'center',
            color: COLORS.primary,
          }}>
          Buy your favourite books
        </Text>
        <Text
          style={{
            ...FONTS.body2,
            textAlign: 'center',
          }}>
          All your favourites book in one place, buy any book, staying at home,
          on travelling, or anywhere else
        </Text>
      </View>
      {/* Buttons */}
      <View style={style.boxThree}>
        <Button
          margin={10}
          title="Sign up"
          color={false}
          navigate={NavigateSignup}
          size={{w: 230, h: 70}}
        />
        <Button
          margin={10}
          title="Log in"
          color={true}
          navigate={NavigateLogin}
          size={{w: 230, h: 70}}
        />
      </View>
    </View>
  );
};

export default StartPage;
