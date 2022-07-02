import styled from '@emotion/styled';

export const Title2 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  text-align: center;

  margin-top: 100px;
  margin-bottom: 28px;
`;

export const BorderWrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 2.328px 13.968px rgba(213, 216, 221, 0.2);
  border-radius: 24px;

  padding: 20px;
  margin-top: 16px;

  @media (min-width: 767px) {
    width: 344px;
    height: 412px;
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 535px;
  }
`;

export const Paragr = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #333;

  margin-top: 16px;
`;

export const AboutWrapper = styled.div`
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const ImageWrapper = styled.div`
  @media (min-width: 767px) {
    width: 344px;
    height: 412px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 535px;
  }
`;
