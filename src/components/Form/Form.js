import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// CONST
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import styles from './styles';

const Form = ({value, setValue, title, icon, pair, secure, children}) => {
  return (
    <View style={styles.wrap}>
      <Text style={{...FONTS.h2}}>{title}</Text>
      <View style={styles.input}>{children}</View>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={30}
        onPress={() => {
          console.log(isPair());
        }}
        color={COLORS.primary}></Ionicons>

      {pair ? (
        <TextInput
          secureTextEntry={secure}
          value={value}
          onChangeText={setValue}
          style={styles.input}></TextInput>
      ) : null}
    </View>
  );
};

export default Form;
