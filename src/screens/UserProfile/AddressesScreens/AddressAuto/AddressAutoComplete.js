import React, {useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// Components
import BackIcon from '../../../../components/Back-Icon/BackIcon';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../../constants/constants';
import {useDispatch} from 'react-redux';
import {addAddress} from '../../../../features/Address/AddressSlice';

const AddressAuto = ({navigation}) => {
  // Const
  const ref = useRef();
  const disPatch = useDispatch();
  // States

  // Handle
  const navigateBack = () => {
    navigation.goBack();
  };
  // Effects
  useEffect(() => {
    setTimeout(() => {}, 200);
  }, []);
  // Render
  // Header
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginVertical: SIZES.padding - 10,
          marginBottom: SIZES.padding + 10,
          width: '100%',
          padding: SIZES.padding,
        }}>
        {/* Back icon */}
        <BackIcon onPress={navigateBack}></BackIcon>
        {/* Title */}

        <Text
          onPress={() => {
            ref.current.focus();
          }}
          style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
          Find Address
        </Text>
      </View>
    );
  };
  // Find Address
  const renderFindAddress = () => {
    return (
      <GooglePlacesAutocomplete
        // keyboardShouldPersistTaps="handled"
        // ref={ref}
        debounce={400}
        enablePoweredByContainer={false}
        styles={{
          container: {
            width: '100%',
            flex: 1,
          },
          row: {
            height: 70,
          },
          separator: {
            height: 1,
            backgroundColor: COLORS.lightGray3,
          },
          description: {
            ...FONTS.h2,
            fontSize: SIZES.h2 - 3,
            textAlign: 'center',
            textAlignVertical: 'center',
          },
          textInput: {
            height: 70,
            ...FONTS.h2,
          },
        }}
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log('hear');
          disPatch(addAddress({long: data.description}));
          navigation.goBack();
        }}
        fetchDetails={true}
        query={{
          key: 'AIzaSyB0MUeInTf1Sjf6-_fjAfTSQS8g7sxZe-E',
          language: 'vi',
        }}
      />
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'visible',
      }}>
      {renderHeader()}
      {renderFindAddress()}
    </View>
  );
};

export default AddressAuto;
