import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import Form from '../../components/Form';

import Button from '../../components/Button';
import {constants} from '../../constants';

const Signup = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      {/* Header */}
      <View style={styles.box1}>
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.text}>
          Create an account to access all the features!
        </Text>
      </View>
      {/* Forms */}
      <View style={styles.box2}>
        <Form title="Email" icon="mail"></Form>
        <Form title="Your Name" icon="person"></Form>
        <Form
          title="Your Password"
          icon="ios-lock-closed"
          pair={true}
          secure={true}></Form>
      </View>
      {/* Button */}
      <View style={styles.box3}>
        <Button
          title="Register"
          color={true}
          size={{w: 'full', h: 70}}></Button>
      </View>
      {/* Text */}
      <View style={styles.box4}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={[
              styles.text,
              {
                color: constants.primaryColor,
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {/* Image */}
      <View style={styles.box5}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/Images/8.png')}
        />
      </View>
    </View>
  );
};

export default Signup;
