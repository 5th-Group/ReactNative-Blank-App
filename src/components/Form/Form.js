import React from 'react';
import {View, Text, TextInput} from 'react-native';

// CONST
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import handleIcon from '../Icon/Icon';
import styles from './styles';

const Form = ({
  value,
  setValue,
  title,
  iconBrand,
  iconName,
  secure,
  name,
  isError,
  formErrors,
  placeholder,
  onPressIn,
}) => {
  // Handle

  return (
    <View style={{...styles.wrap, paddingVertical: 10}}>
      <Text style={{...FONTS.h2}}>{title}</Text>
      <View style={{...styles.icon}}>
        {iconBrand &&
          handleIcon(iconBrand, iconName, SIZES.padding2, COLORS.primary)}
      </View>
      <TextInput
        onPressIn={() => {
          onPressIn ? onPressIn() : null;
        }}
        placeholder={placeholder}
        secureTextEntry={secure}
        value={value}
        onChangeText={e => {
          setValue(e, name);
        }}
        style={styles.input}></TextInput>

      {isError && formErrors[name] && (
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.red,
            marginTop: 5,
            marginBottom: 5,
          }}>
          {formErrors[name]}
        </Text>
      )}
    </View>
  );
};

export default Form;
