import styled from '@emotion/styled';

export const Border = styled.div`
  box-shadow: 0px 12px 28px rgba(177, 177, 177, 0.2);
  border-radius: 24px;
  overflow: hidden;

  background-color: #fff;

  margin-top: 16px;

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
    height: 200px;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    height: 342px;
  }
`;

export const ContentBox = styled.div`
  padding: 32px 20px;
  @media (min-width: 767px) {
    padding: 49px 32px;
    width: 100%;
  }
`;

export const Title3 = styled.h3`
  display: inline-block;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.4;
  color: #171717;
  text-align: center;

  height: 31px;
  @media (min-width: 767px) {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.4;
  }
`;

export const Paragr = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333333;

  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  height: 100%;
  overflow: hidden;
  padding: 32px;
  background-color: ${props => props.background};

  @media (min-width: 767px) {
    max-width: 344px;
    padding: 40px 18px;
  }
  @media (min-width: 1440px) {
    max-width: 588px;
    padding: 80px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (min-width: 767px) {
    width: 135px;
    height: 48px;
  }
`;

export const ButtonTitle = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 1.3;
`;
