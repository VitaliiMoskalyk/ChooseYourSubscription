import styled from '@emotion/styled';

export const Title2 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  text-align: center;

  margin-top: 100px;
`;

export const BorderWrap = styled.div`
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
  flex-wrap: wrap;
`;

export const Parag = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #333333;

  margin-top: 15px;
`;

export const Title4 = styled.h4`
  max-width: 226px;
  @media (min-width: 767px) {
    max-width: 356px;
  }
  @media (min-width: 1140px) {
    max-width: 704px;
  }
`;

export const WrapBtn = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 243px;
  height: 48px;
  margin-top: 28px;
  @media (min-width: 1440px) {
    height: 54px;
  }
`;

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

export const Section = styled.section`
  height: auto;
  padding-bottom: 80px;
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
