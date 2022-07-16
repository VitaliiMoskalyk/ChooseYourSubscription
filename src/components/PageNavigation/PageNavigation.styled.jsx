import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 1.5;
`;

export const NavigationTitle = styled.p`
  margin: 6px 0;
`;

export const NavigationItem = styled(HashLink)`
  color: inherit;
`;
