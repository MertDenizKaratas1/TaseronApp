import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: '#fff',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Typography variant="body2" sx={{ color: '#6C757D', marginRight: 2 }}>
        Company
      </Typography>
      <Typography variant="body2" sx={{ color: '#6C757D', marginRight: 2 }}>
        About Us
      </Typography>
      <Typography variant="body2" sx={{ color: '#6C757D', marginRight: 2 }}>
        Team
      </Typography>
      <Typography variant="body2" sx={{ color: '#6C757D', marginRight: 2 }}>
        Products
      </Typography>
      <Typography variant="body2" sx={{ color: '#6C757D', marginRight: 2 }}>
        Blog
      </Typography>
      <Typography variant="body2" sx={{ color: '#6C757D' }}>
        Pricing
      </Typography>
    </Box>
  );
};

export default Footer;
