import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './search.css'
import { Button, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
function Search1Bar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
   

   
    
    <div className="search-bar" style={{ height: "150px",margin:"0px"}}>
       
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
                <div>
              <Typography variant='h4' sx={{color:"white"}}>Buy Medicines and Essentials</Typography>
              </div>
              <div className="list">
            {/* <RoomIcon/> */}
            <TextField id="outlined-basic"  size="small" label="" variant="outlined"
            placeholder="Enter delivery pincode"
            sx={{marginLeft:"8px",backgroundColor:"white"}}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                    
                      <Button variant="outlined"  sx={{border:"none",color:"#162c2a",'&:hover': {
                          backgroundColor: 'white',border:"none"
                        },}}>Apply</Button>
                    
                ),
              }}
              InputLabelProps={{
                shrink: false,
              }}
        
              />
            
        </div>
        </div>
    </div>
    
  );
}

export default Search1Bar;
