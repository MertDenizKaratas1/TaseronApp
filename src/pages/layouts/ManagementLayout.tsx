import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Alert, Box, Typography } from '@mui/material';

const ManagementLayout = () => {
    return (
      <Box sx={{ padding: '20px' }}>
        {/* Warning Message */}
        <Alert
          severity="warning"
          action={
            <Link to="/help" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
              Learn More
            </Link>
          }
          sx={{ marginBottom: '20px' }}
        >
          You are in the Management section. If you're unsure about this, click the "Learn More" link for more details.
        </Alert>
        {/* Outlet to render nested routes */}
        <Outlet />
      </Box>
    );
};

export default ManagementLayout;
