import * as Yup from 'yup';

const subscribeValidation = () => {
  return Yup.object({
    email: Yup.string().email(' ').required(' '),
    phone: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(14, 'Must be 14 characters or less')
      .required(' '),
    name: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(10, 'Must be 10 characters or less')
      .required(' '),
  });
};

subscribeValidation.initialValues = { email: '', phone: '', name: '' };
subscribeValidation.valid = 'subscribe';

export default subscribeValidation;
