import React, { useEffect, useState } from 'react';
import './MyCart.css';
import { Button, Typography, Grid } from '@mui/material';
import { Margin } from '@mui/icons-material';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyCart = () => {
    const navigator = useNavigate();
    const [orders, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responce = await axios.get("http://localhost:3001/userProfile/1");

            axios.get(`http://localhost:3001/CartItem/${responce.data.profileValue}`)
                .then(responce => setData(responce.data.Item))
                .catch(error => console.log(error))
        }
        fetchData();
    }, [])


    return (
        <div>
            <NavBar />
            <NavBar2 />
            <div className="my-orders-container">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h1>ITEM IN MyCart</h1>
                    <Button variant='contained' color='success' size='small' sx={{ marginLeft: "220px", height: "40px", marginTop: "22px" }} onClick={() => navigator("/Orders")}>BUY NOW</Button>
                </div>
                <Grid container spacing={8} sm={6}>
                    {orders.map((order) => (
                        <Grid item xs={12} sm={6} md={10} xl={10} key={order.image}>
                            <div className="order-box">
                                <div className="order-details">
                                    <img src={order.image} alt={order.heading} />
                                    <div className="vertical-line"></div>
                                    <div style={{ marginRight: "35px" }}>
                                        <p>{order.heading}</p>
                                    </div>
                                    <div className="vertical-line"></div>
                                    <div style={{ marginLeft: "15px", marginRight: "0px" }}>
                                        <p>QTY: {order.Quantity}</p>
                                    </div>
                                    <div className="vertical-line"></div>
                                </div>
                                <Typography>MRP: ₹{order.Rs}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </div>
        </div>
    );
};

export default MyCart;
