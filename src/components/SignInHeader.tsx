import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon, Lock as LockIcon } from '@mui/icons-material';
import logo from '../assets/logo2.png';

const SignInHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#fff',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', 
        borderRadius: '12px', 
        marginTop: '20px',
        marginX: 'auto',
        width: '90%',
      }}
    >
      {/* Left - Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
         <img src={logo} alt="Logo" width={100} height={30} />
      </Box>

      {/* Middle - Navigation */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          color: '#6C757D',
          fontSize: '16px',
        }}
      >
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', color: '#6C757D' }}>
          <DashboardIcon sx={{ marginRight: '5px' }} />
          Dashboard
        </Box>
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', color: '#6C757D' }}>
          <PersonIcon sx={{ marginRight: '5px' }} />
          Profile
        </Box>
        <Box component="a" href="/signup" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', color: '#6C757D' }}>
          <LockIcon sx={{ marginRight: '5px' }} />
          Sign Up
        </Box>
        <Box component="a" href="/signin" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', color: '#6C757D' }}>
          <LockIcon sx={{ marginRight: '5px' }} />
          Sign In
        </Box>
      </Box>

      {/* Right - Buttons */}
      <Box>
        <Button
          variant="contained"
          sx={{
            marginRight: '10px',
            backgroundColor: '#D63384',
            color: '#fff',
            borderRadius: '25px',
            padding: '10px 20px',
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#e6006f',
            },
          }}
        >
          Online Builder
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: '#343a40',
            borderColor: '#343a40',
            borderRadius: '25px',
            padding: '10px 20px',
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'rgba(52, 58, 64, 0.1)',
            },
          }}
        >
          Free Download
        </Button>
      </Box>
    </Box>
  );
};

export default SignInHeader;
