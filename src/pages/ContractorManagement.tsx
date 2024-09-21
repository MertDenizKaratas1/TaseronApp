import React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import AddIcon from '@mui/icons-material/Add';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import TextFieldsIcon from '@mui/icons-material/TextFields';
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

export interface IContractor {
  id: string,
  name: string,
  qualification: Qualification,
  manager: IUser,
  workJoin: Date,
  workLeft?: Date,
  personaImage: string
}
export enum Qualification {
  Qulification1 = 1,
  Qulification2 = 2,
  Qulification3 = 3,
}
export interface IUser {
  id: string,
  name: string
}

const dummyEmployers: IContractor[] = [
  { id: '1', name: 'John Doe', qualification: Qualification.Qulification1, manager: { id: '101', name: 'Manager A' }, workJoin: new Date('2021-06-15'), personaImage: 'https://example.com/image1.jpg' },
  { id: '2', name: 'Jane Smith', qualification: Qualification.Qulification2, manager: { id: '102', name: 'Manager B' }, workJoin: new Date('2020-03-20'), workLeft: new Date('2023-04-01'), personaImage: 'https://example.com/image2.jpg' },
  { id: '3', name: 'Mark Johnson', qualification: Qualification.Qulification3, manager: { id: '103', name: 'Manager C' }, workJoin: new Date('2019-07-10'), personaImage: 'https://example.com/image3.jpg' },
  { id: '4', name: 'Emily Brown', qualification: Qualification.Qulification2, manager: { id: '101', name: 'Manager A' }, workJoin: new Date('2022-01-05'), personaImage: 'https://example.com/image4.jpg' },
  { id: '5', name: 'Michael Davis', qualification: Qualification.Qulification1, manager: { id: '104', name: 'Manager D' }, workJoin: new Date('2021-12-25'), personaImage: 'https://example.com/image5.jpg' },
  { id: '6', name: 'Sarah Wilson', qualification: Qualification.Qulification3, manager: { id: '102', name: 'Manager B' }, workJoin: new Date('2020-08-17'), personaImage: 'https://example.com/image6.jpg' },
  { id: '7', name: 'David Martinez', qualification: Qualification.Qulification2, manager: { id: '105', name: 'Manager E' }, workJoin: new Date('2018-11-10'), workLeft: new Date('2022-05-20'), personaImage: 'https://example.com/image7.jpg' },
  { id: '8', name: 'Sophia Garcia', qualification: Qualification.Qulification1, manager: { id: '106', name: 'Manager F' }, workJoin: new Date('2023-03-12'), personaImage: 'https://example.com/image8.jpg' },
  { id: '9', name: 'James Miller', qualification: Qualification.Qulification2, manager: { id: '107', name: 'Manager G' }, workJoin: new Date('2020-09-23'), personaImage: 'https://example.com/image9.jpg' },
  { id: '10', name: 'Olivia Rodriguez', qualification: Qualification.Qulification3, manager: { id: '101', name: 'Manager A' }, workJoin: new Date('2021-05-30'), personaImage: 'https://example.com/image10.jpg' }
];

const sheetStyle = { width: '80vw', height: '80vh', borderRadius: 'md', p: 3, boxShadow: 'lg' }

const ContractorManagement = () => {
  const [isOpenTextModal, setisOpenTextModal] = React.useState<boolean>(false);
  const [isOpenPlusModal, setisOpenPlusModal] = React.useState<boolean>(false);
  const [isOpenFileModal, setisOpenFileModal] = React.useState<boolean>(false);


  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Contractor Management
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Box>
          <Typography>
            Taşeron İsmi : A firması
          </Typography>
          <Typography>Başlangıç  Tarihi: 20.03.2024 </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px',gap:'4px' }}>
          <Button variant="outlined" onClick={() => setisOpenPlusModal(true)}>
            <AddIcon />
          </Button>
          <Button variant="outlined" onClick={() => setisOpenFileModal(true)}>
            <FolderOpenIcon />
          </Button>
          <Button variant="outlined" onClick={() => setisOpenTextModal(true)}>
            <TextFieldsIcon />
          </Button>
        </Box>
      </Box>
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
        </Box>
      </Box>

      {/* Table Container */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">Expertise</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyEmployers.map((employe, index) => (
              <TableRow key={index}>
                <TableCell>{employe.name}</TableCell>
                <TableCell align="right">{employe.manager.name}</TableCell>
                <TableCell align="right">{employe.qualification}</TableCell>
                <TableCell align="right">{employe.workJoin.toString()}</TableCell>
                <TableCell align="center">
                  {/* Action Buttons */}
                  <IconButton aria-label="view details" size="small" sx={{ marginRight: '5px' }}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton aria-label="edit" size="small" sx={{ marginRight: '5px' }}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpenTextModal}
        onClose={() => setisOpenTextModal(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={sheetStyle}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography>
            Text Modal
          </Typography>
        </Sheet>
      </Modal>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpenPlusModal}
        onClose={() => setisOpenPlusModal(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={sheetStyle}

        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography>
            Plus Modal
          </Typography>
        </Sheet>
      </Modal>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpenFileModal}
        onClose={() => setisOpenFileModal(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={sheetStyle}

        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography>
            FİLE MODAL
          </Typography>
        </Sheet>
      </Modal>
    </Box>
  );
};

export default ContractorManagement;
