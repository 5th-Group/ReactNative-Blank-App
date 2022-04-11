import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import {constants} from '../../constants/constants';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      {/* Headers */}
      <View style={styles.box1}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.text}>
          Recover your password if you have forgot your password!
        </Text>
      </View>
      {/* Forms */}
      <View style={styles.box2}>
        <Form title="Email" icon="mail"></Form>
      </View>

      {/* Login button */}
      <View style={styles.box3}>
        <Button title="Submit" color={true} size={{w: 'full', h: 70}}></Button>
      </View>
      {/* Image */}
      <View style={styles.box4}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/Images/9.png')}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
