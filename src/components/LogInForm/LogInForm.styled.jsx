import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import Button from 'components/Button/Button';

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  height: 51px;
  width: 100%;
  background: #f1f4f8;
  border-radius: 12px;
  padding: 16px 24px;

  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;

  letter-spacing: 0.01em;

  /* color: #9c99ad; */
  outline: none;
  border: none;

  :hover,
  :focus {
    outline: ${props => (props.error ? '1px solid red' : '1px solid #1749b3')};
    color: #070033;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  fill: #838099;

  :hover,
  :focus,
  :active {
    fill: #1749b3;
  }
  :first-of-type {
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 1.3;

  letter-spacing: 0.01em;

  color: #1b1b29;

  margin-bottom: 12px;
`;
export const SvgStyled = styled.div`
  position: absolute;
  right: 24px;
  top: 45px;
`;

export const Submit = styled(Button)``;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ForgotParag = styled.p`
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 22px */

  text-align: center;

  color: #0f0f0f;

  min-width: 50%;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
    padding: 13px 3px;
  }
`;
