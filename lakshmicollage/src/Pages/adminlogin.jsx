import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = () => {
    const adminEmail = "laksh@gmail.com";
    const adminPassword = "admin@123";

    if (email === adminEmail && password === adminPassword) {
      alert("Welcome Admin");
      navigate("/admin");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: { xs: 4, md: 8 } }}>
      <Paper elevation={5} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          Admin Login
        </Typography>

        <TextField
          fullWidth
          label="Admin Email"
          sx={{ mt: 3 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ mt: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={adminLogin}
        >
          Login as Admin
        </Button>

        <Box
          sx={{
            mt: 3,
            p: 2,
            background: "#f3f7fb",
            borderRadius: 2,
          }}
        >
          <Typography align="center" fontWeight="bold">
            Demo Admin
          </Typography>

          <Typography align="center">
            Email : laksh@gmail.com
          </Typography>

          <Typography align="center">
            Password : admin@123
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="text"
          sx={{ mt: 2 }}
          onClick={() => navigate("/login")}
        >
          Back to User Login
        </Button>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
