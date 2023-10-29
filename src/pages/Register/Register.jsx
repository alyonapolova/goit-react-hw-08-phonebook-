import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/auth/authSlice';
import { registerUser } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

export default function Register() {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  const registration = info => {
    dispatch(registerUser(info));
  };
  useEffect(() => {
    error && Notify.warning('You have already registered. Please log in');
    if (error) {
      dispatch(resetError());
    }
  }, [error, dispatch]);
  return (
    <div>
      <RegisterForm registration={registration} />
    </div>
  );
}
