import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;

  margin-bottom: 16px;
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 0 0 21px 0;
  border: 1px solid #dbdbdb;
`;

export const BlockTitle = styled.h3`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.4;

  text-align: center;
  letter-spacing: 0.01em;

  color: #0f0f0f;

  margin-bottom: 20px;
`;

export const ItemWrapper = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;

  color: #5c5c5c;

  padding-left: 8px;
`;

export const Items = styled.li`
  display: flex;
  margin-bottom: 17px;

  :last-of-type {
    margin-bottom: 40px;
  }
`;

export const PriceTitle = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.3;

  color: #0f0f0f;

  margin-bottom: 12px;
`;

export const SignWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
`;
