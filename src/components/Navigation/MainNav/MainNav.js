import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Components
import HomeNavigate from '../HomeNav/HomeNav';
import Detail from '../../../screens/Detail/Detail';
import OrderHistory from '../../../screens/UserProfile/OrderHistory/OrderHistory';
import Settings from '../../../screens/UserProfile/Settings/Setting';
import EditUser from '../../../screens/UserProfile/EditUser/EditUser';
import Profile from '../../../screens/UserProfile/MainProfile/Profile';
import Checkout from '../../../screens/CheckOut/CheckOut';
import SavedPlace from '../../../screens/UserProfile/AddressesScreens/SavedPlaces/savedPlaces';
import EditPlace from '../../../screens/UserProfile/EditPlace/EditPlace';
import Address from '../../../screens/UserProfile/AddressesScreens/Address/Address';

const Nav = createNativeStackNavigator();

const Navigate = () => {
  // Const
  const HomeNav = 'HomeNavigate';
  const DetailComp = 'Detail';
  const OrderHistoryComp = 'OrderHistory';
  const SettingsComp = 'Settings';
  const EditUserComp = 'EditUser';
  const ProfileComp = 'Profile';
  const CheckoutComp = 'Checkout';
  const SavedPlaceComp = 'SavedPlace';
  const EditPlaceComp = 'EditPlace';
  const AddressComp = 'Address';

  return (
    <Nav.Navigator
      initialRouteName={AddressComp}
      screenOptions={({route}) => {
        return {
          headerShown: false,
        };
      }}>
      <Nav.Screen name={HomeNav} component={HomeNavigate} />
      <Nav.Screen name={DetailComp} component={Detail} />
      <Nav.Screen name={OrderHistoryComp} component={OrderHistory} />
      <Nav.Screen name={SettingsComp} component={Settings} />
      <Nav.Screen name={EditUserComp} component={EditUser} />
      <Nav.Screen name={ProfileComp} component={Profile} />
      <Nav.Screen name={CheckoutComp} component={Checkout} />
      <Nav.Screen name={SavedPlaceComp} component={SavedPlace} />
      <Nav.Screen name={EditPlaceComp} component={EditPlace} />
      <Nav.Screen name={AddressComp} component={Address} />
    </Nav.Navigator>
  );
};

export default Navigate;
