import React from 'react';
import {View, Text, Image} from 'react-native';

import style from './styles';
import {constants} from '../../constants';
import Button from '../../components/Button';

const {FontExtraBold, FontLight, primaryColor} = constants;

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
        <Text style={style.title}>Buy your favourite books</Text>
        <Text style={style.text}>
          All your favourites book in one place, buy any book, staying at home,
          on travelling, or anywhere else
        </Text>
      </View>
      {/* Buttons */}
      <View style={style.boxThree}>
        <Button
          margin={10}
          title="Sign up"
          color={true}
          navigate={NavigateSignup}
          size={{w: 230, h: 70}}
        />
        <Button
          margin={10}
          title="Log in"
          color={false}
          navigate={NavigateLogin}
          size={{w: 230, h: 70}}
        />
      </View>
    </View>
  );
};

export default StartPage;
