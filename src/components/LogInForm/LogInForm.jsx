import { Formik } from 'formik';
import {
  Wrapper,
  Submit,
  SubmitWrapper,
  ForgotParag,
} from './LogInForm.styled';
import InputLabels from 'components/InputLabels';

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
              <InputLabels.InputNameLabel error={errors.name} />
              <InputLabels.InputEmailLabel error={errors.email} />
              <InputLabels.InputPasswordLabel error={errors.password} />
            </>
          )}

          {validation.valid === 'subscribe' && (
            <>
              <InputLabels.InputNameLabel error={errors.name} />
              <InputLabels.InputEmailLabel error={errors.email} />
              <InputLabels.InputPhoneLabel error={errors.phone} />
            </>
          )}

          {validation.valid === 'login' && (
            <>
              <InputLabels.InputEmailLabel error={errors.email} />
              <InputLabels.InputPasswordLabel error={errors.password} />
            </>
          )}

          {validation.valid === 'code' && (
            <>
              <InputLabels.InputVerifyLabel error={errors.code} />
            </>
          )}
          {/* <ErrorMessage name="email" /> */}

          {/* <ErrorMessage name="password" /> */}
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
