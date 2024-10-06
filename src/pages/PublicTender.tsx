import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
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
    Button,
} from '@mui/material';
import { Margin } from '@mui/icons-material';
export interface ITender {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: TenderStatus;
    responsiblePerson: IUser;
}

export enum TenderStatus {
    Active = "active",
    Ended = "ended",
}

export interface IUser {
    id: string;
    name: string;
    contact: IContact;
    personaImage: string;
}

export interface IContact {
    phone: string;
    email: string;
}

const tenderDummyData: ITender[] = [
    { id: '1', name: 'Construction Project A', description: 'Building a new residential area.', startDate: new Date('2023-01-15'), endDate: new Date('2023-12-01'), status: TenderStatus.Active, responsiblePerson: { id: '101', name: 'John Doe', contact: { phone: '555-1234', email: 'john@example.com' }, personaImage: 'https://example.com/john.jpg' } },
    { id: '2', name: 'Bridge Renovation B', description: 'Renovating the city bridge.', startDate: new Date('2022-06-10'), endDate: new Date('2023-03-22'), status: TenderStatus.Ended, responsiblePerson: { id: '102', name: 'Jane Smith', contact: { phone: '555-5678', email: 'jane@example.com' }, personaImage: 'https://example.com/jane.jpg' } },
    { id: '3', name: 'School Construction C', description: 'Building a new school.', startDate: new Date('2023-04-01'), endDate: new Date('2024-04-01'), status: TenderStatus.Active, responsiblePerson: { id: '103', name: 'Mark Johnson', contact: { phone: '555-9876', email: 'mark@example.com' }, personaImage: 'https://example.com/mark.jpg' } },
    { id: '4', name: 'Highway Expansion D', description: 'Expanding the main highway.', startDate: new Date('2023-02-20'), endDate: new Date('2023-11-15'), status: TenderStatus.Active, responsiblePerson: { id: '104', name: 'Emily Brown', contact: { phone: '555-4321', email: 'emily@example.com' }, personaImage: 'https://example.com/emily.jpg' } },
    { id: '5', name: 'Airport Upgrade E', description: 'Upgrading the international airport.', startDate: new Date('2021-09-01'), endDate: new Date('2023-05-30'), status: TenderStatus.Ended, responsiblePerson: { id: '105', name: 'Michael Davis', contact: { phone: '555-2468', email: 'michael@example.com' }, personaImage: 'https://example.com/michael.jpg' } },
];

const sheetStyle = { width: '30vw', height: '40vh', borderRadius: 'md', p: 3, boxShadow: 'lg' };

const PublicTender = () => {
    const [isOpenDetailModal, setIsOpenDetailModal] = useState<boolean>(false);
    const [selectedTender, setSelectedTender] = useState<ITender | null>(null);
    const [isOpenContactModal, setIsOpenContactModal] = useState<boolean>(false);

    const handleRowClick = (tender: ITender) => {
        setSelectedTender(tender);
        setIsOpenDetailModal(true);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Public Tender
            </Typography>

            {/* Table Controls */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <FormControl>
                    <InputLabel>Entries per page</InputLabel>
                    <Select label="Entries per page" defaultValue={10} sx={{ width: '120px' }}>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    sx={{ width: '200px', marginRight: '10px' }}
                />
            </Box>

            {/* Table Container */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Start Date</TableCell>
                            <TableCell align="right">End Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="center">Persona Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tenderDummyData.map((tender, index) => (
                            <TableRow key={index} onClick={() => handleRowClick(tender)} hover>
                                <TableCell>{tender.name}</TableCell>
                                <TableCell align="right">{tender.description}</TableCell>
                                <TableCell align="right">{tender.startDate.toDateString()}</TableCell>
                                <TableCell align="right">{tender.endDate.toDateString()}</TableCell>
                                <TableCell align="right">{tender.status}</TableCell>
                                <TableCell align="right">{tender.responsiblePerson.personaImage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Tender Detail Modal */}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={isOpenDetailModal}
                onClose={() => setIsOpenDetailModal(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet variant="outlined" sx={sheetStyle}>
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    {selectedTender && (
                        <Box>
                            <Typography id="modal-title" variant="h6" component="h2">
                                {selectedTender.name}
                            </Typography>
                            <Typography id="modal-desc" sx={{ mt: 2 }}>
                                <strong>Description: </strong>{selectedTender.description}
                            </Typography>
                            <Typography>
                                <strong>Start Date: </strong>{selectedTender.startDate.toDateString()}
                            </Typography>
                            <Typography>
                                <strong>End Date: </strong>{selectedTender.endDate.toDateString()}
                            </Typography>
                            <Typography>
                                <strong>Status: </strong>{selectedTender.status}
                            </Typography>
                            <Typography>
                                <strong>Responsible Person: </strong>{selectedTender.responsiblePerson.name}
                            </Typography>
                            <Typography>
                                <strong>Contact: </strong>{selectedTender.responsiblePerson.contact.email} | {selectedTender.responsiblePerson.contact.phone}
                            </Typography>
                            <Box sx={{ marginTop: '10px' , display:'flex'           ,gap:'12px' }}>
                                <Button variant='outlined' onClick={() => setIsOpenContactModal(true)}>Contact us</Button>
                                {
                                selectedTender.status === TenderStatus.Active && <Button variant='outlined' onClick={() => setIsOpenContactModal(true)}>Join Tender</Button>
                                }

                            </Box>
                        </Box>
                    )}
                </Sheet>
            </Modal>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={isOpenContactModal}
                onClose={() => setIsOpenContactModal(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={sheetStyle}

                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    {selectedTender && (
                        <Box>
                            <Typography>
                                <strong>Responsible Person: </strong>{selectedTender.responsiblePerson.name}
                            </Typography>
                            <Typography>
                                <strong>Contact: </strong>{selectedTender.responsiblePerson.contact.email} | {selectedTender.responsiblePerson.contact.phone}
                            </Typography>
                        </Box>
                    )}
                </Sheet>
            </Modal>
        </Box>
    );
};

export default PublicTender;
