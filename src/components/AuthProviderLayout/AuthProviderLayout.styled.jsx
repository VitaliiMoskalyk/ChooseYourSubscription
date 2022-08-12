import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  align-items: center;
  border: 0.710345px solid #dfdfdf;
  border-radius: 8.52413px;
  padding: 6px 0;
  width: 105px;

  @media (min-width: 768px) {
    width: 119px;
    height: 56px;
    /* padding: 15px 47px; */
  }
  @media (min-width: 1440px) {
    width: 147px;
    height: 70px;
    /* padding: 19px 58px; */
  }
  transition: transform 0.1s;
  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
