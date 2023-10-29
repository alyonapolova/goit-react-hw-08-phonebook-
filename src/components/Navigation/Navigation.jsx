import { PermanentMenu, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <PermanentMenu>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </PermanentMenu>
  );
};
