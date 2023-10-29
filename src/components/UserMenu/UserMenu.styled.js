import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
`;
export const StyledName = styled.p`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 0;
`;
export const StyledUser = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
