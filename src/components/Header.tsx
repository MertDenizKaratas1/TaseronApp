import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Button, Box, Popper, Paper, List, ListItem, ListItemText, Fade } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { getPageName } from '../business/methods';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<any>('bottom-start');

    const navigate = useNavigate();
    const location = useLocation();

    // Handle Search Click
    const handleSearchClick = (event : any) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };

    const handleSignInClick = () => {
        navigate('/signin');
    };

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: '#f8f9fa', boxShadow: 'none', padding: '10px', color: '#6C757D' }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side (logo and page info) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/logo.svg" alt="Soft UI Dashboard" width={40} height={40} />
                    <Box sx={{ marginLeft: '200px' }}>
                        <Typography variant="body2" sx={{ color: '#6C757D' }}>
                            Pages / {getPageName(location.pathname)}
                        </Typography>
                    </Box>
                </Box>

                {/* Right side (Search bar and buttons) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Search Bar */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <SearchIcon sx={{ color: '#6C757D', marginRight: '10px' }} />
                        <InputBase
                            placeholder="Type here..."
                            onClick={handleSearchClick} // Open dropdown on click
                            sx={{
                                width: '200px',
                                border: '1px solid #ced4da',
                                borderRadius: '20px',
                                padding: '5px 15px',
                                color: '#6C757D',
                            }}
                        />
                        {/* Popper Dropdown */}
                        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper sx={{ mt: 1 }}>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Item 1" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Item 2" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Item 3" />
                                            </ListItem>
                                        </List>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </Box>

                    {/* Buttons */}
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#D63384',
                            borderColor: '#D63384',
                            textTransform: 'none',
                            marginRight: '15px',
                        }}
                    >
                        Online Builder
                    </Button>
                    <IconButton onClick={handleSignInClick}>
                        <PersonIcon sx={{ color: '#6C757D' }} />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon sx={{ color: '#6C757D' }} />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon sx={{ color: '#6C757D' }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
