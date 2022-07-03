import styled from '@emotion/styled';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  color: #333333;

  margin-left: auto;
  margin-right: auto;

  max-width: 375px;
  height: 54px;
  padding: 11px 24px;

  @media (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
    padding: 0 120px;
    max-width: 1440px;
    height: 60px;
  }
`;

export const SocialMediaWrapper = styled.div`
  margin-left: 120px;
  width: 93px;
  height: 24px;
`;

export const SiteNavigationWrapper = styled.div`
  margin-left: 44px;
  width: 419px;
`;

export const SiteNavTitle = styled.span`
  padding-right: 12px;
`;

export const SubscriptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-left: 116px;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-left: 42px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 236px;
  margin-left: 40px;
`;
