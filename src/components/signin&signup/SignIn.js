import React, { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const SignIn = () => {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const users = [
    { username: "2023", password: "123456" },
    { username: "3782", password: "9132" },
    { username: "2550", password: "1563" },
    { username: "2260", password: "7853" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const currentUser = data.get("userId");
    const currentPassword = data.get("password");
    axios
      .post('/login', { currentUser, currentPassword })
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data.error) {
        alert("error")
        } else {
          // Redirect to the dashboard page or display a success message
          navigate("/dashboard")
        }
      })
      .catch((error) => {
        alert("error")
      });
  };

  return (
    <div style={{ background: "#010819" }}>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            background: "#03254c",
            borderRadius: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="User Id"
                name="userId"
                autoComplete="userId"
                type="number"
                autoFocus
                sx={{ background: "white" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{ background: "white" }}
              />
              {loginError && <p style={{ color: "red" }}>Invalid username or password</p>}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5, color: "white" }}>
            {"Copyright © "}
            Pace {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
