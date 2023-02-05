import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 382px;
  padding: 32px 16px;

  margin-bottom: 16px;
  @media (min-width: 768px) {
    height: 412px;
    width: 224px;
    margin-right: 16px;
    :last-of-type {
      margin-right: 0px;
    }
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
    height: 532px;
    width: 389px;
    padding: 60px 40px 40px 40px;
  }

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 0 0 21px 0;
  border: 1px solid #dbdbdb;
  @media (min-width: 1440px) {
    margin: 0 0 36px 0;
  }
`;

export const BlockTitle = styled.h3`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.4;

  text-align: center;
  letter-spacing: 0.01em;

  color: #0f0f0f;

  margin-bottom: 20px;
  @media (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const ItemWrapper = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  width: 100%;

  color: #5c5c5c;

  padding-left: 8px;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Items = styled.li`
  display: flex;
  margin-bottom: 17px;

  /* :last-of-type {
    margin-bottom: 40px;
  } */
  @media (min-width: 1440px) {
    :last-of-type {
      margin-bottom: 64px;
    }
  }
`;

export const PriceTitle = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.3;
  margin-right: auto;
  margin-left: auto;

  color: #0f0f0f;

  margin-bottom: 12px;
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const SignWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  @media (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const List = styled.ul`
  min-height: 143px;
  overflow: hidden;
  @media (min-width: 768px) {
    min-height: 173px;
  }
  @media (min-width: 1440px) {
    min-height: 184px;
  }
`;
