import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Doctor.css'
import doctor from '../../../images/doctor-thumb-02.jpg'
import { AiOutlinePhone } from "react-icons/ai";
const Doctors = () => {
    return (
        <Box>
            <Container>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // padding: '5px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 4
                    }}>
                        <Box>
                            <Box
                                component="img"
                                sx={{
                                    height: '150px',
                                    width: '150px',
                                    mr: 5

                                }}
                                alt="The house from the offer."
                                src={doctor}
                            />
                        </Box>
                        <Box sx={{
                            textAlign: 'start',
                            // p: 4
                        }}>
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

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                mt: 3
                            }}>
                                <Button variant="outlined">
                                    <Typography variant="caption" display="block" gutterBottom>
                                        caption text
                                    </Typography>
                                </Button>
                                <Button variant="outlined">
                                    <Typography variant="caption" display="block" gutterBottom>
                                        caption text
                                    </Typography>
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{
                        textAlign: 'start',
                        // p: 4
                    }}>
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
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}>
                            <Button sx={{ p: 1 }} variant="outlined"> <AiOutlinePhone /> </Button>
                            <Button sx={{ p: 1 }} variant="outlined"> <AiOutlinePhone /> </Button>
                            <Button sx={{ p: 1 }} variant="outlined"> <AiOutlinePhone /> </Button>
                            <Button sx={{ p: 1 }} variant="outlined"> <AiOutlinePhone /> </Button>


                        </Box>
                        <Button sx={{ mt: 2 }} variant="contained">Book Appointment</Button>
                    </Box>
                </Box>
            </Container>

        </Box>
    );
};

export default Doctors;