import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Card,
  CardContent,
  Grid,
  Button
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import ReportIcon from '@mui/icons-material/Report';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const steps = ['User Registration', 'Project Management', 'Contractor Management', 'Reporting', 'Notifications'];

const Dashboard = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Welcome to the Taseron Roadmap
      </Typography>

      {/* Stepper to Show Roadmap */}
      <Stepper alternativeLabel sx={{ marginBottom: '30px' }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Details of Each Step in the Roadmap */}
      <Grid container spacing={3}>
        {/* User Registration */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <AccountCircleIcon sx={{ fontSize: 40, color: '#007BFF' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                User Registration
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Start by registering an account. This will allow you to create, manage, and track projects and contractors.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '15px' }}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Project Management */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <BuildIcon sx={{ fontSize: 40, color: '#FFC107' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Project Management
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Create and manage your projects. Assign contractors, track progress, and update project details.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '15px' }}>
                Manage Projects
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Contractor Management */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <DashboardIcon sx={{ fontSize: 40, color: '#28A745' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Contractor Management
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Manage contractors for your projects. Add, update, and track contractor performance.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '15px' }}>
                Manage Contractors
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Reporting */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <ReportIcon sx={{ fontSize: 40, color: '#DC3545' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Reporting and Analytics
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Generate detailed reports on project performance, contractor success rates, and other key metrics.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '15px' }}>
                View Reports
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <NotificationsActiveIcon sx={{ fontSize: 40, color: '#6F42C1' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Notifications
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Stay updated with real-time notifications on important events such as project updates and new bids.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '15px' }}>
                View Notifications
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
