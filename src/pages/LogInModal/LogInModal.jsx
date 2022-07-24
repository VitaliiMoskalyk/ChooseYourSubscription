// import Button from 'components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Svg from 'components/Svg/Svg';
import { Wrapper, Input, SvgStyled, InputWrapper } from './LogInModal.styled';
import { useState } from 'react';

const LogInForm = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const showPassword = () => {
    setIsShowPass(!isShowPass);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(' ')

          .required(' '),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .max(10, 'Must be 10 characters or less')
          .required(' '),
      })}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Wrapper>
          <InputWrapper>
            <label htmlFor="email">Email Address</label>
            <SvgStyled>
              {touched.email && errors.email ? (
                <Svg icon="icon-invalid" width="22" height="22" />
              ) : (
                <Svg icon="icon-Valid" width="22" height="22" />
              )}
            </SvgStyled>
            <Input
              error={errors.email}
              id="email"
              name="email"
              type="email"
              placeholder="name@gmail.com"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <SvgStyled onClick={showPassword}>
              {isShowPass ? (
                <Svg icon="icon-openEye" width="22" height="22" />
              ) : (
                <Svg icon="icon-closeEye" width="22" height="22" />
              )}
            </SvgStyled>
            <Input
              error={errors.password}
              id="password"
              name="password"
              type={isShowPass ? 'text' : 'password'}
              placeholder="********"
            />
          </InputWrapper>
          {/* <ErrorMessage name="email" /> */}

          {/* <ErrorMessage name="password" /> */}
          <button type="submit">Submit</button>
        </Wrapper>
      )}
    </Formik>
  );
};

const LogInModal = () => {
  return (
    <div>
      <h4>Log in</h4>
      <p>New user? Create an account</p>
      <LogInForm />

      <p>Forfot password?</p>
      <span>Or sign in with</span>
      <p>
        Protected by reCAPTCHA and subject to the Google Privacy Policy and
        Terms of Service.
      </p>
    </div>
  );
};
export default LogInModal;
