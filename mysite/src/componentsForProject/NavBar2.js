import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#165d59'
    },
  },
});

const navItems = ['Home', 'Products', 'About Us', 'Contact Us', 'FAQ'];

export default function NavBar2() {
    const navigator = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent:"space-around", marginTop: '0' }}>
          <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto auto',gap:'200px'}}>
            <h3 onClick={() => {navigator("/")}} style={{cursor:"pointer"}}>Home</h3>
            <h3 onClick={() => {navigator("/AboutUs")}} style={{cursor:"pointer"}}>About Us</h3>
            <h3 onClick={() => {navigator("/ContactUs")}} style={{cursor:"pointer"}}>Contact Us</h3>
            <h3 onClick={() => {navigator("/Products")}} style={{cursor:"pointer"}}>Products</h3>
            <h3 onClick={() => {navigator("/FAQ")}} style={{cursor:"pointer"}}>FAQ</h3>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
);
}