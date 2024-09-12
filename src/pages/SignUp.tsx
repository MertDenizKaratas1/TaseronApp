import React from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import SignInHeader from '../components/SignInHeader'; // Reusing the SignIn header component for consistency
import Footer from '../components/SignInFooter';
import background from '../assets/signin-background-image.jpg';

const SignUp = () => {
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
                }}
            >
                <SignInHeader />
            </Box>

            {/* Sign-up Form */}
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    padding: '20px',
                    flexDirection: 'column',
                }}
            >
                {/* Signup Message */}
                <Typography
                    variant="h4"
                    sx={{
                        color: '#007BFF', // Blue color
                        fontWeight: 'bold',
                        marginBottom: '10px',
                    }}
                >
                    Create your account
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: 'grey', marginBottom: '20px' }}
                >
                    Enter your details to sign up and start your journey with us.
                </Typography>

                <Box
                    component="form"
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        padding: '20px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                type="email"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                                type="tel"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                                type="password"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ padding: '10px 0' }}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default SignUp;
