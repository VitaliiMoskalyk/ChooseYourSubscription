import styled from '@emotion/styled';

export const Wrap = styled.section`
  background-color: #ecf3fb;
`;

export const Container = styled.div`
  padding: 0 24px;
  max-width: 375px;

  @media (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 120px;
    max-width: 1440px;
  }

  margin-left: auto;
  margin-right: auto;
`;
