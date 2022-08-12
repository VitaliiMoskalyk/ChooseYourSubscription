import AuthBySocialMedia from 'components/AuthBySocialMedia/AuthBySocialMedia';
import LogInForm from 'components/LogInForm/LogInForm';

import { PageWrapper, Paraghraph, Title, Link } from './RegisterModal.styled';
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from 'redux/slices/modalSlace';

const RegisterModal = () => {
  const dispatch = useDispatch();
  return (
    <PageWrapper>
      <Title>Create an account</Title>
      <Paraghraph>
        Already have an account?
        <Link onClick={() => dispatch(toggleAuthModal())}> Sign In</Link>
      </Paraghraph>
      <LogInForm register btnTitle="Sign up" />

      <AuthBySocialMedia />

      {/* <Terms>
        Protected by reCAPTCHA and subject to the Google
        <Blue> Privacy Policy</Blue> and <Blue>Terms of Service</Blue>.
      </Terms> */}
    </PageWrapper>
  );
};
export default RegisterModal;
