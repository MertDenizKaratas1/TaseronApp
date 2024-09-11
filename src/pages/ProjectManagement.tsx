import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

const dummyProjects = [
  { name: 'Unity Pugh', ext: '9958', city: 'Curicó', startDate: '2005/02/11', completion: '37%' },
  { name: 'Theodore Duran', ext: '8971', city: 'Dhanbad', startDate: '1999/04/07', completion: '97%' },
  { name: 'Kylie Bishop', ext: '3147', city: 'Norman', startDate: '2005/09/08', completion: '63%' },
  { name: 'Willow Gilliam', ext: '3497', city: 'Amqui', startDate: '2009/29/11', completion: '30%' },
  { name: 'Blossom Dickerson', ext: '5018', city: 'Kempten', startDate: '2006/11/09', completion: '17%' },
  { name: 'Elliott Snyder', ext: '3925', city: 'Enines', startDate: '2006/03/08', completion: '57%' },
  { name: 'Castor Pugh', ext: '9488', city: 'Neath', startDate: '2014/23/12', completion: '93%' },
  { name: 'Pearl Carlson', ext: '6231', city: 'Cobourg', startDate: '2014/31/08', completion: '100%' },
  { name: 'Deirdre Bridges', ext: '1579', city: 'Eberswalde-Finow', startDate: '2014/26/08', completion: '44%' },
];

const ProjectManagement = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Project Management
      </Typography>

      {/* Controls above the table */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <FormControl>
          <InputLabel>Entries per page</InputLabel>
          <Select
            label="Entries per page"
            defaultValue={10}
            sx={{ width: '120px' }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            sx={{ width: '200px', marginRight: '10px' }}
          />

          {/* Create Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ height: '40px' }}
          >
            Create New Project
          </Button>
        </Box>
      </Box>

      {/* Table Container */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Ext.</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">Completion</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyProjects.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.name}</TableCell>
                <TableCell align="right">{project.ext}</TableCell>
                <TableCell align="right">{project.city}</TableCell>
                <TableCell align="right">{project.startDate}</TableCell>
                <TableCell align="right">{project.completion}</TableCell>
                <TableCell align="center">
                  {/* Action Buttons */}
                  <IconButton aria-label="view details" size="small" sx={{ marginRight: '5px' }}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton aria-label="edit" size="small" sx={{ marginRight: '5px' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="apply" size="small">
                    <CheckCircleIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectManagement;
