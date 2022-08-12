import styled from '@emotion/styled';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 32px 0;
  @media (min-width: 768px) {
    justify-content: space-around;
    margin: 24px 0 36px 0;
  }
  @media (min-width: 1440px) {
    margin: 24px 0 48px 0;
  }
`;

export const Border = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  ::after,
  ::before {
    content: ' ';

    width: 90%;
    border-top: 1px solid #dfdfdf;
  }
`;
export const Text = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #919191;
`;
