import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 4px;

  width: 50%;
  height: 100%;
  background-color: #1749b3;

  border: none;

  font-weight: 400;
  font-size: 17px;
  line-height: 1.5;
  letter-spacing: 0.01em;

  text-align: center;

  color: #ffffff;

  :enabled {
    border: 1px solid #1749b3;
    background-color: transparent;
    color: #030303;
  }
  border-radius: ${props =>
    props.reverse ? ' 0px 12px 12px 0px;' : ' 12px 0px 0px 12px;'};
`;
