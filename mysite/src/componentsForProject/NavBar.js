import  React,{useState} from 'react';
import { Typography,IconButton,Button,Toolbar,Box,AppBar } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import TextField from '@mui/material/TextField';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
  const [selected, setSelected] = React.useState("web");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigat = useNavigate();
  const handleToggle = (event, newValue) => {
    setSelected(newValue);
  };
  const[pop,setpopup] = useState();
  const handleProfile =(e) =>{
    navigat("/Profile")
  }
  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" sx={{backgroundColor:'white',color:'black'}}>
        <Toolbar>
          <div style={{}}>
            <img src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/295239143/original/73f000c4d653b5e5bce1d52ef2c0e018873c454e.jpg' style={{width:'60px',height:'40px',marginRight:'5px'}}></img>
          </div>
          <div>
          <Popup trigger=
                {<Button variant='text' startIcon={<PlaceIcon />} sx={{color:'black'}}>Delivery</Button>} 
                modal nested>
                {
                    close => (
                        <div className='modal' style={{height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'white',justifyContent:'center', position: "relative",borderRadius:"37px"}}>
                                <div className="modal-close" onClick={() => close()}>
                                &times;
                              </div>
                          <div>
                              <div>
                                <Typography>Help us serve you better!</Typography>
                                <hr />
                            </div>
                          </div>
                          <img src='https://images.apollo247.in/images/ui_revamp_pincodeModal.svg?tr=w-280,q-80,f-webp,dpr-1.25,c-at_max' alt='location image' style={{marginLeft:"0px",marginBottom:"10px"}}></img>
                          <Typography sx={{fontWeight:'bold'}}>Enter Your Location Pincode</Typography>
                          <br />
                        <div className='content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginLeft:'25px' }}>
                          <TextField
                            id="outlined-basic"
                            label="Enter Your Pincode"
                            size='small'
                            onChange={(e) => {
                              setpopup(e.target.value);
                            }}
                            sx={{
                              color: 'black',
                              width: '80%',
                              marginRight: '10px',
                            }}
                          />
                          <Button
                            variant="contained"
                             onClick={() => close()}
                            sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    )
                }
          </Popup>

            
          </div>
          {/* <Button variant='text' startIcon={<PlaceIcon />} sx={{color:'black'}}>Delivery</Button> */}
          <Typography component="div" sx={{ flexGrow: 1}}>
          </Typography>
          <Button variant="contained" sx={{ marginRight: 1.5,borderRadius:'20px' , backgroundColor:"#165d59"}}  onClick={() => navigat("/register")} >signup</Button>
          <Button variant="outlined"  color="success" sx={{ marginRight: 1.5,color:'#165d59'}} onClick={() => navigat("/login")}>Login</Button>
          <AddShoppingCartIcon onClick={() => {navigat("/MyCart")}} sx={{ marginRight: 3 , cursor:"pointer"}} />
          <AccountCircleIcon onClick={handleProfile} sx={{cursor:"pointer"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default  NavBar
