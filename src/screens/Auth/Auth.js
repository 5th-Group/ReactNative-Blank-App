import React from 'react';
import {useSelector} from 'react-redux';

// Components
import Navigate from '../../components/Navigation/MainNav/MainNav';
import LoginNavigate from '../../components/Navigation/LoginNav/LoginNav';

const Auth = () => {
  // const
  const user = useSelector(state => state.user.userInfo);
  return <>{user ? <Navigate></Navigate> : <LoginNavigate></LoginNavigate>}</>;
};

export default Auth;
