import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Username" variant="outlined" />
      <TextField label="Password" variant="outlined" type="password" />
      <TextField label="Email" variant="outlined" type="email" />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
