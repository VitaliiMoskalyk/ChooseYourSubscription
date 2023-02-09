import styled from '@emotion/styled';

export const LanguageTitle = styled.span`
  padding-right: 6px;
`;

export const LanguageBlock = styled.ul`
  position: absolute;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  font-weight: 400;
  font-size: 17px;
  line-height: 150%;
  /* identical to box height, or 26px */

  letter-spacing: 0.01em;

  /* black 2 */

  color: #171717;
  box-shadow: 0px 20px 48px rgba(177, 177, 177, 0.4);
  border-radius: 16px;
  background-color: #fff;
  height: 169px;
  width: fit-content;
  padding: 27px 23px;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
