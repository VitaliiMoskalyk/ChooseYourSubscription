import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  display: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  color: ${props => props.theme.color.black2};
  margin-left: 12px;

  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-left: 8px;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    display: block;
  } ;
`;

export const Img = styled.img`
  width: 32px;
  @media (min-width: ${props => props.theme.width.desktop}) {
    width: 55px;
  } ;
`;
