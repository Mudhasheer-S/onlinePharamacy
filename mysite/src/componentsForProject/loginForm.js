import { Grid, Box, Paper, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();
export default function LoginForm() {

  const [UserName, setUserName] = useState("")
  const [UserPassword, setUserPassword] = useState("")

  const [userr, setuserr] = useState(false);
  const [uperr, setuperr] = useState(false);

  const [usernameerr, setusernameerr] = useState("");

  const navigator = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const api = `http://localhost:8080/userData?username=${UserName}`
    
    UserName == "" ? setuserr(true) : setuserr(false)
    
    UserPassword == "" ? setuperr(true) : setuperr(false)
    
    const response = await axios.get(api)

    if(response.data.length == 0){
      setusernameerr("Username is not valid")
    }
    else if (UserPassword != response.data.password) {
      setusernameerr("Password is not valid");
    }
    else if(UserPassword == response.data.password){
      localStorage.clear();
      localStorage.setItem('username',UserName);
      
      navigator("/");
    }

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
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* You can add an icon or an image for the Avatar */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="User Name"
                name="email"
                autoComplete="email"
                autoFocus
                error={userr}
                onChange={(e) => (setUserName(e.target.value),
                  setuserr(false))}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={uperr}
                onChange={(e) => (setUserPassword(e.target.value),
                  setuperr(false))}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <br />
              {usernameerr && <Typography color="error" sx={{ textAlign: 'center' }}>{usernameerr}</Typography>}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="" variant="body2">
                    {"Forgot password"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
