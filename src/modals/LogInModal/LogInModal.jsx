import AuthBySocialMedia from 'components/AuthBySocialMedia/AuthBySocialMedia';
import LogInForm from 'components/LogInForm/LogInForm';
import {
  PageWrapper,
  Title,
  Paraghraph,
  Link,
  Terms,
  Blue,
} from './LogInModal.styled';
import { useDispatch } from 'react-redux';
import { toggleRegisterModal } from 'redux/slices/modalSlace';
import loginValidation from '../../validation/loginValidation';

const LogInModal = () => {
  const dispatch = useDispatch();
  return (
    <PageWrapper>
      <Title>Log in</Title>
      <Paraghraph>
        New user?
        <Link onClick={() => dispatch(toggleRegisterModal())}>
          Create an account
        </Link>
      </Paraghraph>
      <LogInForm
        forgotPassword
        btnTitle="Log in"
        validation={loginValidation}
      />

      <AuthBySocialMedia />

      <Terms>
        Protected by reCAPTCHA and subject to the Google
        <Blue> Privacy Policy</Blue> and <Blue>Terms of Service</Blue>.
      </Terms>
    </PageWrapper>
  );
};
export default LogInModal;
