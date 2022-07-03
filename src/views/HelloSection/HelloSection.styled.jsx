import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
  padding-top: 48px;

  @media (min-width: 768px) {
    padding-top: 0;
    width: 344px;
    height: 291px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 500px;
  }
`;

export const BlueBlock = styled.div`
  background-color: #1749b3;
  box-shadow: 0px 2.328px 13.968px rgba(213, 216, 221, 0.2);
  border-radius: 18.624px;

  padding: 20px;
  margin-top: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    width: 344px;
    height: 291px;
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 500px;
    padding: 114px 50px;
  }
`;

export const Title2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
`;

export const Paragr2 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  margin-top: 16px;
  margin-bottom: 31px;
`;

export const Section = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 52px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
  }
`;

export const ButtonWrapper = styled.div`
  height: 48px;
  width: 287px;
  @media (min-width: 768px) {
    height: 48px;
    width: 207px;
  }
  @media (min-width: 1440px) {
    height: 54px;
    width: 207px;
  }
`;
