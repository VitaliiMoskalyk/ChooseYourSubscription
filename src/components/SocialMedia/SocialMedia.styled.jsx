import styled from '@emotion/styled';

export const SocialLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Link = styled.a`
  fill: ${props => props.fill};
  :hover {
    fill: ${props =>
      props.inverse ? 'rgba(255, 255, 255, 0.8)' : props.theme.color.blue};
  }
  :active {
    fill: ${props => (props.inverse ? '#F7F7F7' : '#4b84fd')};
  }
`;
