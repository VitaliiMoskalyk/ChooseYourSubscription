import * as Yup from 'yup';

const registerValidation = () => {
  return Yup.object({
    email: Yup.string().email(' ').required(' '),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(10, 'Must be 10 characters or less')
      .required(' '),
    name: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(10, 'Must be 10 characters or less')
      .required(' '),
  });
};

registerValidation.initialValues = { email: '', password: '', name: '' };
registerValidation.valid = 'register';

export default registerValidation;
