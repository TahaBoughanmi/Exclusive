import React, { useState, useEffect } from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import SquareIcon from '@mui/icons-material/Square';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
const Todays = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate=useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-05-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const renderTimer = () => {
    return (
      <span>
        {timeLeft.days}d :{timeLeft.hours}h :{timeLeft.minutes}m :{timeLeft.seconds}s
      </span>
    );
  };
  const [products,setproducts]=useState([])
   
  useEffect(() => {
    axios.get('http://localhost:5000/Client/products/FS') 
      .then(response => {
        setproducts(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []); 

  return (
    <Box sx={{ padding: 3,marginTop:"50px" }}>
      <Typography variant="h5" component="h5" sx={{ color: "red", marginRight: 2, display: "flex", alignItems: "center" }}>
        <SquareIcon /> Today's
      </Typography>

      <Typography variant="h4" component="div">
        Flash Sales {renderTimer()}
      </Typography>
      
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard
              product={product}
              onClick={() => navigate('/oneProduct', { state: { productId: product.id } })}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained" style={{ color: "white", backgroundColor: "red" }}>
          View all products
        </Button>
      </Box>
      <hr width='90%' />
    </Box>
  );
};

export default Todays;
