import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function Login() {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const login = info => {
    dispatch(loginUser(info));
  };
  useEffect(() => {
    error && Notify.failure('Invalid email or password');
    if (error) {
      dispatch(resetError());
    }
  }, [error, dispatch]);

  return (
    <div>
      <LoginForm login={login} />
    </div>
  );
}
