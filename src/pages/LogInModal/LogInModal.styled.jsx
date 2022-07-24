import styled from '@emotion/styled';
import { Field, Form } from 'formik';

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
`;

export const SvgStyled = styled.div`
  position: absolute;
  right: 24px;
  top: 30px;
`;
