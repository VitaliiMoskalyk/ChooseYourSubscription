import styled from '@emotion/styled';

export const TarifWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainTitle = styled.h2`
  font-size: 28px;
  line-height: 1.4;
  text-align: center;

  color: #171717;

  padding-top: 48px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    padding-top: 52px;
  }
  @media (min-width: 1140px) {
    font-size: 36px;
    padding-top: 80px;
    margin-bottom: 20px;
  }
`;

export const MainParag = styled.p`
  font-size: 17px;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-align: center;

  color: #333333;

  margin-bottom: 40px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1140px) {
    margin-bottom: 52px;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  max-width: 330px;
  height: 61px;

  margin-bottom: 32px;
  @media (min-width: 768px) {
    max-width: 238px;
  }
  @media (min-width: 1140px) {
    max-width: 360px;
    margin-bottom: 48px;
  }
`;
