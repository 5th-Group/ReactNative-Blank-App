import validator from 'validator';

export const LoginValidate = values => {
  const errors = {};

  //   UserName

  if (!values.username) {
    errors.username = 'Username is required!';
  } else if (!validator.isAlphanumeric(values.username)) {
    errors.username = `Username shouldn't include any special character!`;
  } else if (values.username.length < 4) {
    errors.username = 'Username must be more than 4 characters';
  }

  //   PassWord

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password must be more than 4 characters';
  } else if (values.password.length > 20) {
    errors.password = 'Password cannot exceed more than 20 characters';
  }
  return errors;
};

export const LoginForms = [
  {
    id: 1,
    name: 'username',
    placeholder: 'Username',
    title: 'Username',
    icon: {
      brand: 'Feather',
      name: 'user',
    },
    secure: false,
  },
  {
    id: 2,
    name: 'password',
    placeholder: 'Password',
    title: 'Password',
    icon: {
      brand: 'Feather',
      name: 'lock',
    },
    secure: true,
  },
];

export const RegisterForms = [
  {
    id: 1,
    name: 'username',
    placeholder: 'Username',
    title: 'Username',
    secure: false,
  },
  {
    id: 2,
    name: 'email',
    placeholder: 'Email',
    title: 'Email',
    secure: false,
  },

  {
    id: 3,
    name: 'password',
    placeholder: 'Password',
    title: 'Password',
    secure: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    title: 'Confirm Password',
    secure: true,
  },
];

export const RegisterValidate = values => {
  const errors = {};
  // Emaill
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!validator.isEmail(values.email)) {
    errors.email = `Email is invalid!`;
  } else if (values.Email.length < 4) {
    errors.email = 'Email must be more than 4 characters';
  }
  //   UserName

  if (!values.username) {
    errors.username = 'Username is required!';
  } else if (!validator.isAlphanumeric(values.username)) {
    errors.username = `Username shouldn't include any special character!`;
  } else if (values.username.length < 4) {
    errors.username = 'Username must be more than 4 characters';
  }

  //   PassWord

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password must be more than 4 characters';
  } else if (values.password.length > 20) {
    errors.password = 'Password cannot exceed more than 20 characters';
  }

  //  Confirm Password

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (!validator.equals(values.confirmPassword, values.password)) {
    errors.confirmPassword = 'Password not match!';
  }
  return errors;
};

export const EditInfoForm = [
  {
    id: 1,
    name: 'username',
    placeholder: 'Username',
    title: 'Username',
    secure: false,
    icon: {
      brand: 'Feather',
      name: 'user',
    },
  },
  {
    id: 2,
    name: 'firstName',
    placeholder: 'Email',
    title: 'First name',
    secure: false,
    icon: {
      brand: 'MaterialCommunityIcons',
      name: 'music-accidental-sharp',
    },
  },
  {
    id: 3,
    name: 'lastName',
    placeholder: 'Email',
    title: 'Email',
    secure: false,
    icon: {
      brand: 'MaterialCommunityIcons',
      name: 'music-accidental-flat',
    },
  },
  {
    id: 4,
    name: 'email',
    placeholder: 'Email',
    title: 'Email',
    secure: false,
    icon: {
      brand: 'Feather',
      name: 'mail',
    },
  },
  {
    id: 5,
    name: 'phoneNumber',
    placeholder: 'Email',
    title: 'Phone number',
    secure: false,
    icon: {
      brand: 'FontAwesome',
      name: 'mobile-phone',
    },

    keyboard: 'numeric',
  },
];

export const EditInfoFormValidate = values => {
  const errors = {};
  // Emaill
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!validator.isEmail(values.email)) {
    errors.email = `Email is invalid!`;
  } else if (values.email.length < 4) {
    errors.email = 'Email must be more than 4 characters';
  }
  //   UserName

  if (!values.username) {
    errors.username = 'Username is required!';
  } else if (!validator.isAlphanumeric(values.username)) {
    errors.username = `Username shouldn't include any special character!`;
  } else if (values.username.length < 4) {
    errors.username = 'Username must be more than 4 characters';
  }

  //   First name
  if (!values.firstName) {
    errors.firstName = 'First name is required!';
  }
  //   last name
  if (!values.lastName) {
    errors.lastName = 'Last name is required!';
  }
  // Phone number
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number is required!';
  } else if (!validator.isMobilePhone(values.phoneNumber)) {
    errors.phoneNumber = `Phone number invalid!`;
  }

  return errors;
};
