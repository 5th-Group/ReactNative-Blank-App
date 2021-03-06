import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Keyboard} from 'react-native';

// Components
import BackIcon from '../../../components/Back-Icon/BackIcon';
import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';
import {LoadingDanceDot} from '../../../components/Poster/Poster';

// CONST
import {SIZES, FONTS, COLORS, UTILS} from '../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  EditInfoForm,
  EditInfoFormValidate,
} from '../../../constants/formValidation';

// Actions
import {resetStatus} from '../../../features/User/UserSlice';
import {putUserData} from '../../../api/apiFixPost';

const EditUser = ({navigation}) => {
  // States
  const [userForm, setUserForm] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  // Reudux
  const userData = useSelector(state => state.user.userInfo);
  const token = useSelector(state => state.user.accessToken);
  const status = useSelector(state => state.user.status);

  // Const
  const disPatch = useDispatch();

  // Handle
  const navigateBack = () => {
    navigation.goBack();
  };

  // Update
  const handleUpdateUserInfo = () => {
    setIsSubmit(true);
    setFormErrors(EditInfoFormValidate(userForm));
    if (Object.keys(formErrors).length === 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // UserForm
  const handleUserForm = (e, name) => {
    setUserForm({
      ...userForm,
      [name]: e,
    });
  };

  // Effect
  useEffect(() => {
    setUserForm({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      username: userData.username,
    });
  }, []);

  useEffect(() => {
    if (status === 'success') {
      navigation.goBack();
      disPatch(resetStatus());
    }
  }, [status]);

  // Effect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      putUserData(userForm, token, disPatch);
      Keyboard.dismiss();
    }
  }, [formErrors]);

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
            console.log(token);
          }}
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
          }}>
          Edit Infomation
        </Text>
      </View>
    );
  };
  //   EditForm
  const renderEditForm = () => {
    return (
      <View>
        {EditInfoForm.map(form => {
          return (
            <Form
              key={form.id}
              keyboard={form.keyboard}
              iconBrand={form.icon.brand}
              iconName={form.icon.name}
              setValue={handleUserForm}
              isError={isError}
              formErrors={formErrors}
              secure={form.secure}
              title={form.title}
              value={userForm[form.name]}
              name={form.name}></Form>
          );
        })}
      </View>
    );
  };

  // Bottom Button
  const renderBottomButton = () => {
    return (
      <View style={{marginTop: 20}}>
        <Button
          onPress={handleUpdateUserInfo}
          size={{h: 70, w: 'full'}}
          title="Save"
          color={true}></Button>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      {status === 'loading' && LoadingDanceDot()}

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

export default EditUser;
