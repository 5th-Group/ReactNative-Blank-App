import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Components
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';

// CONST
import styles from './styles';
import {SIZES, COLORS, FONTS} from '../../constants/constants';

const Login = ({navigation}) => {
  // Handle
  const homeNavigate = () => {
    navigation.navigate('HomeNavigate');
  };

  return (
    <View style={styles.wrap}>
      {/* Header */}
      <View style={styles.box1}>
        <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
          Login
        </Text>
        <Text style={{...FONTS.body2}}>
          Login now to track all your favourite books, explore the book world!
        </Text>
      </View>
      {/* Forms */}
      <View style={styles.box2}>
        <Form title="Email" icon="mail"></Form>

        <Form title="Your Password" icon="ios-lock-closed" secure={true}></Form>
        {/* Forgot button */}
        <TouchableOpacity
          style={{position: 'relative', top: -10}}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={{...FONTS.body2, color: COLORS.primary}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login button */}
      <View style={styles.box3}>
        <Button
          navigate={homeNavigate}
          title="Login"
          color={true}
          size={{w: 'full', h: 70}}></Button>
      </View>
      {/* Register */}
      <View style={styles.box4}>
        <Text style={{...FONTS.body2}}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{...FONTS.body2, color: COLORS.primary}}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* Image */}
      <View style={styles.box5}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/Images/6.png')}
        />
      </View>
    </View>
  );
};

export default Login;
