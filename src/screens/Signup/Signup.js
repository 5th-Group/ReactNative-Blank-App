import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Components
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import BackIcon from '../../components/Back-Icon/BackIcon';

// Const
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import styles from './styles';

const Signup = ({navigation}) => {
  // States
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  // Handle
  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrap}>
      {/* Header */}
      <View style={styles.box1}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>
          <BackIcon onPress={handleGoback}></BackIcon>
          <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
            Sign Up
          </Text>
        </View>
        <Text style={{...FONTS.body2}}>
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
        <Text style={{...FONTS.body2}}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{...FONTS.body2, color: COLORS.primary}}>Login</Text>
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
