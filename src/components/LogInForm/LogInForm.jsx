import { Formik } from 'formik';
import {
  Wrapper,
  Submit,
  SubmitWrapper,
  ForgotParag,
} from './LogInForm.styled';
import {
  InputNameLabel,
  InputEmailLabel,
  InputPasswordLabel,
  InputPhoneLabel,
  InputVerifyLabel,
} from 'components/InputLabels';

const LogInForm = ({ validation, forgotPassword, btnTitle, onSubmit }) => {
  return (
    <Formik
      autoComplete="off"
      initialValues={validation.initialValues}
      validationSchema={validation}
      onSubmit={values => onSubmit(values)}
    >
      {({ errors, touched }) => (
        <Wrapper>
          {validation.valid === 'register' && (
            <>
              <InputNameLabel error={errors.name} />
              <InputEmailLabel error={errors.email} />
              <InputPasswordLabel error={errors.password} />
            </>
          )}

          {validation.valid === 'subscribe' && (
            <>
              <InputNameLabel error={errors.name} />
              <InputEmailLabel error={errors.email} />
              <InputPhoneLabel error={errors.phone} />
            </>
          )}

          {validation.valid === 'login' && (
            <>
              <InputEmailLabel error={errors.email} />
              <InputPasswordLabel error={errors.password} />
            </>
          )}

          {validation.valid === 'code' && (
            <>
              <InputVerifyLabel error={errors.code} />
            </>
          )}

          <SubmitWrapper>
            <Submit type="submit">{btnTitle}</Submit>
            {forgotPassword && (
              <ForgotParag>
                <b>Forgot password?</b>
              </ForgotParag>
            )}
          </SubmitWrapper>
        </Wrapper>
      )}
    </Formik>
  );
};

export default LogInForm;
