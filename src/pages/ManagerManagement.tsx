import React from 'react';
import { Avatar, Box, Button, Card, CardContent, Grid, Typography, Chip } from '@mui/material';
import { Edit } from '@mui/icons-material';

const ManagerManagement = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Profile Section */}
        <Grid item xs={12} md={12}>
          <Card sx={{ padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  alt="Rosa Dodson"
                  src="/path-to-your-image"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Rosa Dodson
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  UI/UX Designer, USA
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button variant="contained" color="success" sx={{ marginRight: '10px' }}>
                  Follow
                </Button>
                <Button variant="outlined">Hire Me</Button>
              </Grid>
              <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">75 Projects</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  68% Success Rate
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">Earnings</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  $8620
                </Typography>
              </Grid>
              <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">Completion</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      border: '6px solid #4CAF50',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontWeight: 'bold',
                      }}
                    >
                      67%
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Personal Information Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Personal Information</Typography>
              <Button variant="text" startIcon={<Edit />}>
                Edit
              </Button>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
              <Chip label="Javascript" sx={{ marginRight: '5px' }} />
              <Chip label="Python" sx={{ marginRight: '5px' }} />
              <Chip label="Angular" sx={{ marginRight: '5px' }} />
              <Chip label="Reactjs" sx={{ marginRight: '5px' }} />
            </Box>
          </Card>
        </Grid>

        {/* Other Stats Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">Activity Overview</Typography>
            <Grid container spacing={3} sx={{ marginTop: '10px' }}>
              <Grid item xs={6} md={6}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    24k
                  </Typography>
                  <Typography variant="subtitle2">Views</Typography>
                  <Typography variant="body2" color="textSecondary">
                    1500 new subscribers this week
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={6} md={6}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    24k
                  </Typography>
                  <Typography variant="subtitle2">Comments</Typography>
                  <Typography variant="body2" color="textSecondary">
                    854 new likes this week
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerManagement;
