import React, { useContext, useEffect, useState } from 'react'
import "./ResponsiveCards.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyProvider } from '../App';


const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,

};


const ResponsiveCards = () => {
  const [data, setvalue] = useState([]);
  const navigator = useNavigate();

  const {ContexData,setContexData} = useContext(MyProvider)

  useEffect(() => {
    const apiurl = 'http://localhost:8080/products';

    axios.get(apiurl)
      .then(response => { setvalue(response.data); })
      .catch(error => {
        console.error("Error", error);
      })
  }, [])

  const handleButton = async (idValue) => {
    const objectValue = {
        product_id:idValue,
        username:ContexData,
        qty:1
      }
      const addItem=null;
      try{
        addItem = await axios.post(`http://localhost:8080/UserCart`,objectValue);
        
      }
      catch(err){
        console.error(err);
      }
      navigator("/MyCart")
}

  return (
    <div id="maindiv">
      <Slider arrows {...settings}>

        {data.map((data) => {

          return (
            <Grid item xs={2} style={{ marginBottom: "10px" }}>
              <Box key={data.id} onClick={() => {navigator(`/ProductDetail/${data.id}`)}} sx={{
                height: '400px',
                width: '200px',
                padding: '5px',
                // border:"solid black"
                cursor:"pointer"
              }}>
                <Box sx={{
                  height: "40%", width: "100%", marginLeft: "3px", textAlign: "center"
                }}><img src={data.img} height="150px" >
                  </img>
                </Box>
                <Box component="div" sx={{
                  height: "23%", width: "100%", overflow: "hidden", textAlign: "left"
                }}>
                  {data.heading}
                </Box>
                <Box sx={{ height: "50px", paddingTop: "5px", textAlign: "left", paddingLeft: "5px" }}>
                  ₹{data.rate} <del style={{ fontSize: "12px", margin: "0px", color: "gray" }}>(₹{data.rate - 100})</del><span style={{ color: "green" }}>   50% off</span>
                </Box>
                <Box sx={{ textAlign: "center", height: "15%", }}>

                  <Button variant='contained' sx={{ backgroundColor: "#165D69", borderRadius: "10px" }} fullWidth onClick={() => {handleButton(data.id)}}>ADD TO CARD</Button>
                </Box>
              </Box>
            </Grid>
          )
        }
        )}
      </Slider>
    </div>
  )
}

export default ResponsiveCards