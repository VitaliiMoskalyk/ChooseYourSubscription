import styled from '@emotion/styled';

export const InviteBlock = styled.div`
  background-color: ${props => props.theme.color.blue};
  box-shadow: 0px 2.328px 13.968px rgba(213, 216, 221, 0.2);
  border-radius: 18.624px;

  padding: 32px 20px 20px 20px;
  margin-top: 16px;
  width: 100%;

  overflow: hidden;
  color: ${props => props.theme.color.white};
  @media (min-width: ${props => props.theme.width.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
  }

  @media (min-width: ${props => props.theme.width.desktop}) {
    padding: 40px 80px;
  }

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
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
  color: ${props => props.theme.color.white};

  width: 100%;

  margin-top: 16px;
  @media (min-width: ${props => props.theme.width.tablet}) {
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

  color: ${props => props.theme.color.black2};
  text-align: center;
  @media (min-width: ${props => props.theme.width.tablet}) {
    margin-top: 0;
    padding: 20px 24px;
    width: 336px;
    height: 104px;
  }
  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-top: 0;
    padding: 28px 72px;
    width: 445px;
    height: 123px;
  }
`;

export const Link = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 13.8125px;
  line-height: 1.5;
  text-decoration-line: underline;
  text-transform: uppercase;

  color: ${props => props.theme.color.blue};
  text-align: center;

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
  @media (min-width: ${props => props.theme.width.desktop}) {
    width: 508px;
  }
`;

export const B = styled.b`
  padding-right: 14px;
`;
