import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import Map from '../../../../components/Map/Map';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

// Components
import Button from '../../../../components/Button/Button';
import {Marker} from '../../../../components/Poster/Poster';
import handleIcon from '../../../../components/Icon/Icon';

// Const
import {SIZES, FONTS, COLORS, UTILS} from '../../../../constants/constants';
import {
  addCoord2,
  pendingAddress,
  addAddress,
} from '../../../../features/Address/AddressSlice';

// Init
Geocoder.init('AIzaSyBU1Jbhsl9TQZ3dIZZNI6zsdyyFe_2oPlU');

const FindMap = ({navigation}) => {
  // State
  const [location, setLocation] = useState(null);
  // Const
  const disPatch = useDispatch();
  const addressStatus = useSelector(state => state.address.status);
  const coord = useSelector(state => state.address.coord);

  // Handle

  // Get Address
  const handleGetAddress = region => {
    disPatch(pendingAddress());
    Geocoder.from({
      latitude: region.latitude,
      longitude: region.longitude,
    })
      .then(json => {
        const long = json.results[1].formatted_address;
        const number = json.results[1].address_components[0].long_name;
        const street = json.results[1].address_components[1].long_name;
        const short = `${number} ${street}`;
        const address = {long: long, short: short};
        disPatch(addAddress(address));
      })
      .catch(error => console.log(error));
  };

  // Effect
  useEffect(() => {
    // Request Camera

    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permisstion',
            message:
              'Blank App needs access to your location so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the Map');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();

    // Get Current position
    const getOneTimeLocation = () => {
      disPatch(pendingAddress());
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          handleGetAddress({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          disPatch(
            addCoord2({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          );
        },
        error => {
          console.log(error.message.toString());
        },
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        },
      );
      console.log('log');
      console.log(coord.latitude);
    };

    getOneTimeLocation();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Map setLocation={setLocation} />
      {/* Marker */}
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: '46%',
          overflow: 'visible',
        }}>
        <Marker></Marker>
      </View>
      {/* Address */}
      <View
        style={{
          position: 'absolute',
          height: 250,
          backgroundColor: COLORS.white,
          bottom: 0,
          width: SIZES.width,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: SIZES.padding,
          ...UTILS.shadow,
        }}>
        {/* Address */}
        <View
          style={{
            backgroundColor: COLORS.backgroun,
            borderRadius: SIZES.radius,
            width: SIZES.width - 40,
            flexDirection: 'row',
            paddingRight: 20,
            paddingVertical: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View style={{flex: 2, ...UTILS.center}}>
            {handleIcon(
              'MaterialIcons',
              'my-location',
              SIZES.h1Half,
              COLORS.primary,
            )}
          </View>
          <View style={{flex: 9}}>
            <Text style={{...FONTS.h2, fontSize: SIZES.h2 - 3}}>
              {location ? location.short : ''}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                ...FONTS.body2,
                fontSize: SIZES.h2 - 3,
              }}>
              {location ? location.long : ''}
            </Text>
          </View>
        </View>
        {/* Button */}
        <View style={{marginTop: 10}}>
          <Button
            onPress={() => {
              disPatch(addAddress(location));
              navigation.goBack();
            }}
            disable={addressStatus === 'pending' ? true : false}
            title="Confirm"
            color={true}
            size={{h: 70, w: 'full'}}></Button>
        </View>
      </View>
    </View>
  );
};

export default FindMap;
