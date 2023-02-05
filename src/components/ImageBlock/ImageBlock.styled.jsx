import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
  box-shadow: 0px 6.97297px 16.2703px rgba(244, 245, 245, 0.2);
  border-radius: 18.5946px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 24px;
  }
  @media (min-width: 1440px) {
    box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);
    border-radius: 32px;
  }
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
