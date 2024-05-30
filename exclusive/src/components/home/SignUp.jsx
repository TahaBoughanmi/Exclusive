import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
function Signup() {
  // we state variables for username, password, and message
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  // Function to handle signup
  const handleSignup = async (e) => {
    // we need to use this code to prevent default form submission behavior
    e.preventDefault();
    try {
      // send POST request to register endpoint with username and password
      const response = await axios.post(
        'http://localhost:4000/api/auth/register',
        { username, password }
      );
      setMessage('Signup successful!');
    } catch (error) {
      setMessage('Signup failed. Please try again.');
    }
  };
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Membership Application
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      {message && (
        <Grid item xs={12}>
          <Typography>{message}</Typography>
        </Grid>
      )}
    </Grid>
  );
}
export default Signup;
