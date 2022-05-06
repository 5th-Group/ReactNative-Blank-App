import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import handleIcon from '../../../../components/Icon/Icon';
import BackIcon from '../../../../components/Back-Icon/BackIcon';
import Form from '../../../../components/Form/Form';
import Button from '../../../../components/Button/Button';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
import {addAddress} from '../../../../features/Address/AddressSlice';
import {
  updateAddress,
  resetUpdataStatus,
} from '../../../../features/User/UserSlice';

const EditPlace = ({navigation, route}) => {
  // Const
  const addressRedux = useSelector(state => state.address.address.long);
  let userData = useSelector(state => state.user.userInfo);
  const updateStatus = useSelector(state => state.user.updateStatus);
  const {address} = route.params;
  const disPatch = useDispatch();

  // Effect
  useEffect(() => {
    disPatch(addAddress({long: address}));
  }, []);

  useEffect(() => {
    if (updateStatus === 'success') {
      disPatch(resetUpdataStatus());
      // navigation.goBack();
    }
  }, [updateStatus]);

  // Handle
  const navigateBack = () => {
    navigation.goBack();
  };
  // Update Address
  const handleUpdateAddress = () => {
    const oldAddress = userData.address.indexOf(address);
    let newAddress = (userData.address[oldAddress] = addressRedux);
    const updataData = {
      ...userData,
      address: [...userData.address, newAddress],
    };
    disPatch(updateAddress({data: updataData, userId: userData._id}));
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
          onPress={() => {
            navigation.navigate('FindMap');
            console.log(updateStatus);
          }}
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
          iconBrand="MaterialCommunityIcons"
          iconName="office-building-marker"
          title="Name"
          placeholder="Work"></Form>

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
              style={{...FONTS.h2}}>
              {addressRedux}
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
    </View>
  );
};

export default EditPlace;
