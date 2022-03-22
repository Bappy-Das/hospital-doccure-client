import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Doctors.css'

const Doctors = () => {
    return (
        <Box>
            <Container>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '5px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Box>
                            img
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                Dr. Darren Elder
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                BDS, MDS - Oral & Maxillofacial Surgery
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                icon  Dentist
                            </Typography>
                            {/* <Typography component="legend">Read only</Typography> */}
                            <Rating name="read-only" value={4} readOnly />
                            <Typography component="legend">icon Newyork, USA</Typography>

                            <Button variant="outlined">Dental Fillings</Button>
                            <Button variant="outlined">Dental Fillings</Button>

                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            icon  99%
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            icon  35 Feedback
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Newyork, USA
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            $100 per hour
                        </Typography>
                        <Box>
                            <Button variant="outlined">icon btn</Button>
                            <Button variant="outlined">icon btn</Button>
                            <Button variant="outlined">icon btn</Button>
                            <Button variant="outlined">icon btn</Button>
                        </Box>
                        <Button variant="contained">Book Appointment</Button>
                    </Box>
                </Box>
            </Container>

        </Box>
    );
};

export default Doctors;