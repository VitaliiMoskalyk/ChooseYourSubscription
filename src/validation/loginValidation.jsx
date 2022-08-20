import * as Yup from 'yup';

const loginValidation = () => {
  return Yup.object({
    email: Yup.string().email(' ').required(' '),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(10, 'Must be 10 characters or less')
      .required(' '),
  });
};

loginValidation.initialValues = { email: '', password: '' };
loginValidation.valid = 'login';

export default loginValidation;
