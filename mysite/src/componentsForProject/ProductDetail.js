import React, { useContext, useEffect, useState } from 'react'
import { Typography, Grid, TextField, Button, InputAdornment, IconButton, InputLabel, MenuItem, FormControl, Container } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import RoomIcon from '@mui/icons-material/Room';
// import SearchIcon from '@mui/icons-material/Search';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"
import NavBar from './NavBar';
import ResponsiveCards from './ResposiveCards';
import Foot from './footer';
function ProductDetail() {
  const [productList, setvalue] = useState(
    {
      heading: "Cetaphil Baby Daily Lotion with Organic Calendula, 400 ml",
      productdetail: "Indulge your baby in the tender care they deserve with the embrace of Cetaphil Baby Lotion. Enriched with the treasures of nature, such as shea butter, this lotion helps nurture moisture upon your little one's fragile skin. Having undergone rigorous allergy and dermatological tests, it stands as a testament to its safety, even for newborns from their very first day. Cetaphil Baby Lotion stands as a guardian of the skin's moisture barrier, ensuring hydration remains intact for a full 24 hours. It proudly wears the badge of being free from mineral oil and is deemed hypoallergenic, proving its gentleness on your baby's tender skin. Its lightweight formulation swiftly absorbs, leaving behind a delightful, soothing aroma.",
      features: [
        "- Enriched with natural ingredients like shea butter",
        "- Dermatologically-tested",
        "- Safe to use on newborn skin",
        "- Nourishing lotion that preserves the skin's moisture barrier",
      ],
      description: "While we strive to provide complete, accurate, and expert-reviewed content on our 'Platform', we make no warranties or representations and disclaim all responsibility and liability for the completeness, accuracy, or reliability of the aforementioned content. The content on our platform is for informative purposes only, and may not cover all clinical/non-clinical aspects. Reliance on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.",
      rate: "₹1211.3",
      img: "https://images.apollo247.in/pub/media/catalog/product/C/E/CET0347_1-JULY23_1.jpg?tr=w-250,q-80,f-webp,dpr-1.25,c-at_max",
    })

  const lotionDescription = `${productList.productdetail} 
         
         ${productList.features[0]}
         ${productList.features[1]}
         ${productList.features[2]}
         ${productList.features[3]}
        `


  const { idValue } = useParams();

  useEffect(() => {
    const apiurl = `http://localhost:3001/dataSlide/${idValue}`;

    axios.get(apiurl)
      .then(response => { setvalue(response.data); })
      .catch(error => {
        console.error("Error", error);
      })

  }, [idValue])

  const [quantity, setquantity] = React.useState('');

  const handleChange = (event) => {
    setquantity(event.target.value);

  };

  const cart = async (event) => {
    const responce1 = await axios.get("http://localhost:3001/userProfile/1");
    const getProductObject = await axios.get(`http://localhost:3001/dataSlide/${idValue}`);
    const objectValue = {
      image: getProductObject.data.img,
      Rs: getProductObject.data.Rate,
      heading: getProductObject.data.heading,
      Quantity: quantity
    }


    const response = await axios.get(`http://localhost:3001/cartItem/${responce1.data.profileValue}`);
    const cartItem = response.data;
    cartItem.Item.push(objectValue);
    await axios.put(`http://localhost:3001/cartItem/${responce1.data.profileValue}`, cartItem);
  };

  return (
    <div >
      <NavBar />
      <Container>
        <Grid container spacing={2} className='con' sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={6} md={4} sx={{ marginTop: "5px" }}>
            <img src={productList.img} style={{ width: "300px", height: "300px" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <div>
              <div className="share">
                <Typography variant="h6" sx={{ fontWeight: 'bold', flex: "90%" }}>{productList.heading}</Typography>
                <ShareIcon sx={{ flex: "10%", margin: "5px" }} />
              </div>
              <div className="list">
                <Typography>Manufacture/Marketer</Typography>
                <Typography sx={{ fontSize: "14px", color: "grey" }}>GALDERMA INDIA PVT LTD</Typography>
              </div>
              <div className="list">
                <Typography>Consume Type</Typography>
                <Typography sx={{ fontSize: "14px", color: "grey" }}>Topical</Typography>
              </div>
              <div className="list">
                <Typography>Return Policy</Typography>
                <Typography sx={{ fontSize: "14px", color: "grey" }}>No</Typography>
              </div>
              <div className="list">
                <Typography>Expires on or after</Typography>
                <Typography sx={{ fontSize: "14px", color: "grey" }}>Dec-24</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="list" >
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: "13px" }}>₹{productList.Rate} <del style={{ color: "grey", fontSize: "13px" }}>{`(₹${parseInt(productList.Rate) + 103})`}</del></Typography>
              <Typography sx={{ fontSize: "14px", marginLeft: "13px" }}>(Inclusive of all Taxes)</Typography>
            </div>
            <div className="list">
              {/* <RoomIcon/> */}
              <TextField id="outlined-basic" size="small" label="" variant="outlined"
                placeholder="Enter delivery pincode"
                sx={{ marginLeft: "8px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (

                    <Button variant="outlined" sx={{
                      border: "none", '&:hover': {
                        backgroundColor: 'white',
                      },
                    }}>Apply</Button>

                  ),
                }}
                InputLabelProps={{
                  shrink: false,
                }}

              />

            </div>

            <div>
              <FormControl sx={{ m: 1, minWidth: 380 }} size="small">
                {quantity ? null : <InputLabel id="demo-select-small-label" shrink={false}>Quantity</InputLabel>}
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={quantity}
                  label=""
                  onChange={handleChange}
                  MenuProps={{ transitionDuration: 0 }}
                  sx={{ width: "333px" }}

                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button variant="contained" color="success" sx={{ marginTop: "8px", marginLeft: "8px" }} onClick={cart}>Add to Cart</Button>
            <div style={{ padding: "10px" }}>
              <img src="https://media.scurto.net/2014/media/6167-TrustedStaysProgram1-h.jpg" style={{ width: "270px" }}></img>
            </div>
          </Grid>
          {/* row2 */}
          <Grid item xs={8} sx={{ marginLeft: "15px" }}>
            <hr />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h4">Product Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ margin: "0px", whiteSpace: 'pre-line', padding: "0px" }}>
                  {lotionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <hr/> */}
            <div >
              <Typography variant="h5" sx={{ marginLeft: "16px", marginTop: "30px" }}>Description</Typography>
              <Typography sx={{ marginLeft: "16px", marginTop: "3px" }}>
                {productList.description}
              </Typography>
            </div>
            <div className="layout">
              <div className="list marginr">
                <Typography variant="h5" >Country of origin</Typography>
                <Typography>Germany</Typography>
              </div>
              <div className="list marginr">
                <Typography>Manufacturer/Marketer address</Typography>
                <Typography>Lotus Corporate Park, D Wing, Unit 801 & 802, Off Western Express Highway, Goregaon (East), Mumbai 400 063, India</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Typography variant='h4' style={{ marginTop: "100px", marginLeft: "30px" }}>Relevent Product</Typography>
        <Grid sx={{ margin: "0px", padding: "0px", height: "450px" }}>
          <ResponsiveCards />
        </Grid>
      </Container>
      <Foot />
    </div>

  )
}
export default ProductDetail;
