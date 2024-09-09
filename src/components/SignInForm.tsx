import React from 'react';
import { Box, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: '#007BFF', fontWeight: 'bold' }}>
        Welcome back
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px', color: '#6C757D' }}>
        Enter your email and password to sign in
      </Typography>

      <TextField fullWidth label="Email" margin="normal" required />
      <TextField fullWidth label="Password" margin="normal" type="password" required />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Remember me"
        sx={{ marginBottom: 2 }}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#007BFF', padding: '10px 0', marginBottom: 2 }}
        onClick={handleSignIn}
      >
        Sign In
      </Button>
      <Typography variant="body2" sx={{ textAlign: 'center', color: '#6C757D' }}>
        Don't have an account?{' '}
        <a href="/signup" style={{ color: '#007BFF', textDecoration: 'none' }}>
          Sign up
        </a>
      </Typography>
    </Box>
  );
};

export default SignInForm;
