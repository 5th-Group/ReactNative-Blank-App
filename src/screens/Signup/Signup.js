import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard,
} from 'react-native';

// Components
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import BackIcon from '../../components/Back-Icon/BackIcon';
import {LoadingDanceDot} from '../../components/Poster/Poster';

// Const
import styles from './styles';
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import {RegisterForms, RegisterValidate} from '../../constants/formValidation';

// Actions
import {register} from '../../api/apiFixPost';

const Signup = ({navigation}) => {
  // States
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    address: '',
    country: 'France',
    phoneNumber: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState('idle');

  // Effect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Register
      setStatus('loading');
      const {confirmPassword, ...rest} = registerInfo;
      register(registerInfo);
      Keyboard.dismiss();
      setTimeout(() => {
        setStatus('success');
      }, 2000);
      setRegisterInfo({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        address: '',
        country: '',
        phoneNumber: '',
      });
    }
  }, [formErrors]);

  useEffect(() => {
    if (status === 'success') {
      navigation.goBack();
      setStatus('idle');
    }
  }, [status]);
  // Handle
  const handleGoback = () => {
    navigation.goBack();
  };

  // Login
  const handleRegister = () => {
    setIsSubmit(true);
    setFormErrors(RegisterValidate(registerInfo));
    if (Object.keys(formErrors).length === 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // Form handle
  const handleForm = (e, name) => {
    setRegisterInfo({
      ...registerInfo,
      [name]: e,
    });
  };
  return (
    <View style={styles.wrap}>
      {status === 'loading' && LoadingDanceDot()}
      {/* Header */}
      <View style={styles.box1}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>
          <BackIcon onPress={handleGoback}></BackIcon>
          <Text
            onPress={() => {
              console.log(registerInfo);
            }}
            style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
            Sign Up
          </Text>
        </View>
        <Text style={{...FONTS.body2}}>
          Create an account to access all the features!
        </Text>
      </View>
      {/* Forms */}
      <View style={styles.box2}>
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          {RegisterForms.map(form => {
            return (
              <Form
                key={form.id}
                auto={form.name === 'username'}
                isError={isError}
                secure={form.secure}
                formErrors={formErrors}
                iconBrand={form.icon.brand}
                iconName={form.icon.name}
                title={form.title}
                name={form.name}
                value={
                  form.name === 'country' ? 'France' : registerInfo[form.name]
                }
                setValue={handleForm}></Form>
            );
          })}
          <View style={{marginVertical: 10}}>
            <Button
              onPress={handleRegister}
              title="Register"
              color={true}
              size={{w: 'full', h: 70}}></Button>
          </View>
        </ScrollView>
      </View>
      {/* Button */}
      <View style={styles.box3}></View>
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
