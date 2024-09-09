import React from 'react';
import { Box } from '@mui/material';
import SignInForm from '../components/SignInForm';
import Footer from '../components/SignInFooter';
import SignInHeader from '../components/SignInHeader';
import background from '../assets/signin-background-image.jpg';

const SignIn = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: `url(${background})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                }}>
                <SignInHeader />
            </Box>
            {/* Sign-in Form */}
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                <SignInForm />
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default SignIn;
