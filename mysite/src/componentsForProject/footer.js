import React from 'react';
import { Grid, Typography , Box} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./footer.css"
function Foot() {
    return (
        <div>
            <Grid container spacing={2} className='gr'>
                <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box style={{ marginRight: '50px' }}>
                        <Typography fontSize='22px' variant='h6'>About Our Pharmacy</Typography>
                        <Typography variant="ul" fontSize='16px' sx={{listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <li style={{ margin: '0 0 10px 0' }}>About us</li>
                            <li style={{ margin: '0 0 10px 0' }}>Contact us</li>
                            <li style={{ margin: '0 0 10px 0' }}>Privacy Policy</li>
                            <li style={{ margin: '0' }}>Blogs</li>  
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box style={{ marginRight: '50px' }}>
                        <Typography fontSize='22px' variant='h6'>Product Categories</Typography>
                        <Typography variant="ul" fontSize='16px' sx={{listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <li style={{ margin: '0 0 10px 0' }}>Personal Care</li>
                            <li style={{ margin: '0 0 10px 0' }}>Baby Care</li>
                            <li style={{ margin: '0 0 10px 0' }}>Beauty Care</li>
                            <li style={{ margin: '0' }}>Immunity Boosters</li> 
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box style={{ marginRight: '50px' }}>
                        <Typography fontSize='22px' variant='h6'>Online Consultancy</Typography>
                        <Typography variant="ul" fontSize='16px' sx={{listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <li style={{ margin: '0 0 10px 0' }}>Consult Cardiologists</li>
                            <li style={{ margin: '0 0 10px 0' }}>Consult ENT Specialists</li>
                            <li style={{ margin: '0 0 10px 0' }}>Consult Dermatologists</li>
                            <li style={{ margin: '0' }}>Consult Paediatricians</li>  
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box style={{ marginRight: '50px' }}>
                        <Typography fontSize='22px' variant='h6'>Book Lab Tests</Typography>
                        <Typography variant="ul" fontSize='16px' sx={{listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <li style={{ margin: '0 0 10px 0' }}>Lipid Profile Test</li>
                            <li style={{ margin: '0 0 10px 0' }}>Hemogram Test</li>
                            <li style={{ margin: '0 0 10px 0' }}>Widal Test</li>
                            <li style={{ margin: '0' }}>Diabetes Care</li>  
                        </Typography> 
                    </Box>
                </Grid>

                <Grid item xs={12} >
                    <Typography>Find us on</Typography>
                    <div className='sec'>
                        <InstagramIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Foot;
