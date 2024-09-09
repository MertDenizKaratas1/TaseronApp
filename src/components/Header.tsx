import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin');
    };

    const location = useLocation();

    const getPageName = (path: string) => {
        switch (path) {
            case '/dashboard':
                return 'Dashboard';
            case '/tables':
                return 'Tables';
            case '/billing':
                return 'Billing';
            case '/virtual-reality':
                return 'Virtual Reality';
            case '/rtl':
                return 'RTL';
            default:
                return 'Dashboard';
        }
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

                {/* Middle (Search bar) */}
                <Box sx={{ display: 'flex', alignItems: 'center', width: '300px' }}>
                    <SearchIcon sx={{ color: '#6C757D', marginRight: '10px' }} />
                    <InputBase
                        placeholder="Type here..."
                        sx={{
                            width: '100%',
                            border: '1px solid #ced4da',
                            borderRadius: '20px',
                            padding: '5px 15px',
                            color: '#6C757D',
                        }}
                    />
                </Box>

                {/* Right side (buttons and icons) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
