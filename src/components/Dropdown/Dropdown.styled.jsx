import styled from '@emotion/styled';

export const Layer = styled.div`
  background: #ffffff;
  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);
  border-radius: 24px;

  font-weight: 400;
  font-size: 17px;
  line-height: 1.5;
  color: #171717;

  padding: 20px;
  margin-top: 16px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Question = styled.h4`
  max-width: 226px;
  @media (min-width: 767px) {
    max-width: 356px;
  }
  @media (min-width: 1440px) {
    max-width: 704px;
  }
`;

export const Answer = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #333333;

  margin-top: 15px;
`;
