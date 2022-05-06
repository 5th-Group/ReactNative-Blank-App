import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import handleIcon from '../../../../components/Icon/Icon';
import BackIcon from '../../../../components/Back-Icon/BackIcon';
import Form from '../../../../components/Form/Form';
import Button from '../../../../components/Button/Button';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';

// Action
import {resetStatus} from '../../../../features/User/UserSlice';
import {addAddress} from '../../../../features/Address/AddressSlice';
import {putAddress} from '../../../../api/apiFixPost';

const EditPlace = ({navigation, route}) => {
  // States
  const [type, setType] = useState();

  // Redux
  const addressRedux = useSelector(state => state.address.address.long);
  const name = useSelector(state => state.address.address.name);
  const userStatus = useSelector(state => state.user.status);
  const token = useSelector(state => state.user.accesToken);

  // Const
  const {address} = route.params;
  const disPatch = useDispatch();

  // Effect
  useEffect(() => {
    disPatch(addAddress({long: address.location, name: address.type}));
  }, []);

  useEffect(() => {
    if (userStatus === 'success') {
      disPatch(resetStatus());
      navigation.goBack();
    }
  }, [userStatus]);

  // Handle
  const navigateBack = () => {
    navigation.goBack();
  };

  // Handle Add Type
  const handleAddType = () => {
    disPatch(addAddress({name: address.type}));
  };

  // Update Address
  const handleUpdateAddress = () => {
    const location = {address: {type: name, location: addressRedux}};
    putAddress(location, token, disPatch);
  };

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
        }}>
        {/* Back icon */}
        <BackIcon onPress={navigateBack}></BackIcon>
        {/* Title */}
        <Text
          onPress={() => {}}
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
          }}>
          Edit Address
        </Text>
      </View>
    );
  };

  //   EditForm
  const renderEditForm = () => {
    return (
      <View>
        <Form
          onEndEditing={handleAddType}
          value={type}
          setValue={setType}
          iconBrand="MaterialCommunityIcons"
          iconName="office-building-marker"
          title="Name"
          placeholder={name}></Form>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingVertical: SIZES.padding - 10,
          }}>
          <Text style={{...FONTS.h2}}>Address</Text>
          <View style={{position: 'absolute', top: 65, left: 15}}>
            {handleIcon('Entypo', 'address', SIZES.padding2, COLORS.primary)}
          </View>
          <View
            style={{
              marginTop: 5,
              width: SIZES.width - 40,
              height: 70,
              borderWidth: 2,
              borderRadius: 10,
              paddingLeft: 60,
              borderColor: COLORS.primary,
              justifyContent: 'center',
            }}>
            <Text
              onPress={() => {
                navigation.navigate('AddressAuto');
              }}
              numberOfLines={1}
              style={{
                ...FONTS.h2,
                color: addressRedux.length > 1 ? COLORS.black : '#969696',
              }}>
              {addressRedux === '' ? 'Address' : addressRedux}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  // Bottom buttos
  const renderBottomButton = () => {
    return (
      <View
        style={{
          marginTop: 20,
          width: SIZES.width - 40,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => {
            navigation.navigate('FindMap');
          }}
          color={true}
          title="Search on map"
          size={{h: 70, w: 'full'}}></Button>
      </View>
    );
  };

  //   Absolute Button
  const renderAbsoluteButton = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          ...UTILS.center,
          width: SIZES.width,
          paddingVertical: 30,
          flexDirection: 'row',
        }}>
        <Button
          danger={true}
          title="Remove"
          size={{h: 70, w: 240}}
          margin={10}></Button>
        <Button
          onPress={handleUpdateAddress}
          color={true}
          title="Save Address"
          size={{h: 70, w: 240}}
          margin={10}></Button>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: SIZES.padding,
        }}
        showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderEditForm()}
        {renderBottomButton()}
      </ScrollView>
      {renderAbsoluteButton()}
    </View>
  );
};

export default EditPlace;
