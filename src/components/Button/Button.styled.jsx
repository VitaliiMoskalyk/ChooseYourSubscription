import styled from '@emotion/styled';

export const ButtonWhite = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;

  width: 100%;
  height: 100%;
  border-radius: 16px;

  background-color: #fff;
  border: none;

  :hover,
  :focus {
    outline: 1px solid #1749b3;
  }
  :active {
    color: #1749b3;
  }
`;

export const ButtonBlue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;

  width: 100%;
  height: 100%;
  border-radius: 16px;

  background-color: #1749b3;
  color: #ffffff;
  border: none;

  :hover,
  :focus {
    background-color: #fff;
    outline: 1px solid #1749b3;
    color: #171717;
  }
  :active {
    background-color: #4b84fd;
    border: none;
    color: #ffffff;
  }
`;

export const ButtonBlack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;

  width: 100%;
  height: 100%;
  border-radius: 16px;

  background: #333333;
  color: #ffffff;
  border: none;

  :hover,
  :focus {
    background-color: #fff;
    outline: 1px solid #171717;
    color: #171717;
  }
  :active {
    background-color: #606060;
    border: none;
    color: #ffffff;
  }
`;
