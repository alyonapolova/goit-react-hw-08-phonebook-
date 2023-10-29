import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const PermanentMenu = styled.div`
  display: flex;
  gap: 25px;
  margin-left: 35px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  &.active {
    color: violet;
  }

  &:hover {
    text-decoration: underline;
  }
`;
