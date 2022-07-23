import styled from '@emotion/styled';

export const LogInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px;

  width: 100%;
  height: auto;

  font-weight: 700;
  font-size: 17px;
  line-height: 1.3;

  border-radius: 12px;

  background-color: #1749b3;
  color: #fff;
  border: none;

  :hover,
  :focus {
    border: 1px solid #1749b3;
    background-color: #fff;
    color: #000;
  }
  :active {
    background-color: #4b84fd;
    border: none;
    color: #fff;
  }
`;
