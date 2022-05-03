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
