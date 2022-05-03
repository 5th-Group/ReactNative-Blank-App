import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

// const
import {useSelector, useDispatch} from 'react-redux';
import {
  addCoord,
  pendingAddress,
  addAddress,
} from '../../features/Address/AddressSlice';

// Initialize the module (needs to be done only once)

const Map = () => {
  // Const
  const addressStatus = useSelector(state => state.address.status);
  const coord = useSelector(state => state.address.coord);
  const disPatch = useDispatch();

  // Handle'
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
      .catch(error => console.warn(error));
  };

  // AddAddress
  const handleAddAddress = async Region => {
    handleGetAddress({latitude: Region.latitude, longitude: Region.longitude});
    disPatch(
      addCoord({
        latitude: Region.latitude,
        longitude: Region.longitude,
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        onRegionChange={Region => {
          disPatch(pendingAddress());
        }}
        onRegionChangeComplete={Region => {
          handleAddAddress(Region);
        }}
        showsUserLocation={true}
        loadingEnabled={true}
        style={{flex: 1}}
        region={{
          latitude: coord.latitude,
          longitude: coord.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  );
};

export default Map;
