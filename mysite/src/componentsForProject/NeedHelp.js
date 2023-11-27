import React from 'react';
import './orders.css';
import { Box, Button,Grid } from '@mui/material';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import ProfileNav from './profileNav';
import ContactUs from './Contact';

const NeedHelp = () => {

    return (
        <div>
            <NavBar />
            <NavBar2 />
            <Box sx={{ display: "flex", flexDirection: "row" }} spacing={1}>
                <Grid xs={4} sx={{ flex: "25%" }}>
                    <ProfileNav />
                </Grid>
                <Grid xs={8} sx={{ flex: "75%", padding: "35px" }}>
                </Grid>
            </Box>
        </div >
  );
};

export default NeedHelp;
