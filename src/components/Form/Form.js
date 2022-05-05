import React from 'react';
import {View, Text, TextInput} from 'react-native';

// CONST
import {FONTS, COLORS, SIZES} from '../../constants/constants';
import handleIcon from '../Icon/Icon';
import styles from './styles';

const Form = ({
  auto,
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
  width,
  height,
  multiline,
}) => {
  // Handle

  return (
    <View style={{...styles.wrap, paddingVertical: SIZES.padding - 10}}>
      <Text style={{...FONTS.h2}}>{title}</Text>
      <View style={{...styles.icon}}>
        {iconBrand &&
          handleIcon(iconBrand, iconName, SIZES.padding2, COLORS.primary)}
      </View>
      <TextInput
        autoFocus={auto}
        multiline={multiline}
        onPressIn={() => {
          onPressIn ? onPressIn() : null;
        }}
        placeholder={placeholder}
        secureTextEntry={secure}
        value={value}
        maxLength={35}
        onChangeText={e => {
          name ? setValue(e, name) : setValue(e);
        }}
        style={{
          width: width ? width : SIZES.width - 40,
          ...styles.input,
          height: height ? height : 70,
          paddingLeft: iconBrand ? 60 : 20,
        }}></TextInput>

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
