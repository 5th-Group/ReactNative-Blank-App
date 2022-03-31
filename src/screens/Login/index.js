import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import Form from '../../components/Form';
import Button from '../../components/Button';
import {constants} from '../../constants';

const Login = ({navigation}) => {
  // Handle
  const homeNavigate = () => {
    navigation.navigate('HomeNavigate');
  };

  return (
    <View style={styles.wrap}>
      {/* Header */}
      <View style={styles.box1}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>
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
          <Text
            style={[
              styles.text,
              {
                color: constants.primaryColor,
              },
            ]}>
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
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text
            style={[
              styles.text,
              {
                color: constants.primaryColor,
              },
            ]}>
            Register
          </Text>
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
