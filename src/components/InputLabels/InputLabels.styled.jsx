import styled from '@emotion/styled';
import { Field } from 'formik';

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
    outline: ${props =>
      props.error.error ? '1px solid red' : '1px solid #1749b3'};
    color: #070033;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  fill: #838099;
  margin-bottom: 24px;

  :hover,
  :focus,
  :active {
    fill: #1749b3;
  }
  :last-of-type {
    margin-bottom: 0;
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
