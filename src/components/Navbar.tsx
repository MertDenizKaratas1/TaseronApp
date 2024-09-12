import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, Collapse, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Pages } from '../types/enums';
import logo from '../assets/logo2.png';

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState<string>(Pages.ReportPage);
    const [isManagementOpen, setIsManagementOpen] = useState<boolean>(false);

    const handleSelect = (item: string) => {
        setSelectedItem(item);
    };

    const handleToggleManagement = () => {
        setIsManagementOpen((prevOpen) => !prevOpen);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 250,
                    boxSizing: 'border-box',
                    backgroundColor: '#f8f9fa',
                },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                {/* Logo Section */}
                <Box sx={{ marginBottom: '20px' }}>
                    <img src={logo} alt="Logo" width={100} height={30} />
                </Box>

                {/* Menu Items */}
                <List sx={{ width: '100%' }}>
                    {/* Management Section Header */}
                    <ListItemButton onClick={handleToggleManagement}>
                        <ListItemIcon>
                            <DashboardIcon sx={{ color: '#6C757D' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Management"
                            sx={{
                                color: '#6C757D',
                                fontWeight: 'bold',
                            }}
                        />
                        {isManagementOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    {/* Collapsible Section for Management Items */}
                    <Collapse in={isManagementOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                component={Link}
                                to="/management/report"
                                onClick={() => handleSelect(Pages.ReportPage)}
                                sx={{
                                    pl: 4,
                                    marginBottom: '10px',
                                    backgroundColor: selectedItem === Pages.ReportPage ? '#f0f0f0' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <TableChartIcon sx={{ color: selectedItem === Pages.ReportPage ? '#D63384' : '#6C757D' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Report Page"
                                    sx={{
                                        color: selectedItem === Pages.ReportPage ? '#000' : '#6C757D',
                                        fontWeight: selectedItem === Pages.ReportPage ? 'bold' : 'normal',
                                    }}
                                />
                            </ListItem>

                            <ListItem
                                component={Link}
                                to="/management/manager"
                                onClick={() => handleSelect(Pages.ManagerPage)}
                                sx={{
                                    pl: 4,
                                    marginBottom: '10px',
                                    backgroundColor: selectedItem === Pages.ManagerPage ? '#f0f0f0' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <ReceiptIcon sx={{ color: selectedItem === Pages.ManagerPage ? '#D63384' : '#6C757D' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Manager"
                                    sx={{
                                        color: selectedItem === Pages.ManagerPage ? '#000' : '#6C757D',
                                        fontWeight: selectedItem === Pages.ManagerPage ? 'bold' : 'normal',
                                    }}
                                />
                            </ListItem>

                            <ListItem
                                component={Link}
                                to="/management/project"
                                onClick={() => handleSelect(Pages.ProjectPage)}
                                sx={{
                                    pl: 4,
                                    marginBottom: '10px',
                                    backgroundColor: selectedItem === Pages.ProjectPage ? '#f0f0f0' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <DashboardIcon sx={{ color: selectedItem === Pages.ProjectPage ? '#D63384' : '#6C757D' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Project"
                                    sx={{
                                        color: selectedItem === Pages.ProjectPage ? '#000' : '#6C757D',
                                        fontWeight: selectedItem === Pages.ProjectPage ? 'bold' : 'normal',
                                    }}
                                />
                            </ListItem>
                            <ListItem
                                component={Link}
                                to="/management/offer"
                                onClick={() => handleSelect(Pages.OfferPage)}
                                sx={{
                                    pl: 4,
                                    marginBottom: '10px',
                                    backgroundColor: selectedItem === Pages.OfferPage ? '#f0f0f0' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <DashboardIcon sx={{ color: selectedItem === Pages.OfferPage ? '#D63384' : '#6C757D' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Offer"
                                    sx={{
                                        color: selectedItem === Pages.OfferPage ? '#000' : '#6C757D',
                                        fontWeight: selectedItem === Pages.OfferPage ? 'bold' : 'normal',
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    );
};

export default Navbar;
