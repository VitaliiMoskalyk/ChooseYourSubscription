import styled from '@emotion/styled';

export const InviteBlock = styled.div`
  background-color: #1749b3;
  box-shadow: 0px 2.328px 13.968px rgba(213, 216, 221, 0.2);
  border-radius: 18.624px;

  padding: 32px 20px 20px 20px;
  margin-top: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.4;
`;

export const Parag = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5;
  color: #fff;

  margin-top: 16px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ClickWrap = styled.div`
  background: #f1f4f8;
  border-radius: 16px;
  padding: 28px 33px;
  margin-top: 32px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;

  color: #171717;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 0;
    padding: 20px 24px;
    width: 336px;
    height: 104px;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
    padding: 28px 72px;
    width: 445px;
    height: 123px;
  }
`;

export const Link = styled.span`
  display: inline-block;
  font-size: 13.8125px;
  line-height: 1.5;
  text-decoration-line: underline;
  text-transform: uppercase;

  color: #1749b3;
  text-align: center;
  padding-right: 14px;
  margin-top: 12px;
`;

export const CopyButton = styled.button`
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
`;

export const InviteBlockWrapper = styled.div`
  width: 275px;
  @media (min-width: 1440px) {
    width: 508px;
  }
`;
