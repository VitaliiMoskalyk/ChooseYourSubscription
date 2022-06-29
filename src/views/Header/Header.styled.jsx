import styled from '@emotion/styled';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  padding: 11px 24px;

  @media (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 120px;
    max-width: 1440px;
  }
`;
