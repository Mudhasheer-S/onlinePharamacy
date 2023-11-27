import React from 'react';
import './orders.css';
import { Box, Button,Grid } from '@mui/material';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import ProfileNav from './profileNav';

const OrderPage = () => {
    const orders = [
        {
            id: '12345',
            date: '2022-12-01',
            image: "https://images.apollo247.in/pub/media/catalog/product/B/U/BUS0034_3_1.jpg?tr=w-167.5,q-60,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '67890',
            date: '2022-12-02',
            image: "https://images.apollo247.in/pub/media/catalog/product/D/A/DAB0134_1-JULY23_1.jpg?tr=w-264,q-80,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '67892',
            date: '2023-01-01',
            image: "https://images.apollo247.in/pub/media/catalog/product/N/A/NAN0008_1-AUG23_1.jpg?tr=w-264,q-80,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '54321',
            date: '2023-02-06',
            image: "https://images.apollo247.in/pub/media/catalog/product/C/E/CER0063_1-JULY23_1.jpg?tr=w-264,q-80,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '98541',
            date: '2023-03-06',
            image: "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210108_171908_front_cough_drops_3.jpg",
        },
        {
            id: '76431',
            date: '2023-04-08',
            image: "https://images.apollo247.in/pub/media/catalog/product/v/i/vic0020_1-nov2023_3_.jpeg?tr=w-264,q-80,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '80931',
            date: '2023-06-08',
            image: "https://images.apollo247.in/pub/media/catalog/product/d/o/dov0223_2.jpg?tr=w-264,q-80,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '98051',
            date: '2023-08-10',
            image: "https://images.apollo247.in/pub/media/catalog/product/n/i/niv0424_1-sep2023_1_.png?tr=w-264,q-80,f-webp,dpr-1.5,c-at_max",
        },
        {
            id: '980834',
            date: '2023-11-27',
            image: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/data/Optimum-Nutrition/19-May-2023/1115039_1.jpg",
        }
    ];

    return (
        <div>
            <NavBar />
            <NavBar2 />
            <Box sx={{ display: "flex", flexDirection: "row" }} spacing={1}>
                <Grid xs={4} sx={{ flex: "25%" }}>
                    <ProfileNav />
                </Grid>
                <Grid xs={8} sx={{ flex: "75%", padding: "35px" }}>
                    <div className="my-orders-container">
                        <h1>My Orders</h1>
                        {orders.map((order) => (
                            <div key={order.id} className="order-box">
                                <div className="order-details">
                                    <img src={order.image} alt={`Product for Order ID ${order.id}`} />
                                    <div>
                                        <p>ID: {order.id}</p>
                                        <p>Date: {order.date}</p>
                                    </div>
                                </div>
                                <Button variant="outlined">Order Details</Button>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Box>
        </div >
  );
};

export default OrderPage;
