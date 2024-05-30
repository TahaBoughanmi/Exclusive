import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import SquareIcon from '@mui/icons-material/Square';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";

const Ourproducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/Client/products')
      .then(response => {
        setProducts(response.data.slice(0, 8));
        console.log(response);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <Box sx={{ padding: 3, marginTop: "50px" }}>
      <Typography variant="h5" component="h5" sx={{ color: "red", marginRight: 2, display: "flex", alignItems: "center" }}>
        <SquareIcon /> Our Products
      </Typography>

      <Typography variant="h4" component="div">
        Explore Our Products
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

export default Ourproducts;
