import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
} from "@mui/material";

export default function Admin() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
const changeRole = async (id, role) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/role/${id}`,
      { role }
    );

    alert(response.data.message);

    getUsers();
  } catch (error) {
    console.log(error);
  }
};

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <Container maxWidth="md" sx={{ my: { xs: 3, md: 6 } }}>
      <Paper sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          College Administration
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Registered users: {users.length}
        </Typography>

        <Box sx={{ mt: 4 }}>
          {users.length === 0 ? (
            <Typography>No Users Found</Typography>
          ) : (
            users.map((user) => (
              <Paper
                key={user._id}
                sx={{
                  p: 2,
                  mb: 2,
                  background: "#f7faff",
                  borderRadius: 2,
                }}
              >
                <Typography>
                  <b>Name :</b> {user.username}
                </Typography>

                <Typography>
                  <b>Email :</b> {user.email}
                </Typography>

                <Typography>
                  <b>Role :</b> {user.role}
                </Typography>

                <Button
                  variant="contained"
                  sx={{ mt: 2, mr: 2 }}
                  onClick={() =>
                    changeRole(
                      user._id,
                      user.role === "admin" ? "user" : "admin"
                    )
                  }
                >
                  {user.role === "admin"
                    ? "Make User"
                    : "Make Admin"}
                </Button>
              </Paper>
            ))
          )}
        </Box>

        <Button
          variant="contained"
          color="error"
          onClick={logout}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
}
