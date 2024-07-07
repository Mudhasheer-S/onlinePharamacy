import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
import ProfileNav from './profileNav'
import Popup from 'reactjs-popup'
import { Avatar, Button, Typography, Paper, Grid, Box, TextField } from '@mui/material';
import "./ManageProfile.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ManageProfile() {
    const [gender, setGender] = React.useState('');
    const [Fname, setFname] = React.useState('');
    const [Lname, setLname] = React.useState('');
    const [dob, setdob] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [userData, setData] = React.useState('');
    const navigator = useNavigate();    


    const handleSubmit = async (event) => {
        event.preventDefault();

        const Submitted = {
            name: Fname + " " + Lname,
            dob: dob,
            age: age,
            phone_number: parseInt(phone),
            email: email,
            gender: gender,
            username:localStorage.getItem("username")
        };

        await axios.put(`http://localhost:8080/profile?username=${localStorage.getItem("username")}`, Submitted)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        const fetchData = async () => {

            if (localStorage.getItem("username") == null) {
                navigator("/login")
            }

            await axios.get(`http://localhost:8080/profile?username=${localStorage.getItem("username")}`)
                .then(responce => {setData(responce.data);})
                .catch(error => console.error(error))

            

        }
        fetchData();
    }, [])

    return (
        <div>
            <NavBar />
            <NavBar2 />
            <Box sx={{ display: "flex", flexDirection: "row" }} spacing={1}>
                <Grid xs={4} sx={{ flex: "25%" }}>
                    <ProfileNav />
                </Grid>
                <Grid xs={8} sx={{ flex: "75%", padding: "35px" }}>
                    <Box sx={{ height: "650px", width: "650px", boxShadow: "2px 1.2px 2px 1.2px grey", borderRadius: "29px" }}>

                        <Grid container direction="column" spacing={2} style={{ marginTop: "10px", alignItems: "center", justifyContent: "center" }}>
                            <Avatar src="/broken-image.jpg" style={{ width: '100px', height: '100px', marginTop: "20px" }} />
                            <Typography variant="h6"><b>{userData.name}</b></Typography>
                        </Grid>
                        <Grid style={{ paddingLeft: "20px" }}>
                            <h2>UserName:</h2>
                            <h4 style={{}}>{userData.username}</h4>
                            <hr />
                        </Grid>
                        <Grid style={{ paddingLeft: "20px" }}>
                            <h2>Email:</h2>
                            <h4 style={{}}>{userData.email}</h4>
                        </Grid>
                        <hr />
                        <Grid style={{ paddingLeft: "20px" }}>
                            <h2>Phone number:</h2>
                            <h4 style={{}}>{userData.phone_number}</h4>
                        </Grid>
                        <hr />
                        <Grid style={{ paddingLeft: "20px" }}>
                            <h2>Age:</h2>
                            <h4 style={{}}>{userData.age}</h4>
                        </Grid>

                        <Popup trigger=
                            {<Button variant='contained' color='success' size="large" sx={{ textAlign: 'center', paddingBottom: "6px", marginLeft: "250px" }}>EDIT</Button>} modal nested>
                            {
                                close => (
                                    <div className='modal' style={{ height: "10px", display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', position: "relative" }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: '100vh',
                                            }}
                                        >
                                            <Paper elevation={3} style={{ padding: '20px', width: '300px', maxHeight: '70vh' }}>
                                                <Typography variant="h6" gutterBottom>
                                                    Edit Your Details
                                                </Typography>
                                                <form>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={12}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                id="firstName"
                                                                label="Enter Your Phone Number"
                                                                variant="standard"
                                                                onChange={(e) => { setphone(e.target.value) }}
                                                            // sx={{ '& .MuiInputBase-input': { color: 'red' } }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                id="firstName"
                                                                label="First Name"
                                                                variant="standard"
                                                                onChange={(e) => { setFname(e.target.value) }}
                                                            // sx={{ '& .MuiInputBase-input': { color: 'red' } }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                id="lastName"
                                                                label="Last Name"
                                                                variant="standard"
                                                                onChange={(e) => { setLname(e.target.value) }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                id="dob"
                                                                label="Date of Birth"
                                                                type="date"
                                                                variant="standard"
                                                                onChange={(e) => { setdob(e.target.value) }}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="age"
                                                                label="Age"
                                                                type="number"
                                                                variant="standard"
                                                                value={age}
                                                                onChange={(e) => setAge(e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="email"
                                                                label="Email Address"
                                                                variant="standard"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <label htmlFor="gender">Gender:</label>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                                                <Button
                                                                    variant={gender === 'female' ? 'contained' : 'outlined'}
                                                                    onClick={() => setGender('female')}
                                                                    sx={{ color: gender === 'female' ? 'white' : 'inherit', backgroundColor: gender === 'female' ? 'green' : 'inherit' }}
                                                                >
                                                                    Female
                                                                </Button>
                                                                <Button
                                                                    variant={gender === 'male' ? 'contained' : 'outlined'}
                                                                    onClick={() => setGender('male')}
                                                                    sx={{ color: gender === 'male' ? 'white' : 'inherit', backgroundColor: gender === 'male' ? 'green' : 'inherit', marginLeft: '10px' }}
                                                                >
                                                                    Male
                                                                </Button>
                                                            </Box>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                                                <Button variant="contained" color="warning" onClick={() => close()} sx={{ marginRight: '10px' }}>
                                                                    CANCEL
                                                                </Button>
                                                                <Button type="submit" variant="contained" color="warning" onClick={(event) => {handleSubmit(event) ; close();}}>
                                                                    SAVE
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Paper>
                                        </Box>
                                    </div>
                                )
                            }
                        </Popup>
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}

export default ManageProfile