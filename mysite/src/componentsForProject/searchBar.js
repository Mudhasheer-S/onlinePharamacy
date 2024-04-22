import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './search.css'
import { Button, Typography } from '@mui/material';

function Search1Bar() {

  const handleChange = (event) => {
    
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
            placeholder="Search..."
            onChange={handleChange}
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
            
              />
            
        </div>
        </div>
    </div>
    
  );
}

export default Search1Bar;
