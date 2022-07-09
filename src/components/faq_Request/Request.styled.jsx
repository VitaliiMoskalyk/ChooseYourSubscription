import styled from '@emotion/styled';

export const BlueBlock = styled.div`
  background: #1749b3;
  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
  border-radius: 24px;

  padding: 40px 20px;
  margin-top: 100px;

  color: #ffffff;
  font-size: 22px;
  line-height: 1.4;

  @media (min-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    padding: 40px 60px;
  }
`;

export const Article = styled.p`
  font-size: 16px;
  line-height: 1.5;

  margin-top: 16px;
  margin-bottom: 32px;
`;

export const BtnTxt = styled.b`
  font-size: 17px;
  line-height: 130%;
`;

export const ReqButtonWrapper = styled.div`
  @media (min-width: 767px) {
    width: 239px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    width: 296px;
    height: 54px;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 767px) {
    width: 356px;
  }
  @media (min-width: 1440px) {
    width: 704px;
  }
`;

export const Title = styled.h4`
  max-width: 226px;
  @media (min-width: 767px) {
    max-width: 356px;
  }
  @media (min-width: 1140px) {
    max-width: 704px;
  }
`;
