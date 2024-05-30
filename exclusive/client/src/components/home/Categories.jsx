import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import SquareIcon from '@mui/icons-material/Square';
import PhotoIcon from '@mui/icons-material/Photo';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
const categories = [
  { id: 1, label: "phones", icon: <PhoneIphoneIcon sx={{ fontSize: 50 }} /> },
  { id: 2, label: "Computers", icon: <ComputerIcon sx={{ fontSize: 50 }} /> },
  { id: 3, label: "SmartWatch", icon: <WatchIcon sx={{ fontSize: 50 }} /> },
  { id: 4, label: "Camera", icon: <CameraAltOutlinedIcon sx={{ fontSize: 50 }} /> },
  { id: 5, label: "Headphones", icon: <HeadphonesOutlinedIcon sx={{ fontSize: 50 }} /> },
  { id: 6, label: "Gaming", icon: <VideogameAssetOutlinedIcon sx={{ fontSize: 50 }} /> },
];

const Categories = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" component="h5" sx={{ color: "red", display: "flex", alignItems: "center" }}>
        <SquareIcon /> Categories
      </Typography>

      <Typography variant="h4" component="div" sx={{ marginTop: 2 }}>
        Browse by category
      </Typography>
      
      
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={2} key={category.id}>
            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                {category.icon}
                <Typography variant="h6" component="div">
                  {category.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <hr width='80%' />

    </Box>
  );
};

export default Categories;
