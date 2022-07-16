import styled from '@emotion/styled';

export const FooterStl = styled.footer`
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;

  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  padding: 40px 24px 12px 24px;
  max-width: 375px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 42px 32px 12px 32px;
    max-width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 40px 120px 12px 120px;
    max-width: 1440px;
  }
`;

export const Span1 = styled.span`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    width: 190px;
    margin-bottom: 0;
  }
`;

export const Title2 = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  padding-left: 12px;
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: block;
    font-size: 12px;
  }
`;

export const Paragh = styled.p`
  margin-top: 12px;
`;

export const Title4 = styled.h4`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 14px;
`;

// export const Links = styled.ul`
//   display: flex;
//   flex-direction: column;
//   font-size: 16px;
//   line-height: 1.5;

//   margin-right: 28px;
//   margin-bottom: 42.67px;
// `;

export const SocialMediaWrapper = styled.div`
  width: 80px;
  height: 32px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Lang = styled.a`
  font-size: 17px;
  line-height: 1.5;
  text-decoration-line: none;
  /* text-transform: uppercase; */
  color: #ffffff;
`;

export const Span3 = styled.div`
  text-align: center;
  border-top: 1px solid rgba(247, 247, 247, 0.5);
  font-size: 15px;
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: #f7f7f7;
  opacity: 0.5;
  padding-top: 16px;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
  }
  @media (min-width: 1440px) {
    border: none;
    font-size: 16px;
    line-height: 1.5;
  }
`;

// export const SocialItem = styled.li`
//   font-size: 16px;
//   line-height: 1.5;
//   margin: 6px 0;
// `;

export const Span4 = styled.div`
  background-color: #1749b3;
`;

export const NavigationWrapper = styled.div`
  margin-right: 8px;
  margin-bottom: 42.67px;
  ul {
    flex-direction: column;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: fit-content;
    flex-direction: column;
    align-items: flex-end;
  }
`;
