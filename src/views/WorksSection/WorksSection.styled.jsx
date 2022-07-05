import styled from '@emotion/styled';

export const Title2 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.4;

  color: #171717;
  text-align: center;

  margin-top: 100px;
  margin-bottom: 28px;
`;

export const Wrap = styled.li`
  background: #ffffff;
  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);
  border-radius: 24px;

  margin-top: 16px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    width: 224px;
    height: 186px;
  }
  @media (min-width: 1440px) {
    width: 388px;
    height: 300px;
  }
`;

export const Title3 = styled.h3`
  font-weight: 700;
  font-size: 19px;
  line-height: 1.4;
  color: #171717;
`;

export const Paragr = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5;
  color: #333333;
`;
export const HowWrapper = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
