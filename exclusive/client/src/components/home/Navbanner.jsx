import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://slidechef.net/wp-content/uploads/2023/09/Iphone-15-Presentation-Template.jpg",
  "https://static.wixstatic.com/media/1c92ab_a0c05a895d1045e89bc3b81e71d31a7d~mv2.jpg",
  "https://mspoweruser.com/wp-content/uploads/2020/06/9CA72E16-7D11-4966-AD64-1946F889BA6F.jpeg",
  "https://asset1.ruecdn.com/images/content/events/780019/780019_banner_tablet_hires.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Navbanner = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: "50px" }}>
        
          <Box sx={{ overflow: "auto" }}>
            <List style={{ marginTop: "50px", color: "black" }}>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Women's fashion</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Men's fashion</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Electronics</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Home & lifestyle</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Sports & Outdoors</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Baby's toys</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Groceries & Pets</Button>
              </ListItem>
              <ListItem component={Link} to="/">
                <Button style={{ color: "black" }}>Health & Beauty</Button>
              </ListItem>
            </List>
          </Box>
       

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "55%" }}>
          <Slider {...settings}>
            {images.map((src, index) => (
              <Box key={index}>
                <img src={src} style={{ width: "90%", height: "500px" ,marginLeft:"80px"}} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <hr width='90%' />
    </Box>
  );
};

export default Navbanner;
