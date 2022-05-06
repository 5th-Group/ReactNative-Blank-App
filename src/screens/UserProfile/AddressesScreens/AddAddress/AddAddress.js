import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

//Components
import BackIcon from '../../../../components/Back-Icon/BackIcon';
import Form from '../../../../components/Form/Form';
import handleIcon from '../../../../components/Icon/Icon';
import Button from '../../../../components/Button/Button';
import {LoadingDanceDot} from '../../../../components/Poster/Poster';

// Const
import {SIZES, FONTS, COLORS, UTILS} from '../../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {addAddress} from '../../../../features/Address/AddressSlice';
import {postAddress} from '../../../../api/apiFixPost';

// Actions
import {resetStatus} from '../../../../features/User/UserSlice';

const AddAddress = ({navigation}) => {
  // States
  const [address, setAddress] = useState({
    type: '',
    location: '',
  });

  // Redux
  const addressRedux = useSelector(state => state.address.address.long);
  const name = useSelector(state => state.address.address.name);
  const token = useSelector(state => state.user.accessToken);
  const userStatus = useSelector(state => state.user.status);

  // Const
  const disPatch = useDispatch();

  // Effect
  useEffect(() => {
    if (addressRedux !== '') {
      disPatch(addAddress({long: '', name: ''}));
    }
  }, []);

  useEffect(() => {
    if (userStatus === 'success') {
      navigation.goBack();
      disPatch(resetStatus());
    }
  }, [userStatus]);

  //   Handle
  // Update Address
  const handleAddAddress = () => {
    const location = {address: [{type: name, location: addressRedux}]};
    postAddress(location, token, disPatch);
  };
  // Add Type
  const handleAddType = () => {
    disPatch(addAddress({name: address.type}));
  };

  //   Address format
  const handleAddressInfo = (e, name) => {
    setAddress({
      ...address,
      [name]: e,
    });
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
        <BackIcon
          onPress={() => {
            navigation.goBack();
          }}></BackIcon>
        {/* Title */}
        <Text
          onPress={() => {
            console.log(addressRedux);
          }}
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
          }}>
          Add Address
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
          value={address.name}
          name="type"
          setValue={handleAddressInfo}
          iconBrand="MaterialCommunityIcons"
          iconName="office-building-marker"
          title="Name"
          placeholder="Work"></Form>
        {/* Address */}
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
        }}>
        <Button
          onPress={handleAddAddress}
          color={false}
          title="Add"
          size={{h: 70, w: 'full'}}></Button>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {userStatus === 'loading' && LoadingDanceDot()}
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

export default AddAddress;
