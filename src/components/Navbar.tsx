import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Pages } from '../types/enums';
import logo from '../assets/logo2.png';

const Navbar = () => {

    const [selectedItem, setSelectedItem] = useState<string>(Pages.Dashboard);

    const handleSelect = (item: string) => {
        setSelectedItem(item);
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
                    <ListItem
                        component={Link}
                        to="/dashboard"
                        onClick={() => handleSelect(Pages.Dashboard)}
                        sx={{
                            marginBottom: '10px',
                            backgroundColor: selectedItem === 'dashboard' ? '#f0f0f0' : 'transparent',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <DashboardIcon sx={{ color: selectedItem === 'dashboard' ? '#D63384' : '#6C757D' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Dashboard"
                            sx={{
                                color: selectedItem === 'dashboard' ? '#000' : '#6C757D',
                                fontWeight: selectedItem === 'dashboard' ? 'bold' : 'normal',
                            }}
                        />
                    </ListItem>

                    <ListItem
                        component={Link}
                        to="/tables"
                        onClick={() => handleSelect(Pages.Tables)}
                        sx={{
                            marginBottom: '10px',
                            backgroundColor: selectedItem === 'tables' ? '#f0f0f0' : 'transparent',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <TableChartIcon sx={{ color: selectedItem === 'tables' ? '#D63384' : '#6C757D' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Tables"
                            sx={{
                                color: selectedItem === 'tables' ? '#000' : '#6C757D',
                                fontWeight: selectedItem === 'tables' ? 'bold' : 'normal',
                            }}
                        />
                    </ListItem>

                    <ListItem
                        component={Link}
                        to="/billing"
                        onClick={() => handleSelect(Pages.Billing)}
                        sx={{
                            marginBottom: '10px',
                            backgroundColor: selectedItem === 'billing' ? '#f0f0f0' : 'transparent',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <ReceiptIcon sx={{ color: selectedItem === 'billing' ? '#D63384' : '#6C757D' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Billing"
                            sx={{
                                color: selectedItem === 'billing' ? '#000' : '#6C757D',
                                fontWeight: selectedItem === 'billing' ? 'bold' : 'normal',
                            }}
                        />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Navbar;
