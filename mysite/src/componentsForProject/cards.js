import { useEffect, useState } from "react";
import axios from 'axios';
import React, { createContext } from 'react';
import { Button, Grid, Container, Box } from '@mui/material';
// import ProductDetail from "./ProductDetail";
import { useNavigate } from "react-router-dom";

function CardList() {
    const navigator = useNavigate();
    const [data, setvalue] = useState([]);

    useEffect(() => {
        const apiurl = 'http://localhost:3001/dataSlide';

        axios.get(apiurl)
            .then(response => { setvalue(response.data); })
            .catch(error => {
                console.error("Error", error);
            })

    }, [])

    const handleClick = (i) => {
        navigator(`/ProductDetail/${i}`)
    }

    const handleButton = async (idValue) => {
        const responce1 = await axios.get("http://localhost:3001/userProfile/1");
        const getProductObject = await axios.get(`http://localhost:3001/dataSlide/${idValue}`);
        const objectValue = {
            image: getProductObject.data.img,
            Rs: getProductObject.data.Rate,
            heading: getProductObject.data.heading,
            Quantity: 1
        }


        const response = await axios.get(`http://localhost:3001/cartItem/${responce1.data.profileValue}`);
        const cartItem = response.data;
        cartItem.Item.push(objectValue);
        await axios.put(`http://localhost:3001/cartItem/${responce1.data.profileValue}`, cartItem);
    }

    return (
        <div>


            <Grid container spacing={2} sx={{ marginTop: "15px", marginBottom: "0px" }}>
                {data.map((data) => {
                    return (
                        <Grid key={data.id} onClick={() => { handleClick(data.id) }} item xs={4} sm={3} md={3} lg={2.5} xl={2.5} sx={{
                            cursor: "pointer",
                            height: '350px',
                            width: '200px',
                            padding: '5px',
                            margin: "20px"
                        }}>
                            <Grid sx={{
                                height: "40%", width: "100%", marginLeft: "3px", textAlign: "center"
                            }}><img src={data.img} height="150px" >
                                </img>
                            </Grid>
                            <Grid component="div" sx={{
                                height: "22%", width: "100%", overflow: "hidden", paddingTop: "20px"
                            }}>
                                {data.heading}
                            </Grid>
                            <Grid sx={{ height: "50px", paddingTop: "30px" }}>
                                ₹{data.Rate} <del style={{ fontSize: "12px", margin: "0px", color: "gray" }}>(₹{data.Rate - 100})</del><span style={{ color: "green" }}>   50% off</span>
                            </Grid>
                            <Grid sx={{ textAlign: "center", height: "15%", paddingTop: "35px" }}>

                                <Button variant='contained' sx={{ backgroundColor: "#165D69", borderRadius: "10px" }} onClick={() => { handleButton(data.id) }} fullWidth>ADD TO CARD</Button>
                            </Grid>
                        </Grid>
                    )
                }
                )}
            </Grid>
        </div>
    )
}
export default CardList;