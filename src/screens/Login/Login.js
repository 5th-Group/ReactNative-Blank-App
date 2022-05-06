import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// Components
import {LoaderInfinity, LoginFail} from '../../components/Poster/Poster';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import BackIcon from '../../components/Back-Icon/BackIcon';

// CONST
import styles from './styles';
import handleIcon from '../../components/Icon/Icon';
import {SIZES, COLORS, FONTS, UTILS} from '../../constants/constants';
import {LoginForms, LoginValidate} from '../../constants/formValidation';
import {resetStatus} from '../../features/User/UserSlice';
import {login} from '../../api/apiFixPost';

const Login = ({navigation}) => {
  // States
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Redux

  const userStatus = useSelector(state => state.user.status);
  const user = useSelector(state => state.user.userInfo);
  const token = useSelector(state => state.user.accessToken);

  // Const
  const disPatch = useDispatch();

  // Effect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const {username, password} = loginInfo;
      // Login
      login({username, password}, token, disPatch);
      Keyboard.dismiss();
      setLoginInfo({
        username: '',
        password: '',
      });
    }
  }, [formErrors]);

  useEffect(() => {
    if (userStatus === 'error') {
      setModalVisible(true);
      disPatch(resetStatus());
    }
  }, [userStatus]);

  // Handle

  // Login
  const handleLogin = () => {
    setIsSubmit(true);
    setFormErrors(LoginValidate(loginInfo));
    if (Object.keys(formErrors).length === 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // Form handle
  const handleForm = (e, name) => {
    setLoginInfo({
      ...loginInfo,
      [name]: e,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.wrap}>
        {/* Loader */}
        {userStatus === 'loading' && (
          <View
            style={{
              position: 'absolute',
              ...UTILS.absolute,
              backgroundColor: COLORS.overlay(0.8),
              zIndex: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {LoaderInfinity()}
          </View>
        )}
        {/* Error */}
        {
          <Modal
            statusBarTranslucent={true}
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
            <View
              style={{
                flex: 1,
                ...UTILS.center,
                backgroundColor: COLORS.overlay(0.5),
              }}>
              <View
                style={{
                  margin: SIZES.padding,
                  backgroundColor: COLORS.white,
                  borderRadius: 20,
                  paddingVertical: 50,
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    padding: SIZES.padding,
                    position: 'absolute',
                    right: 0,
                    top: -10,
                    zIndex: 10,
                  }}
                  onPress={() => setModalVisible(false)}>
                  {handleIcon(
                    'AntDesign',
                    'close',
                    SIZES.h1Half,
                    COLORS.primary,
                  )}
                </TouchableOpacity>
                {LoginFail()}
              </View>
            </View>
          </Modal>
        }
        {/* Test */}

        {/* Header */}
        <View style={styles.box1}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
            }}>
            <BackIcon
              onPress={() => {
                navigation.goBack();
              }}></BackIcon>
            <Text style={{...FONTS.largeTitleBold, color: COLORS.primary}}>
              Login
            </Text>
          </View>

          <Text
            onPress={() => {
              console.log(user);
            }}
            style={{...FONTS.body2}}>
            Login now to track all your favourite books, explore the book world!
          </Text>
        </View>
        {/* Forms */}
        <View style={{...styles.box2}}>
          {LoginForms.map(form => {
            return (
              <Form
                key={form.id}
                auto={form.name === 'username'}
                isError={isError}
                secure={form.secure}
                formErrors={formErrors}
                iconBrand={form.icon.brand}
                iconName={form.icon.name}
                title={form.title}
                name={form.name}
                value={loginInfo[form.name]}
                setValue={handleForm}></Form>
            );
          })}

          {/* Forgot button */}
          <TouchableOpacity
            style={{position: 'relative', top: -5}}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={{...FONTS.body2, color: COLORS.primary}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <View style={styles.box3}>
          <Button
            // navigate={homeNavigate}
            onPress={handleLogin}
            title="Login"
            color={true}
            size={{w: 'full', h: 70}}></Button>
        </View>
        {/* Register Button */}
        <View style={styles.box4}>
          <Text style={{...FONTS.body2}}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={{...FONTS.body2, color: COLORS.primary}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* Image */}
        <View style={styles.box5}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/Images/6.png')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
