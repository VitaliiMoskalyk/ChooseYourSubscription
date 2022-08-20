import * as Yup from 'yup';

const codeValidation = () => {
  return Yup.object({
    code: Yup.number()
      .min(100000, 'Must be 6 digits')
      .max(999999, 'Must be 6 digits')
      .required(' '),
  });
};

codeValidation.initialValues = { code: '' };
codeValidation.valid = 'code';

export default codeValidation;
