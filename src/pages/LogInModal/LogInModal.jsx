// import Button from 'components/Button/Button';
import LogInForm from 'components/LogInForm/LogInForm';
import {
  PageWrapper,
  Title,
  Paraghraph,
  Link,
  ForgotParag,
} from './LogInModal.styled';

const LogInModal = () => {
  return (
    <PageWrapper>
      <Title>Log in</Title>
      <Paraghraph>
        New user? <Link>Create an account</Link>
      </Paraghraph>
      <LogInForm />

      <span>Or sign in with</span>
      <p>
        Protected by reCAPTCHA and subject to the Google Privacy Policy and
        Terms of Service.
      </p>
    </PageWrapper>
  );
};
export default LogInModal;
