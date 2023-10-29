import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const Filter = () => {
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Container component="main" maxWidth="xs">
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Find contacts by name"
        name="filter"
        type="text"
        autoComplete="email"
        autoFocus
        onChange={handleSetFilter}
      />
    </Container>
  );
};
export default Filter;
