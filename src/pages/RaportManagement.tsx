import React from 'react';
import { Box, Card, Typography, Grid, Avatar, Button, AvatarGroup } from '@mui/material';
import { AccessTime, TrendingUp, PeopleAlt } from '@mui/icons-material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const audienceData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 80 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 70 },
  { name: 'May', value: 100 },
  { name: 'Jun', value: 90 },
  { name: 'Jul', value: 110 },
  { name: 'Aug', value: 95 },
  { name: 'Sep', value: 85 },
  { name: 'Oct', value: 100 },
  { name: 'Nov', value: 120 },
  { name: 'Dec', value: 130 },
];

const visitorData = [
  { day: 'Sun', visitors: 200 },
  { day: 'Mon', visitors: 300 },
  { day: 'Tue', visitors: 450 },
  { day: 'Wed', visitors: 600 },
  { day: 'Thu', visitors: 500 },
  { day: 'Fri', visitors: 650 },
  { day: 'Sat', visitors: 400 },
];

const ReportManagement = () => {
  // Dummy data for audience overview
  const audienceOverview = {
    sessions: '24k',
    newSessions: '8.5% New Sessions Today',
    avgSessions: '00:18',
    avgSessionsWeekly: '1.5% Weekly Avg. Sessions',
    bounceRate: '36.45%',
    bounceRateWeekly: '8% Up Bounce Rate Weekly',
  };

  // Dummy data for visitors
  const newVisitors = [
    { name: 'Visitor 1', src: '/visitor1.jpg' },
    { name: 'Visitor 2', src: '/visitor2.jpg' },
    { name: 'Visitor 3', src: '/visitor3.jpg' },
    { name: 'Visitor 4', src: '/visitor4.jpg' },
    { name: 'Visitor 5', src: '/visitor5.jpg' },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Report Management
      </Typography>

      {/* Top Metrics */}
      <Grid container spacing={3}>
        {/* Sessions */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="subtitle1">Sessions</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{audienceOverview.sessions}</Typography>
              <Typography variant="body2" sx={{ color: 'green' }}>{audienceOverview.newSessions}</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#f5f5f5' }}>
              <TrendingUp />
            </Avatar>
          </Card>
        </Grid>

        {/* Avg. Sessions */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="subtitle1">Avg. Sessions</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{audienceOverview.avgSessions}</Typography>
              <Typography variant="body2" sx={{ color: 'green' }}>{audienceOverview.avgSessionsWeekly}</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#f5f5f5' }}>
              <AccessTime />
            </Avatar>
          </Card>
        </Grid>

        {/* Bounce Rate */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="subtitle1">Bounce Rate</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{audienceOverview.bounceRate}</Typography>
              <Typography variant="body2" sx={{ color: 'red' }}>{audienceOverview.bounceRateWeekly}</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#f5f5f5' }}>
              <PeopleAlt />
            </Avatar>
          </Card>
        </Grid>
      </Grid>

      {/* Audience Overview & New Visitors */}
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        {/* Audience Overview */}
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">Audience Overview</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2">$50k</Typography>
              <Button variant="outlined" size="small">This Year</Button>
            </Box>
            {/* Line Chart for Audience Overview */}
            <Box sx={{ marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={audienceData}>
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

        {/* New Visitors */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">New Visitors</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1,282</Typography>
              <AvatarGroup
                max={4}
                sx={{
                  marginLeft: 'auto',
                  '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
                }}
              >
                {newVisitors.map((visitor, index) => (
                  <Avatar key={index} alt={visitor.name} src={visitor.src} />
                ))}
              </AvatarGroup>
            </Box>
            {/* Bar Chart for Visitors */}
            <Box sx={{ marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={visitorData}>
                  <Bar dataKey="visitors" fill="#8884d8" />
                  <XAxis dataKey="day" />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportManagement;
