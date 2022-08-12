import { Formik } from 'formik';
import * as Yup from 'yup';
import Svg from 'components/Svg/Svg';
import {
  Wrapper,
  Input,
  SvgStyled,
  InputWrapper,
  Submit,
  SubmitWrapper,
  Label,
  ForgotParag,
} from './LogInForm.styled';
import { useState } from 'react';

const LogInForm = ({ register, forgotPassword, btnTitle }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const showPassword = () => {
    setIsShowPass(!isShowPass);
  };
  return (
    <Formik
      autoComplete="off"
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email(' ').required(' '),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .max(10, 'Must be 10 characters or less')
          .required(' '),
        name: Yup.string()
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
          {register && (
            <InputWrapper>
              <Label htmlFor="name">User name</Label>

              <Input
                error={errors.name}
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <Label htmlFor="email">Email Address</Label>
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
            <Label htmlFor="password">Password</Label>
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
