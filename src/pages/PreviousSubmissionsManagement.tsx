import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  Typography,
  Box,
} from '@mui/material';


export interface ISubmission {
  id: string,
  name: string,
  status: SubmissionStatus,
  startDate: Date,
  endDate: Date,
  Company: ICompany
}
export enum SubmissionStatus {
  Draft = 1,
  WaitingAdminApproval = 2,
  NegotiationStarted = 3,
  Approved = 4,
  Completed = 5,
  Cancelled = 6,
  Pending = 7,
}
export interface ICompany {
  id: string,
  name: string
}

const rows: ISubmission[] = [
  { id: "1", name: "Proje A", status: SubmissionStatus.Draft, startDate: new Date("2024-01-01"), endDate: new Date("2024-03-31"), Company: { id: "C1", name: "Şirket X" } },
  { id: "2", name: "Proje B", status: SubmissionStatus.WaitingAdminApproval, startDate: new Date("2024-02-15"), endDate: new Date("2024-05-15"), Company: { id: "C2", name: "Şirket Y" } },
  { id: "3", name: "Proje C", status: SubmissionStatus.NegotiationStarted, startDate: new Date("2024-03-01"), endDate: new Date("2024-06-30"), Company: { id: "C3", name: "Şirket Z" } },
  { id: "4", name: "Proje D", status: SubmissionStatus.Approved, startDate: new Date("2024-04-01"), endDate: new Date("2024-07-31"), Company: { id: "C4", name: "Şirket W" } },
  { id: "5", name: "Proje E", status: SubmissionStatus.Completed, startDate: new Date("2024-01-15"), endDate: new Date("2024-04-15"), Company: { id: "C5", name: "Şirket V" } },
  { id: "6", name: "Proje F", status: SubmissionStatus.Cancelled, startDate: new Date("2024-05-01"), endDate: new Date("2024-08-31"), Company: { id: "C6", name: "Şirket U" } },
  { id: "7", name: "Proje G", status: SubmissionStatus.Pending, startDate: new Date("2024-06-15"), endDate: new Date("2024-09-15"), Company: { id: "C7", name: "Şirket T" } },
  { id: "8", name: "Proje H", status: SubmissionStatus.Draft, startDate: new Date("2024-07-01"), endDate: new Date("2024-10-31"), Company: { id: "C8", name: "Şirket S" } },
  { id: "9", name: "Proje I", status: SubmissionStatus.WaitingAdminApproval, startDate: new Date("2024-08-15"), endDate: new Date("2024-11-15"), Company: { id: "C9", name: "Şirket R" } },
  { id: "10", name: "Proje J", status: SubmissionStatus.NegotiationStarted, startDate: new Date("2024-09-01"), endDate: new Date("2024-12-31"), Company: { id: "C10", name: "Şirket Q" } }
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'startDate', headerName: 'Start Date',type:'date' , width: 130 },
  { field: 'endDate', headerName: 'End Date',type:'date' , width: 130 },
  { field: 'Company', headerName: 'Company', width: 130, valueFormatter: (Company: ICompany) => Company.name },
  { field: 'status', headerName: 'Status', width: 240, valueFormatter: (status: SubmissionStatus) => SubmissionStatus[status] },

];

const paginationModel = { page: 0, pageSize: 5 };
const PreviousSubmissionsManagement = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Previous Submissions
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Box>
  );
};

export default PreviousSubmissionsManagement;
