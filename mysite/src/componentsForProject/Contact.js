import * as React from 'react';
import { Typography, Box, Container } from '@mui/material';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import Foot from './footer';

const ContactUs = () => {
  return (
    <>
    <NavBar />
    <NavBar2 />
    <Container style={{marginTop:"50px" , marginBottom:"50px"}}>
    <Box
      sx={{
        backgroundColor: '#f5f5dc', // Sandal background color
        padding: '20px',
        borderRadius:"20px"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Az Pharmacies Limited
      </Typography>
      <Typography variant="body1" gutterBottom>
        #19, Bishop Gardens,
      </Typography>
      <Typography variant="body1" gutterBottom>
        Raja Annamalaipuram,
      </Typography>
      <Typography variant="body1" gutterBottom>
        Chennai, Tamil Nadu- 600028
      </Typography>

      <Typography variant="h6" gutterBottom>
        For queries related to Online orders
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please contact us at: <a href="mailto:contactusnow@Azpharmacy.org">contactusnow@Azpharmacy.org</a>
      </Typography>

      <Typography variant="h6" gutterBottom>
        For queries related to Az Pharmacy Store experience
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please contact us at: <a href="mailto:customerservice@Azpharmacy.org">customerservice@Azpharmacy.org</a>
      </Typography>

      <Typography variant="h6" gutterBottom>
        For Corporate and Bulk inquiries
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please contact us at: <a href="mailto:customerservice@Azpharmacy.org">customerservice@Azpharmacy.org</a>
      </Typography>

      <Typography variant="h6" gutterBottom>
        For launching New Brands on Az Pharmacy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please contact us at: <a href="mailto:brandlisting@apollopharmacy.org">brandlisting@Azpharmacy.org</a>
      </Typography>
    </Box>
    </Container>
    <Foot />
    </>
  );
};

export default ContactUs;
