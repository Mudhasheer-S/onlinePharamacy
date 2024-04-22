import  React,{useState,useEffect} from 'react';
import {Paper,Avatar,Button,CssBaseline,FormControlLabel,Checkbox,Link,Grid,Box,Typography,TextField,Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();
export default function RegisterForm() {
    const navigation = useNavigate();
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastname]=useState("");
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");

    const[fnerr,setfnerr] = useState(false)
    const[lnerr,setlnerr] = useState(false)
    const[unerr,setunerr] = useState(false)
    const[passerr,setpasserr] = useState(false)
    const[conerr,setconerr] = useState(false)

    const[passworderror,setpassworderror] = useState("");

    const handleSubmit = async (e) =>{ 
        e.preventDefault()
        
        const user = await axios.get(`http://localhost:8080/userData?username=${username}`)
        
        if(user.data.length == 1){
            setpassworderror("Username already exists")
        }
        else if(password!=confirmpassword)
        {
            setpassworderror("Password and Confirm Password are not same");
        }
        else if((firstName!="" && lastName!="" && username!="" && password!="" && confirmpassword!="") && (password==confirmpassword)){

            const api = 'http://localhost:8080/userData';
            axios.post(api,{
                    name:`${firstName} ${lastName}`,
                    username: username,
                    password: password
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:',error);
                });
                const id = await axios.get(`http://localhost:8080/userData?username=${username}`)

                // await axios.post("http://localhost:3001/CartItem",{id:id.data.id,Item:[]})
                navigation("/login");
            }
            

            firstName=="" ? setfnerr(true) :  setfnerr(false);
    
            lastName=="" ? setlnerr(true) : setlnerr(false)
        
            username=="" ? setunerr(true) : setunerr(false)
            
            password=="" ? setpasserr(true) : setpasserr(false)
            
            confirmpassword=="" ? setconerr(true) : setconerr(false)


    
            
    };
        
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', padding: "30px" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        height: "650px", width: "20px",
                        alignItems: "center",
                        backgroundImage: 'url(https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                {/* <LockOutlinedIcon /> */}
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register
                            </Typography>
                            <Box component="form" noValidate  sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            onChange={(e)=> (setfirstName(e.target.value),
                                                setfnerr(false))}
                                            className='form-control'
                                            error = {fnerr}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            className='form-control'
                                            autoComplete="family-name"
                                            onChange={(e)=> (setlastname(e.target.value),
                                                setlnerr(false))}
                                            error = {lnerr}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="UserName"
                                            name="email"
                                            className='form-control'
                                            autoComplete="email"
                                            onChange={(e)=> (setusername(e.target.value),
                                                setunerr(false))}
                                            error = {unerr}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            onChange={(e)=> (setpassword(e.target.value),
                                                setpasserr(false))}
                                            error = {passerr}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="conformpassword"
                                            label="Conform Password"
                                            type="password"
                                            id="conform-password"
                                            autoComplete="new-password"
                                            onChange={(e) => (setconfirmpassword(e.target.value),
                                                setconerr(false))}
                                            error = {conerr}
                                        />
                                    </Grid>
                                </Grid>
                                
                                <br/>
                                {passworderror && <Typography color="error">{passworderror}</Typography>}  
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSubmit}
                                >
                                    Register
                                </Button>
                                <Grid container justifyContent = "flex-end">
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
