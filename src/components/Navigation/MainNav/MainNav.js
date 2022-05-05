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
import EditPlace from '../../../screens/UserProfile/AddressesScreens/EditPlace/EditPlace';
import FindMap from '../../../screens/UserProfile/AddressesScreens/FindMap/FindMap';
import AddressAuto from '../../../screens/UserProfile/AddressesScreens/AddressAuto/AddressAutoComplete';
import WriteReview from '../../../screens/WriteReview/WriteReview';

const Nav = createNativeStackNavigator();

const Navigate = () => {
  const HomeNav = 'HomeNavigate';
  const DetailComp = 'Detail';
  const OrderHistoryComp = 'OrderHistory';
  const SettingsComp = 'Settings';
  const EditUserComp = 'EditUser';
  const ProfileComp = 'Profile';
  const CheckoutComp = 'Checkout';
  const SavedPlaceComp = 'SavedPlace';
  const EditPlaceComp = 'EditPlace';
  const FindMapComp = 'FindMap';
  const AddressAutoComp = 'AddressAuto';
  const WriteReviewComp = 'WriteReview';

  return (
    <Nav.Navigator
      initialRouteName={HomeNav}
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
      <Nav.Screen name={FindMapComp} component={FindMap} />
      <Nav.Screen name={AddressAutoComp} component={AddressAuto} />
      <Nav.Screen name={WriteReviewComp} component={WriteReview} />
    </Nav.Navigator>
  );
};

export default Navigate;
