import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

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
export const StyledNav = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
`;
