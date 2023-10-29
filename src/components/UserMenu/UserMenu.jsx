import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import Avatar from '@mui/material/Avatar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {
  StyledLink,
  StyledName,
  StyledNav,
  StyledUser,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <StyledNav>
      <StyledUser>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PermIdentityIcon />
        </Avatar>
        <StyledName>Hi, {user.name}!</StyledName>
      </StyledUser>
      <StyledLink onClick={() => dispatch(logOutUser())}>LogOut</StyledLink>
    </StyledNav>
  );
};
