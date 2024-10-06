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

export interface ICompany {
    id: string;
    name: string;
    description: string;
    resources: IResource[];
}
export interface IResource {
    id: string;
    name: string;
    description: string;
    status: ResourceStatus;
    requiredSkills: string[];
    startDate: Date;
    endDate: Date;
    contactPerson: IUser;
    neededQuantity: number;
}
export enum ResourceStatus {
    Open = "open",
    Closed = "closed",
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

const companyDummyData: ICompany[] = [
    { id: '1', name: 'Company A', description: 'Tech solutions', resources: [{ id: 'r1', name: 'Server', description: 'Cloud server', status: ResourceStatus.Open, requiredSkills: ['AWS'], startDate: new Date('2023-01-01'), endDate: new Date('2023-12-31'), contactPerson: { id: 'u1', name: 'John Doe', contact: { phone: '555-1234', email: 'john@example.com' }, personaImage: '' }, neededQuantity: 5 }] },
    { id: '2', name: 'Company B', description: 'Construction', resources: [{ id: 'r2', name: 'Cement', description: 'High quality', status: ResourceStatus.Closed, requiredSkills: ['Material Handling'], startDate: new Date('2023-05-01'), endDate: new Date('2023-09-30'), contactPerson: { id: 'u2', name: 'Jane Smith', contact: { phone: '555-5678', email: 'jane@example.com' }, personaImage: '' }, neededQuantity: 100 }] },
    { id: '5', name: 'Company E', description: 'Healthcare', resources: [{ id: 'r5', name: 'Medical Supplies', description: 'Surgical equipment', status: ResourceStatus.Closed, requiredSkills: ['Medical'], startDate: new Date('2023-02-01'), endDate: new Date('2023-12-31'), contactPerson: { id: 'u5', name: 'Sarah Davis', contact: { phone: '555-2468', email: 'sarah@example.com' }, personaImage: '' }, neededQuantity: 50 }] },
    { id: '6', name: 'Company F', description: 'Manufacturing', resources: [{ id: 'r6', name: 'Machinery', description: 'Industrial machines', status: ResourceStatus.Open, requiredSkills: ['Mechanical'], startDate: new Date('2023-07-01'), endDate: new Date('2024-01-01'), contactPerson: { id: 'u6', name: 'Michael Lee', contact: { phone: '555-1357', email: 'michael@example.com' }, personaImage: '' }, neededQuantity: 30 }] },
    { id: '7', name: 'Company G', description: 'Retail', resources: [{ id: 'r7', name: 'POS System', description: 'Point of sale systems', status: ResourceStatus.Closed, requiredSkills: ['Retail Tech'], startDate: new Date('2023-03-01'), endDate: new Date('2023-08-31'), contactPerson: { id: 'u7', name: 'David White', contact: { phone: '555-8642', email: 'david@example.com' }, personaImage: '' }, neededQuantity: 15 }] },
    { id: '8', name: 'Company H', description: 'Finance', resources: [{ id: 'r8', name: 'Data Analysts', description: 'Financial data analysis', status: ResourceStatus.Open, requiredSkills: ['Data Science'], startDate: new Date('2023-09-01'), endDate: new Date('2024-05-01'), contactPerson: { id: 'u8', name: 'Sophia Johnson', contact: { phone: '555-7531', email: 'sophia@example.com' }, personaImage: '' }, neededQuantity: 7 }] },
    { id: '9', name: 'Company I', description: 'Automotive', resources: [{ id: 'r9', name: 'Engineers', description: 'Automotive engineers', status: ResourceStatus.Open, requiredSkills: ['Engineering'], startDate: new Date('2023-08-01'), endDate: new Date('2024-03-01'), contactPerson: { id: 'u9', name: 'James Miller', contact: { phone: '555-3698', email: 'james@example.com' }, personaImage: '' }, neededQuantity: 25 }] },
    { id: '10', name: 'Company J', description: 'Energy', resources: [{ id: 'r10', name: 'Solar Panels', description: 'Energy solutions', status: ResourceStatus.Closed, requiredSkills: ['Renewable Energy'], startDate: new Date('2022-10-01'), endDate: new Date('2023-12-01'), contactPerson: { id: 'u10', name: 'Olivia Rodriguez', contact: { phone: '555-2587', email: 'olivia@example.com' }, personaImage: '' }, neededQuantity: 100 }] }
];

const sheetStyle = { width: '40vw', height: '50vh', borderRadius: 'md', p: 3, boxShadow: 'lg' };

const SearchCompanyResources = () => {
    const [isOpenDetailModal, setIsOpenDetailModal] = useState<boolean>(false);
    const [isOpenDetailResourceModal, setIsOpenDetailResourceModal] = useState<boolean>(false);
    const [selectedCompany, setSelectedCompany] = useState<ICompany | null>(null);
    const [selectedResource, setSelectedResource] = useState<IResource | null>(null);

    const handleRowClick = (company: ICompany) => {
        setSelectedCompany(company);
        setIsOpenDetailModal(true);
    };

    const handleDetailsClick = (resource: IResource) => {
        setSelectedResource(resource);
        setIsOpenDetailResourceModal(true);
    };


    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Search Company Resources
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companyDummyData.map((company) => (
                            <TableRow key={company.id} onClick={() => handleRowClick(company)} hover>
                                <TableCell>{company.name}</TableCell>
                                <TableCell align="right">{company.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Company Resources Modal */}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={isOpenDetailModal}
                onClose={() => setIsOpenDetailModal(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet variant="outlined" sx={sheetStyle}>
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    {selectedCompany && (
                        <Box>
                            <Typography id="modal-title" variant="h6" component="h2">
                                {selectedCompany.name}
                            </Typography>
                            <Typography id="modal-desc" sx={{ mt: 2 }}>
                                <strong>Description: </strong>{selectedCompany.description}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Resources:</strong>
                            </Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Resource Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {selectedCompany.resources.map((resource) => (
                                        <TableRow key={resource.id}>
                                            <TableCell>{resource.name}</TableCell>
                                            <TableCell>{resource.description}</TableCell>
                                            <TableCell>{resource.status === ResourceStatus.Open ? 'Aranıyor' : 'Tamamlandı'}</TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        size="small"
                                                        sx={{
                                                            minWidth: '5px',
                                                            padding: '4px 8px',
                                                            minHeight: '30px',
                                                            lineHeight: '1.2'
                                                        }}
                                                        onClick={() => handleDetailsClick(resource)} // Detaylar butonuna tıklandığında
                                                    >
                                                        Detaylar
                                                    </Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    )}
                </Sheet>
            </Modal>

            {/* Resource Details Modal */}
            <Modal
                aria-labelledby="resource-modal-title"
                aria-describedby="resource-modal-desc"
                open={isOpenDetailResourceModal}
                onClose={() => setIsOpenDetailResourceModal(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet variant="outlined" sx={sheetStyle}>
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    {selectedResource && (
                        <Box>
                            <Typography id="resource-modal-title" variant="h6" component="h2">
                                {selectedResource.name}
                            </Typography>
                            <Typography id="resource-modal-desc" sx={{ mt: 2 }}>
                                <strong>Açıklama: </strong>{selectedResource.description}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Gereken Nitelikler:</strong> {selectedResource.requiredSkills.join(', ')}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Başlangıç Tarihi:</strong> {selectedResource.startDate.toLocaleDateString()}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Bitiş Tarihi:</strong> {selectedResource.endDate.toLocaleDateString()}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Sorumlu Kişi:</strong> {selectedResource.contactPerson.name}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>İletişim Bilgileri:</strong> {selectedResource.contactPerson.contact.phone}, {selectedResource.contactPerson.contact.email}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Durum:</strong> {selectedResource.status === ResourceStatus.Open ? 'Aranıyor' : 'Tamamlandı'}
                            </Typography>
                            {selectedResource.status === ResourceStatus.Open && (
                                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                                    Başvuru Yap
                                </Button>
                            )}
                        </Box>
                    )}
                </Sheet>
            </Modal>
        </Box>
    );
};

export default SearchCompanyResources;