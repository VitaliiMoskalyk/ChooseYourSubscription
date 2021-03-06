import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

export const PageNav = styled.div`
  box-shadow: 0px 12px 28px rgba(177, 177, 177, 0.2);
  border-radius: 12px;

  background-color: #fff;

  width: 100%;
  padding: 16px;

  margin-bottom: 16px;
`;

export const NavTitle = styled.div`
  font-size: 17px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #070033;

  padding: 0 0 0 14px;
`;

export const NavItem = styled.li`
  height: auto;
  border-radius: 8px;
`;

export const Link = styled(HashLink)`
  display: flex;
  align-items: center;
  padding: 17px 24px;
  fill: #9c99ad;
  :hover,
  :focus {
    background-color: #f7f7f7;
    border-radius: 8px;
    fill: #4e33ff;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 67px;
  margin-bottom: 38.67px;
  height: 94px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SocialWrapper = styled.div`
  width: 80px;
  height: 32px;
`;

export const ButtonWrapper = styled.div`
  height: 43px;
  margin-bottom: 8px;
`;
