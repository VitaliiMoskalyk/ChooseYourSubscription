import styled from '@emotion/styled';
import { Form } from 'formik';
import Button from 'components/Button/Button';

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
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
  text-align: center;

  color: #0f0f0f;

  min-width: 50%;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
    padding: 13px 3px;
  }
`;
