import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const defaultTheme = createTheme();
const EditContactForm = ({ contact, onUpdate }) => {
  const [updatedInfo, setUpdatedInfo] = useState({
    name: contact.name || '',
    number: contact.number || '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUpdatedInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(updatedInfo);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            type="text"
            name="name"
            value={updatedInfo.name}
            onChange={handleInputChange}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            type="text"
            name="number"
            value={updatedInfo.number}
            onChange={handleInputChange}
            margin="normal"
            required
            fullWidth
            label="Number"
            id="number"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 0.5 }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditContactForm;
