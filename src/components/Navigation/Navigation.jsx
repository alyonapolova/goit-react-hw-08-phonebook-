import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { PermanentMenu } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <PermanentMenu>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </PermanentMenu>
  );
};
