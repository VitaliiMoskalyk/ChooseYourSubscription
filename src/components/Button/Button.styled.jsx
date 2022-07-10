import styled from '@emotion/styled';

export const Button1 = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 4px;
  overflow: hidden;
  white-space: nowrap;

  width: 100%;
  height: 100%;
  border-radius: 16px;

  background-color: ${props =>
    props.primary ? props.theme.color.black1 : props.theme.color.blue};
  color: ${props => props.theme.color.white};
  border: none;

  transition: background-color 0.5s;
  @media (min-width: ${props => props.theme.width.desktop}) {
    padding: 16px 4px;
  }

  :hover {
    background-color: ${props => props.theme.color.white};
    border-radius: 16px;
    outline: 1px solid
      ${props =>
        props.primary ? props.theme.color.black1 : props.theme.color.blue};
    color: ${props => props.theme.color.black2};
  }
  :active,
  :focus {
    background-color: ${props => (props.primary ? '#606060' : '#4B84FD')};
    outline: none;
    color: ${props => props.theme.color.white};
  }
`;

export const Button2 = styled(Button1)`
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black2};

  :hover {
    background-color: ${props => props.theme.color.blue};
    outline: 1px solid ${props => props.theme.color.white} 16px;
    color: ${props => props.theme.color.white};
  }
  :active,
  :focus {
    background-color: ${props => 'rgba(255, 255, 255, 0.8)'};
    outline: none;
    color: ${props => props.theme.color.black2};
  }
`;
