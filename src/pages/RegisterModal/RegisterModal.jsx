import AuthBySocialMedia from 'components/AuthBySocialMedia/AuthBySocialMedia';
import LogInForm from 'components/LogInForm/LogInForm';

import { PageWrapper, Paraghraph, Title, Link } from './RegisterModal.styled';
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from 'redux/slices/modalSlace';
import registerValidation from 'validation/registerValidation';
import { useState } from 'react';
import codeValidation from 'validation/codeValidation';
const axios = require('axios').default;

axios.defaults.baseURL = 'http://localhost:5000/api/auth';

const post = async values => {
  await axios.post('/signup', values).then(function (response) {
    console.log(response);
  });
};
const RegisterModal = () => {
  const dispatch = useDispatch();
  const [verify, setVerify] = useState(false);

  const submitForm = async e => {
    await post(e).then(() => setVerify(true));
  };

  return verify ? (
    <PageWrapper>
      <Title>Email verification</Title>
      <Paraghraph>
        Please enter the 6-digit verification code that was sent to
        name@gmail,com. The code is valid for 30 minutes.
      </Paraghraph>
      <LogInForm btnTitle="Sing up" validation={codeValidation} />
    </PageWrapper>
  ) : (
    <PageWrapper>
      <Title>Create an account</Title>
      <Paraghraph>
        Already have an account?
        <Link onClick={() => dispatch(toggleAuthModal())}> Sign In</Link>
      </Paraghraph>
      <LogInForm
        register
        btnTitle="Sign up"
        validation={registerValidation}
        onSubmit={submitForm}
      />

      <AuthBySocialMedia />

      {/* <Terms>
        Protected by reCAPTCHA and subject to the Google
        <Blue> Privacy Policy</Blue> and <Blue>Terms of Service</Blue>.
      </Terms> */}
    </PageWrapper>
  );
};
export default RegisterModal;
